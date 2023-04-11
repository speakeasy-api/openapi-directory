import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WwcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class WwcerRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum WwcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class WwcerRequestBody extends SpeakeasyBase {
    certificateParameters?: WwcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: WwcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Wwcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Wwcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Wwcer504ApplicationJSON extends SpeakeasyBase {
    error?: Wwcer504ApplicationJSONErrorEnum;
    errorDescription?: Wwcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Wwcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Wwcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Wwcer503ApplicationJSON extends SpeakeasyBase {
    error?: Wwcer503ApplicationJSONErrorEnum;
    errorDescription?: Wwcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Wwcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Wwcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Wwcer502ApplicationJSON extends SpeakeasyBase {
    error?: Wwcer502ApplicationJSONErrorEnum;
    errorDescription?: Wwcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Wwcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Wwcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Wwcer500ApplicationJSON extends SpeakeasyBase {
    error?: Wwcer500ApplicationJSONErrorEnum;
    errorDescription?: Wwcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Wwcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Wwcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Wwcer404ApplicationJSON extends SpeakeasyBase {
    error?: Wwcer404ApplicationJSONErrorEnum;
    errorDescription?: Wwcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Wwcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Wwcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Wwcer401ApplicationJSON extends SpeakeasyBase {
    error?: Wwcer401ApplicationJSONErrorEnum;
    errorDescription?: Wwcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Wwcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Wwcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Wwcer400ApplicationJSON extends SpeakeasyBase {
    error?: Wwcer400ApplicationJSONErrorEnum;
    errorDescription?: Wwcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class WwcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    wwcer400ApplicationJSONObject?: Wwcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    wwcer401ApplicationJSONObject?: Wwcer401ApplicationJSON;
    /**
     * No record found
     */
    wwcer404ApplicationJSONObject?: Wwcer404ApplicationJSON;
    /**
     * Internal server error
     */
    wwcer500ApplicationJSONObject?: Wwcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    wwcer502ApplicationJSONObject?: Wwcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    wwcer503ApplicationJSONObject?: Wwcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    wwcer504ApplicationJSONObject?: Wwcer504ApplicationJSON;
}
