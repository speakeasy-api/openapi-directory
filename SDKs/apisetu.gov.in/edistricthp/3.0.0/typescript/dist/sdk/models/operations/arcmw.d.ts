import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArcmwSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class ArcmwRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * ApplicationNumber
     */
    udf1: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum ArcmwRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class ArcmwRequestBody extends SpeakeasyBase {
    certificateParameters?: ArcmwRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: ArcmwRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Arcmw504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Arcmw504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Arcmw504ApplicationJSON extends SpeakeasyBase {
    error?: Arcmw504ApplicationJSONErrorEnum;
    errorDescription?: Arcmw504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Arcmw503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Arcmw503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Arcmw503ApplicationJSON extends SpeakeasyBase {
    error?: Arcmw503ApplicationJSONErrorEnum;
    errorDescription?: Arcmw503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Arcmw502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Arcmw502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Arcmw502ApplicationJSON extends SpeakeasyBase {
    error?: Arcmw502ApplicationJSONErrorEnum;
    errorDescription?: Arcmw502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Arcmw500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Arcmw500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Arcmw500ApplicationJSON extends SpeakeasyBase {
    error?: Arcmw500ApplicationJSONErrorEnum;
    errorDescription?: Arcmw500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Arcmw404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Arcmw404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Arcmw404ApplicationJSON extends SpeakeasyBase {
    error?: Arcmw404ApplicationJSONErrorEnum;
    errorDescription?: Arcmw404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Arcmw401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Arcmw401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Arcmw401ApplicationJSON extends SpeakeasyBase {
    error?: Arcmw401ApplicationJSONErrorEnum;
    errorDescription?: Arcmw401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Arcmw400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Arcmw400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Arcmw400ApplicationJSON extends SpeakeasyBase {
    error?: Arcmw400ApplicationJSONErrorEnum;
    errorDescription?: Arcmw400ApplicationJSONErrorDescriptionEnum;
}
export declare class ArcmwResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    arcmw400ApplicationJSONObject?: Arcmw400ApplicationJSON;
    /**
     * Unauthorized access
     */
    arcmw401ApplicationJSONObject?: Arcmw401ApplicationJSON;
    /**
     * No record found
     */
    arcmw404ApplicationJSONObject?: Arcmw404ApplicationJSON;
    /**
     * Internal server error
     */
    arcmw500ApplicationJSONObject?: Arcmw500ApplicationJSON;
    /**
     * Bad gateway
     */
    arcmw502ApplicationJSONObject?: Arcmw502ApplicationJSON;
    /**
     * Service unavailable
     */
    arcmw503ApplicationJSONObject?: Arcmw503ApplicationJSON;
    /**
     * Gateway timeout
     */
    arcmw504ApplicationJSONObject?: Arcmw504ApplicationJSON;
}
