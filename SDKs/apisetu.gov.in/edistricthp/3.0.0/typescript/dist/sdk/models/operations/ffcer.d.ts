import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FfcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class FfcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * ApplicationNumber
     */
    udf1: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum FfcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class FfcerRequestBody extends SpeakeasyBase {
    certificateParameters?: FfcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: FfcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Ffcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ffcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Ffcer504ApplicationJSON extends SpeakeasyBase {
    error?: Ffcer504ApplicationJSONErrorEnum;
    errorDescription?: Ffcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ffcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ffcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Ffcer503ApplicationJSON extends SpeakeasyBase {
    error?: Ffcer503ApplicationJSONErrorEnum;
    errorDescription?: Ffcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ffcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ffcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Ffcer502ApplicationJSON extends SpeakeasyBase {
    error?: Ffcer502ApplicationJSONErrorEnum;
    errorDescription?: Ffcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ffcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ffcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Ffcer500ApplicationJSON extends SpeakeasyBase {
    error?: Ffcer500ApplicationJSONErrorEnum;
    errorDescription?: Ffcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ffcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ffcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Ffcer404ApplicationJSON extends SpeakeasyBase {
    error?: Ffcer404ApplicationJSONErrorEnum;
    errorDescription?: Ffcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ffcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ffcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Ffcer401ApplicationJSON extends SpeakeasyBase {
    error?: Ffcer401ApplicationJSONErrorEnum;
    errorDescription?: Ffcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ffcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ffcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Ffcer400ApplicationJSON extends SpeakeasyBase {
    error?: Ffcer400ApplicationJSONErrorEnum;
    errorDescription?: Ffcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class FfcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    ffcer400ApplicationJSONObject?: Ffcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    ffcer401ApplicationJSONObject?: Ffcer401ApplicationJSON;
    /**
     * No record found
     */
    ffcer404ApplicationJSONObject?: Ffcer404ApplicationJSON;
    /**
     * Internal server error
     */
    ffcer500ApplicationJSONObject?: Ffcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    ffcer502ApplicationJSONObject?: Ffcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    ffcer503ApplicationJSONObject?: Ffcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    ffcer504ApplicationJSONObject?: Ffcer504ApplicationJSON;
}
