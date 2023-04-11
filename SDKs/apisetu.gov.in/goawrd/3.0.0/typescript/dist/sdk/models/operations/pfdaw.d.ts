import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PfdawSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class PfdawRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum PfdawRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class PfdawRequestBody extends SpeakeasyBase {
    certificateParameters?: PfdawRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: PfdawRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Pfdaw504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Pfdaw504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Pfdaw504ApplicationJSON extends SpeakeasyBase {
    error?: Pfdaw504ApplicationJSONErrorEnum;
    errorDescription?: Pfdaw504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pfdaw503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Pfdaw503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Pfdaw503ApplicationJSON extends SpeakeasyBase {
    error?: Pfdaw503ApplicationJSONErrorEnum;
    errorDescription?: Pfdaw503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pfdaw502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Pfdaw502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Pfdaw502ApplicationJSON extends SpeakeasyBase {
    error?: Pfdaw502ApplicationJSONErrorEnum;
    errorDescription?: Pfdaw502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pfdaw500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Pfdaw500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Pfdaw500ApplicationJSON extends SpeakeasyBase {
    error?: Pfdaw500ApplicationJSONErrorEnum;
    errorDescription?: Pfdaw500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pfdaw404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Pfdaw404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Pfdaw404ApplicationJSON extends SpeakeasyBase {
    error?: Pfdaw404ApplicationJSONErrorEnum;
    errorDescription?: Pfdaw404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pfdaw401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Pfdaw401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Pfdaw401ApplicationJSON extends SpeakeasyBase {
    error?: Pfdaw401ApplicationJSONErrorEnum;
    errorDescription?: Pfdaw401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pfdaw400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Pfdaw400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Pfdaw400ApplicationJSON extends SpeakeasyBase {
    error?: Pfdaw400ApplicationJSONErrorEnum;
    errorDescription?: Pfdaw400ApplicationJSONErrorDescriptionEnum;
}
export declare class PfdawResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    pfdaw400ApplicationJSONObject?: Pfdaw400ApplicationJSON;
    /**
     * Unauthorized access
     */
    pfdaw401ApplicationJSONObject?: Pfdaw401ApplicationJSON;
    /**
     * No record found
     */
    pfdaw404ApplicationJSONObject?: Pfdaw404ApplicationJSON;
    /**
     * Internal server error
     */
    pfdaw500ApplicationJSONObject?: Pfdaw500ApplicationJSON;
    /**
     * Bad gateway
     */
    pfdaw502ApplicationJSONObject?: Pfdaw502ApplicationJSON;
    /**
     * Service unavailable
     */
    pfdaw503ApplicationJSONObject?: Pfdaw503ApplicationJSON;
    /**
     * Gateway timeout
     */
    pfdaw504ApplicationJSONObject?: Pfdaw504ApplicationJSON;
}
