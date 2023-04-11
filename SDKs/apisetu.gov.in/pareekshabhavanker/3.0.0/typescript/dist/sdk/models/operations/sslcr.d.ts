import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SslcrSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class SslcrRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * Aadhaar number
     */
    uid: string;
    /**
     * Register Number
     */
    regno: string;
    /**
     * Year
     */
    year: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum SslcrRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class SslcrRequestBody extends SpeakeasyBase {
    certificateParameters?: SslcrRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: SslcrRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Sslcr504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Sslcr504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Sslcr504ApplicationJSON extends SpeakeasyBase {
    error?: Sslcr504ApplicationJSONErrorEnum;
    errorDescription?: Sslcr504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sslcr503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Sslcr503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Sslcr503ApplicationJSON extends SpeakeasyBase {
    error?: Sslcr503ApplicationJSONErrorEnum;
    errorDescription?: Sslcr503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sslcr502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Sslcr502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Sslcr502ApplicationJSON extends SpeakeasyBase {
    error?: Sslcr502ApplicationJSONErrorEnum;
    errorDescription?: Sslcr502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sslcr500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Sslcr500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Sslcr500ApplicationJSON extends SpeakeasyBase {
    error?: Sslcr500ApplicationJSONErrorEnum;
    errorDescription?: Sslcr500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sslcr404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Sslcr404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Sslcr404ApplicationJSON extends SpeakeasyBase {
    error?: Sslcr404ApplicationJSONErrorEnum;
    errorDescription?: Sslcr404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sslcr401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Sslcr401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Sslcr401ApplicationJSON extends SpeakeasyBase {
    error?: Sslcr401ApplicationJSONErrorEnum;
    errorDescription?: Sslcr401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sslcr400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Sslcr400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Sslcr400ApplicationJSON extends SpeakeasyBase {
    error?: Sslcr400ApplicationJSONErrorEnum;
    errorDescription?: Sslcr400ApplicationJSONErrorDescriptionEnum;
}
export declare class SslcrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    sslcr400ApplicationJSONObject?: Sslcr400ApplicationJSON;
    /**
     * Unauthorized access
     */
    sslcr401ApplicationJSONObject?: Sslcr401ApplicationJSON;
    /**
     * No record found
     */
    sslcr404ApplicationJSONObject?: Sslcr404ApplicationJSON;
    /**
     * Internal server error
     */
    sslcr500ApplicationJSONObject?: Sslcr500ApplicationJSON;
    /**
     * Bad gateway
     */
    sslcr502ApplicationJSONObject?: Sslcr502ApplicationJSON;
    /**
     * Service unavailable
     */
    sslcr503ApplicationJSONObject?: Sslcr503ApplicationJSON;
    /**
     * Gateway timeout
     */
    sslcr504ApplicationJSONObject?: Sslcr504ApplicationJSON;
}
