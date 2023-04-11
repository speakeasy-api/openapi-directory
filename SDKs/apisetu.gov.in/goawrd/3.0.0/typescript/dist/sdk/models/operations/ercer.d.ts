import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ErcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class ErcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Registration No
     */
    registration: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum ErcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class ErcerRequestBody extends SpeakeasyBase {
    certificateParameters?: ErcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: ErcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Ercer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ercer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Ercer504ApplicationJSON extends SpeakeasyBase {
    error?: Ercer504ApplicationJSONErrorEnum;
    errorDescription?: Ercer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ercer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ercer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Ercer503ApplicationJSON extends SpeakeasyBase {
    error?: Ercer503ApplicationJSONErrorEnum;
    errorDescription?: Ercer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ercer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ercer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Ercer502ApplicationJSON extends SpeakeasyBase {
    error?: Ercer502ApplicationJSONErrorEnum;
    errorDescription?: Ercer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ercer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ercer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Ercer500ApplicationJSON extends SpeakeasyBase {
    error?: Ercer500ApplicationJSONErrorEnum;
    errorDescription?: Ercer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ercer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ercer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Ercer404ApplicationJSON extends SpeakeasyBase {
    error?: Ercer404ApplicationJSONErrorEnum;
    errorDescription?: Ercer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ercer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ercer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Ercer401ApplicationJSON extends SpeakeasyBase {
    error?: Ercer401ApplicationJSONErrorEnum;
    errorDescription?: Ercer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ercer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ercer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Ercer400ApplicationJSON extends SpeakeasyBase {
    error?: Ercer400ApplicationJSONErrorEnum;
    errorDescription?: Ercer400ApplicationJSONErrorDescriptionEnum;
}
export declare class ErcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    ercer400ApplicationJSONObject?: Ercer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    ercer401ApplicationJSONObject?: Ercer401ApplicationJSON;
    /**
     * No record found
     */
    ercer404ApplicationJSONObject?: Ercer404ApplicationJSON;
    /**
     * Internal server error
     */
    ercer500ApplicationJSONObject?: Ercer500ApplicationJSON;
    /**
     * Bad gateway
     */
    ercer502ApplicationJSONObject?: Ercer502ApplicationJSON;
    /**
     * Service unavailable
     */
    ercer503ApplicationJSONObject?: Ercer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    ercer504ApplicationJSONObject?: Ercer504ApplicationJSON;
}
