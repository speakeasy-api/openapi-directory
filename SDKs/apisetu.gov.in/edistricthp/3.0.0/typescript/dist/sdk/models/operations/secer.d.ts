import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SecerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class SecerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * ApplicationNumber
     */
    udf1: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum SecerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class SecerRequestBody extends SpeakeasyBase {
    certificateParameters?: SecerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: SecerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Secer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Secer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Secer504ApplicationJSON extends SpeakeasyBase {
    error?: Secer504ApplicationJSONErrorEnum;
    errorDescription?: Secer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Secer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Secer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Secer503ApplicationJSON extends SpeakeasyBase {
    error?: Secer503ApplicationJSONErrorEnum;
    errorDescription?: Secer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Secer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Secer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Secer502ApplicationJSON extends SpeakeasyBase {
    error?: Secer502ApplicationJSONErrorEnum;
    errorDescription?: Secer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Secer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Secer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Secer500ApplicationJSON extends SpeakeasyBase {
    error?: Secer500ApplicationJSONErrorEnum;
    errorDescription?: Secer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Secer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Secer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Secer404ApplicationJSON extends SpeakeasyBase {
    error?: Secer404ApplicationJSONErrorEnum;
    errorDescription?: Secer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Secer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Secer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Secer401ApplicationJSON extends SpeakeasyBase {
    error?: Secer401ApplicationJSONErrorEnum;
    errorDescription?: Secer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Secer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Secer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Secer400ApplicationJSON extends SpeakeasyBase {
    error?: Secer400ApplicationJSONErrorEnum;
    errorDescription?: Secer400ApplicationJSONErrorDescriptionEnum;
}
export declare class SecerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    secer400ApplicationJSONObject?: Secer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    secer401ApplicationJSONObject?: Secer401ApplicationJSON;
    /**
     * No record found
     */
    secer404ApplicationJSONObject?: Secer404ApplicationJSON;
    /**
     * Internal server error
     */
    secer500ApplicationJSONObject?: Secer500ApplicationJSON;
    /**
     * Bad gateway
     */
    secer502ApplicationJSONObject?: Secer502ApplicationJSON;
    /**
     * Service unavailable
     */
    secer503ApplicationJSONObject?: Secer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    secer504ApplicationJSONObject?: Secer504ApplicationJSON;
}
