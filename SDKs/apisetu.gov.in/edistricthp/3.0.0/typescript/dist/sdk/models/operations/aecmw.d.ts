import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AecmwSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class AecmwRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * ApplicationNumber
     */
    udf1: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum AecmwRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class AecmwRequestBody extends SpeakeasyBase {
    certificateParameters?: AecmwRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: AecmwRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Aecmw504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Aecmw504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Aecmw504ApplicationJSON extends SpeakeasyBase {
    error?: Aecmw504ApplicationJSONErrorEnum;
    errorDescription?: Aecmw504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Aecmw503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Aecmw503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Aecmw503ApplicationJSON extends SpeakeasyBase {
    error?: Aecmw503ApplicationJSONErrorEnum;
    errorDescription?: Aecmw503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Aecmw502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Aecmw502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Aecmw502ApplicationJSON extends SpeakeasyBase {
    error?: Aecmw502ApplicationJSONErrorEnum;
    errorDescription?: Aecmw502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Aecmw500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Aecmw500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Aecmw500ApplicationJSON extends SpeakeasyBase {
    error?: Aecmw500ApplicationJSONErrorEnum;
    errorDescription?: Aecmw500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Aecmw404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Aecmw404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Aecmw404ApplicationJSON extends SpeakeasyBase {
    error?: Aecmw404ApplicationJSONErrorEnum;
    errorDescription?: Aecmw404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Aecmw401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Aecmw401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Aecmw401ApplicationJSON extends SpeakeasyBase {
    error?: Aecmw401ApplicationJSONErrorEnum;
    errorDescription?: Aecmw401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Aecmw400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Aecmw400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Aecmw400ApplicationJSON extends SpeakeasyBase {
    error?: Aecmw400ApplicationJSONErrorEnum;
    errorDescription?: Aecmw400ApplicationJSONErrorDescriptionEnum;
}
export declare class AecmwResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    aecmw400ApplicationJSONObject?: Aecmw400ApplicationJSON;
    /**
     * Unauthorized access
     */
    aecmw401ApplicationJSONObject?: Aecmw401ApplicationJSON;
    /**
     * No record found
     */
    aecmw404ApplicationJSONObject?: Aecmw404ApplicationJSON;
    /**
     * Internal server error
     */
    aecmw500ApplicationJSONObject?: Aecmw500ApplicationJSON;
    /**
     * Bad gateway
     */
    aecmw502ApplicationJSONObject?: Aecmw502ApplicationJSON;
    /**
     * Service unavailable
     */
    aecmw503ApplicationJSONObject?: Aecmw503ApplicationJSON;
    /**
     * Gateway timeout
     */
    aecmw504ApplicationJSONObject?: Aecmw504ApplicationJSON;
}
