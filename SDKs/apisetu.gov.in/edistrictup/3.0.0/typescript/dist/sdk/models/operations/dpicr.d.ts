import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DpicrSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class DpicrRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Application No
     */
    applicationNo: string;
    /**
     * Certificate ID
     */
    certificateID: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum DpicrRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class DpicrRequestBody extends SpeakeasyBase {
    certificateParameters?: DpicrRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: DpicrRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Dpicr504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Dpicr504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Dpicr504ApplicationJSON extends SpeakeasyBase {
    error?: Dpicr504ApplicationJSONErrorEnum;
    errorDescription?: Dpicr504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dpicr503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Dpicr503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Dpicr503ApplicationJSON extends SpeakeasyBase {
    error?: Dpicr503ApplicationJSONErrorEnum;
    errorDescription?: Dpicr503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dpicr502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Dpicr502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Dpicr502ApplicationJSON extends SpeakeasyBase {
    error?: Dpicr502ApplicationJSONErrorEnum;
    errorDescription?: Dpicr502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dpicr500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Dpicr500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Dpicr500ApplicationJSON extends SpeakeasyBase {
    error?: Dpicr500ApplicationJSONErrorEnum;
    errorDescription?: Dpicr500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dpicr404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Dpicr404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Dpicr404ApplicationJSON extends SpeakeasyBase {
    error?: Dpicr404ApplicationJSONErrorEnum;
    errorDescription?: Dpicr404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dpicr401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Dpicr401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Dpicr401ApplicationJSON extends SpeakeasyBase {
    error?: Dpicr401ApplicationJSONErrorEnum;
    errorDescription?: Dpicr401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dpicr400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Dpicr400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Dpicr400ApplicationJSON extends SpeakeasyBase {
    error?: Dpicr400ApplicationJSONErrorEnum;
    errorDescription?: Dpicr400ApplicationJSONErrorDescriptionEnum;
}
export declare class DpicrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    dpicr400ApplicationJSONObject?: Dpicr400ApplicationJSON;
    /**
     * Unauthorized access
     */
    dpicr401ApplicationJSONObject?: Dpicr401ApplicationJSON;
    /**
     * No record found
     */
    dpicr404ApplicationJSONObject?: Dpicr404ApplicationJSON;
    /**
     * Internal server error
     */
    dpicr500ApplicationJSONObject?: Dpicr500ApplicationJSON;
    /**
     * Bad gateway
     */
    dpicr502ApplicationJSONObject?: Dpicr502ApplicationJSON;
    /**
     * Service unavailable
     */
    dpicr503ApplicationJSONObject?: Dpicr503ApplicationJSON;
    /**
     * Gateway timeout
     */
    dpicr504ApplicationJSONObject?: Dpicr504ApplicationJSON;
}
