import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AlimwSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class AlimwRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * ApplicationNumber
     */
    udf1: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum AlimwRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class AlimwRequestBody extends SpeakeasyBase {
    certificateParameters?: AlimwRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: AlimwRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Alimw504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Alimw504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Alimw504ApplicationJSON extends SpeakeasyBase {
    error?: Alimw504ApplicationJSONErrorEnum;
    errorDescription?: Alimw504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alimw503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Alimw503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Alimw503ApplicationJSON extends SpeakeasyBase {
    error?: Alimw503ApplicationJSONErrorEnum;
    errorDescription?: Alimw503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alimw502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Alimw502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Alimw502ApplicationJSON extends SpeakeasyBase {
    error?: Alimw502ApplicationJSONErrorEnum;
    errorDescription?: Alimw502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alimw500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Alimw500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Alimw500ApplicationJSON extends SpeakeasyBase {
    error?: Alimw500ApplicationJSONErrorEnum;
    errorDescription?: Alimw500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alimw404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Alimw404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Alimw404ApplicationJSON extends SpeakeasyBase {
    error?: Alimw404ApplicationJSONErrorEnum;
    errorDescription?: Alimw404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alimw401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Alimw401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Alimw401ApplicationJSON extends SpeakeasyBase {
    error?: Alimw401ApplicationJSONErrorEnum;
    errorDescription?: Alimw401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alimw400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Alimw400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Alimw400ApplicationJSON extends SpeakeasyBase {
    error?: Alimw400ApplicationJSONErrorEnum;
    errorDescription?: Alimw400ApplicationJSONErrorDescriptionEnum;
}
export declare class AlimwResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    alimw400ApplicationJSONObject?: Alimw400ApplicationJSON;
    /**
     * Unauthorized access
     */
    alimw401ApplicationJSONObject?: Alimw401ApplicationJSON;
    /**
     * No record found
     */
    alimw404ApplicationJSONObject?: Alimw404ApplicationJSON;
    /**
     * Internal server error
     */
    alimw500ApplicationJSONObject?: Alimw500ApplicationJSON;
    /**
     * Bad gateway
     */
    alimw502ApplicationJSONObject?: Alimw502ApplicationJSON;
    /**
     * Service unavailable
     */
    alimw503ApplicationJSONObject?: Alimw503ApplicationJSON;
    /**
     * Gateway timeout
     */
    alimw504ApplicationJSONObject?: Alimw504ApplicationJSON;
}
