import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BhcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class BhcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * ApplicationNumber
     */
    udf1: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum BhcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class BhcerRequestBody extends SpeakeasyBase {
    certificateParameters?: BhcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: BhcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Bhcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Bhcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Bhcer504ApplicationJSON extends SpeakeasyBase {
    error?: Bhcer504ApplicationJSONErrorEnum;
    errorDescription?: Bhcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bhcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Bhcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Bhcer503ApplicationJSON extends SpeakeasyBase {
    error?: Bhcer503ApplicationJSONErrorEnum;
    errorDescription?: Bhcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bhcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Bhcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Bhcer502ApplicationJSON extends SpeakeasyBase {
    error?: Bhcer502ApplicationJSONErrorEnum;
    errorDescription?: Bhcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bhcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Bhcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Bhcer500ApplicationJSON extends SpeakeasyBase {
    error?: Bhcer500ApplicationJSONErrorEnum;
    errorDescription?: Bhcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bhcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Bhcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Bhcer404ApplicationJSON extends SpeakeasyBase {
    error?: Bhcer404ApplicationJSONErrorEnum;
    errorDescription?: Bhcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bhcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Bhcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Bhcer401ApplicationJSON extends SpeakeasyBase {
    error?: Bhcer401ApplicationJSONErrorEnum;
    errorDescription?: Bhcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bhcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Bhcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Bhcer400ApplicationJSON extends SpeakeasyBase {
    error?: Bhcer400ApplicationJSONErrorEnum;
    errorDescription?: Bhcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class BhcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    bhcer400ApplicationJSONObject?: Bhcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    bhcer401ApplicationJSONObject?: Bhcer401ApplicationJSON;
    /**
     * No record found
     */
    bhcer404ApplicationJSONObject?: Bhcer404ApplicationJSON;
    /**
     * Internal server error
     */
    bhcer500ApplicationJSONObject?: Bhcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    bhcer502ApplicationJSONObject?: Bhcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    bhcer503ApplicationJSONObject?: Bhcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    bhcer504ApplicationJSONObject?: Bhcer504ApplicationJSON;
}
