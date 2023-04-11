import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RacerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class RacerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Applicant Name
     */
    name: string;
    /**
     * Certificate Id
     */
    refNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum RacerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class RacerRequestBody extends SpeakeasyBase {
    certificateParameters?: RacerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: RacerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Racer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Racer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Racer504ApplicationJSON extends SpeakeasyBase {
    error?: Racer504ApplicationJSONErrorEnum;
    errorDescription?: Racer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Racer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Racer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Racer503ApplicationJSON extends SpeakeasyBase {
    error?: Racer503ApplicationJSONErrorEnum;
    errorDescription?: Racer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Racer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Racer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Racer502ApplicationJSON extends SpeakeasyBase {
    error?: Racer502ApplicationJSONErrorEnum;
    errorDescription?: Racer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Racer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Racer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Racer500ApplicationJSON extends SpeakeasyBase {
    error?: Racer500ApplicationJSONErrorEnum;
    errorDescription?: Racer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Racer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Racer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Racer404ApplicationJSON extends SpeakeasyBase {
    error?: Racer404ApplicationJSONErrorEnum;
    errorDescription?: Racer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Racer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Racer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Racer401ApplicationJSON extends SpeakeasyBase {
    error?: Racer401ApplicationJSONErrorEnum;
    errorDescription?: Racer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Racer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Racer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Racer400ApplicationJSON extends SpeakeasyBase {
    error?: Racer400ApplicationJSONErrorEnum;
    errorDescription?: Racer400ApplicationJSONErrorDescriptionEnum;
}
export declare class RacerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    racer400ApplicationJSONObject?: Racer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    racer401ApplicationJSONObject?: Racer401ApplicationJSON;
    /**
     * No record found
     */
    racer404ApplicationJSONObject?: Racer404ApplicationJSON;
    /**
     * Internal server error
     */
    racer500ApplicationJSONObject?: Racer500ApplicationJSON;
    /**
     * Bad gateway
     */
    racer502ApplicationJSONObject?: Racer502ApplicationJSON;
    /**
     * Service unavailable
     */
    racer503ApplicationJSONObject?: Racer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    racer504ApplicationJSONObject?: Racer504ApplicationJSON;
}
