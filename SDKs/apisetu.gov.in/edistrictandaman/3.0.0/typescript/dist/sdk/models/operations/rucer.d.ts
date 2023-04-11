import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RucerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class RucerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Certificate Number
     */
    certificateNumber: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum RucerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class RucerRequestBody extends SpeakeasyBase {
    certificateParameters?: RucerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: RucerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Rucer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Rucer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Rucer504ApplicationJSON extends SpeakeasyBase {
    error?: Rucer504ApplicationJSONErrorEnum;
    errorDescription?: Rucer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rucer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Rucer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Rucer503ApplicationJSON extends SpeakeasyBase {
    error?: Rucer503ApplicationJSONErrorEnum;
    errorDescription?: Rucer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rucer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Rucer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Rucer502ApplicationJSON extends SpeakeasyBase {
    error?: Rucer502ApplicationJSONErrorEnum;
    errorDescription?: Rucer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rucer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Rucer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Rucer500ApplicationJSON extends SpeakeasyBase {
    error?: Rucer500ApplicationJSONErrorEnum;
    errorDescription?: Rucer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rucer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Rucer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Rucer404ApplicationJSON extends SpeakeasyBase {
    error?: Rucer404ApplicationJSONErrorEnum;
    errorDescription?: Rucer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rucer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Rucer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Rucer401ApplicationJSON extends SpeakeasyBase {
    error?: Rucer401ApplicationJSONErrorEnum;
    errorDescription?: Rucer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rucer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Rucer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Rucer400ApplicationJSON extends SpeakeasyBase {
    error?: Rucer400ApplicationJSONErrorEnum;
    errorDescription?: Rucer400ApplicationJSONErrorDescriptionEnum;
}
export declare class RucerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    rucer400ApplicationJSONObject?: Rucer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    rucer401ApplicationJSONObject?: Rucer401ApplicationJSON;
    /**
     * No record found
     */
    rucer404ApplicationJSONObject?: Rucer404ApplicationJSON;
    /**
     * Internal server error
     */
    rucer500ApplicationJSONObject?: Rucer500ApplicationJSON;
    /**
     * Bad gateway
     */
    rucer502ApplicationJSONObject?: Rucer502ApplicationJSON;
    /**
     * Service unavailable
     */
    rucer503ApplicationJSONObject?: Rucer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    rucer504ApplicationJSONObject?: Rucer504ApplicationJSON;
}
