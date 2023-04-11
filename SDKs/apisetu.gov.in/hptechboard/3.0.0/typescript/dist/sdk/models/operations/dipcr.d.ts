import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DipcrSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class DipcrRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Roll Number
     */
    rollNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum DipcrRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class DipcrRequestBody extends SpeakeasyBase {
    certificateParameters?: DipcrRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: DipcrRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Dipcr504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Dipcr504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Dipcr504ApplicationJSON extends SpeakeasyBase {
    error?: Dipcr504ApplicationJSONErrorEnum;
    errorDescription?: Dipcr504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dipcr503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Dipcr503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Dipcr503ApplicationJSON extends SpeakeasyBase {
    error?: Dipcr503ApplicationJSONErrorEnum;
    errorDescription?: Dipcr503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dipcr502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Dipcr502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Dipcr502ApplicationJSON extends SpeakeasyBase {
    error?: Dipcr502ApplicationJSONErrorEnum;
    errorDescription?: Dipcr502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dipcr500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Dipcr500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Dipcr500ApplicationJSON extends SpeakeasyBase {
    error?: Dipcr500ApplicationJSONErrorEnum;
    errorDescription?: Dipcr500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dipcr404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Dipcr404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Dipcr404ApplicationJSON extends SpeakeasyBase {
    error?: Dipcr404ApplicationJSONErrorEnum;
    errorDescription?: Dipcr404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dipcr401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Dipcr401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Dipcr401ApplicationJSON extends SpeakeasyBase {
    error?: Dipcr401ApplicationJSONErrorEnum;
    errorDescription?: Dipcr401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dipcr400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Dipcr400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Dipcr400ApplicationJSON extends SpeakeasyBase {
    error?: Dipcr400ApplicationJSONErrorEnum;
    errorDescription?: Dipcr400ApplicationJSONErrorDescriptionEnum;
}
export declare class DipcrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    dipcr400ApplicationJSONObject?: Dipcr400ApplicationJSON;
    /**
     * Unauthorized access
     */
    dipcr401ApplicationJSONObject?: Dipcr401ApplicationJSON;
    /**
     * No record found
     */
    dipcr404ApplicationJSONObject?: Dipcr404ApplicationJSON;
    /**
     * Internal server error
     */
    dipcr500ApplicationJSONObject?: Dipcr500ApplicationJSON;
    /**
     * Bad gateway
     */
    dipcr502ApplicationJSONObject?: Dipcr502ApplicationJSON;
    /**
     * Service unavailable
     */
    dipcr503ApplicationJSONObject?: Dipcr503ApplicationJSON;
    /**
     * Gateway timeout
     */
    dipcr504ApplicationJSONObject?: Dipcr504ApplicationJSON;
}
