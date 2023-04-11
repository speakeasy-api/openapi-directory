import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApptuSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class ApptuRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Reference No.
     */
    refNo: string;
    /**
     * Token ID
     */
    tokenNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum ApptuRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class ApptuRequestBody extends SpeakeasyBase {
    certificateParameters?: ApptuRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: ApptuRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Apptu504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Apptu504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Apptu504ApplicationJSON extends SpeakeasyBase {
    error?: Apptu504ApplicationJSONErrorEnum;
    errorDescription?: Apptu504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Apptu503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Apptu503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Apptu503ApplicationJSON extends SpeakeasyBase {
    error?: Apptu503ApplicationJSONErrorEnum;
    errorDescription?: Apptu503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Apptu502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Apptu502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Apptu502ApplicationJSON extends SpeakeasyBase {
    error?: Apptu502ApplicationJSONErrorEnum;
    errorDescription?: Apptu502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Apptu500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Apptu500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Apptu500ApplicationJSON extends SpeakeasyBase {
    error?: Apptu500ApplicationJSONErrorEnum;
    errorDescription?: Apptu500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Apptu404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Apptu404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Apptu404ApplicationJSON extends SpeakeasyBase {
    error?: Apptu404ApplicationJSONErrorEnum;
    errorDescription?: Apptu404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Apptu401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Apptu401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Apptu401ApplicationJSON extends SpeakeasyBase {
    error?: Apptu401ApplicationJSONErrorEnum;
    errorDescription?: Apptu401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Apptu400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Apptu400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Apptu400ApplicationJSON extends SpeakeasyBase {
    error?: Apptu400ApplicationJSONErrorEnum;
    errorDescription?: Apptu400ApplicationJSONErrorDescriptionEnum;
}
export declare class ApptuResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    apptu400ApplicationJSONObject?: Apptu400ApplicationJSON;
    /**
     * Unauthorized access
     */
    apptu401ApplicationJSONObject?: Apptu401ApplicationJSON;
    /**
     * No record found
     */
    apptu404ApplicationJSONObject?: Apptu404ApplicationJSON;
    /**
     * Internal server error
     */
    apptu500ApplicationJSONObject?: Apptu500ApplicationJSON;
    /**
     * Bad gateway
     */
    apptu502ApplicationJSONObject?: Apptu502ApplicationJSON;
    /**
     * Service unavailable
     */
    apptu503ApplicationJSONObject?: Apptu503ApplicationJSON;
    /**
     * Gateway timeout
     */
    apptu504ApplicationJSONObject?: Apptu504ApplicationJSON;
}
