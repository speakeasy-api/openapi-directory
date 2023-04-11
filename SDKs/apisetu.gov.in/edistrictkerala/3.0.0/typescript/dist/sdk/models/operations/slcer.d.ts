import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SlcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class SlcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Application Number
     */
    aplno: string;
    /**
     * Certificate Number
     */
    certno: string;
    /**
     * Security Code
     */
    sccd: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum SlcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class SlcerRequestBody extends SpeakeasyBase {
    certificateParameters?: SlcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: SlcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Slcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Slcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Slcer504ApplicationJSON extends SpeakeasyBase {
    error?: Slcer504ApplicationJSONErrorEnum;
    errorDescription?: Slcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Slcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Slcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Slcer503ApplicationJSON extends SpeakeasyBase {
    error?: Slcer503ApplicationJSONErrorEnum;
    errorDescription?: Slcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Slcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Slcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Slcer502ApplicationJSON extends SpeakeasyBase {
    error?: Slcer502ApplicationJSONErrorEnum;
    errorDescription?: Slcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Slcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Slcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Slcer500ApplicationJSON extends SpeakeasyBase {
    error?: Slcer500ApplicationJSONErrorEnum;
    errorDescription?: Slcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Slcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Slcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Slcer404ApplicationJSON extends SpeakeasyBase {
    error?: Slcer404ApplicationJSONErrorEnum;
    errorDescription?: Slcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Slcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Slcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Slcer401ApplicationJSON extends SpeakeasyBase {
    error?: Slcer401ApplicationJSONErrorEnum;
    errorDescription?: Slcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Slcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Slcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Slcer400ApplicationJSON extends SpeakeasyBase {
    error?: Slcer400ApplicationJSONErrorEnum;
    errorDescription?: Slcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class SlcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    slcer400ApplicationJSONObject?: Slcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    slcer401ApplicationJSONObject?: Slcer401ApplicationJSON;
    /**
     * No record found
     */
    slcer404ApplicationJSONObject?: Slcer404ApplicationJSON;
    /**
     * Internal server error
     */
    slcer500ApplicationJSONObject?: Slcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    slcer502ApplicationJSONObject?: Slcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    slcer503ApplicationJSONObject?: Slcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    slcer504ApplicationJSONObject?: Slcer504ApplicationJSON;
}
