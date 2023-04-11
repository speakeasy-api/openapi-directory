import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RatcrSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class RatcrRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Aadhaar number
     */
    uid: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum RatcrRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class RatcrRequestBody extends SpeakeasyBase {
    certificateParameters?: RatcrRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: RatcrRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Ratcr504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ratcr504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Ratcr504ApplicationJSON extends SpeakeasyBase {
    error?: Ratcr504ApplicationJSONErrorEnum;
    errorDescription?: Ratcr504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ratcr503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ratcr503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Ratcr503ApplicationJSON extends SpeakeasyBase {
    error?: Ratcr503ApplicationJSONErrorEnum;
    errorDescription?: Ratcr503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ratcr502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ratcr502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Ratcr502ApplicationJSON extends SpeakeasyBase {
    error?: Ratcr502ApplicationJSONErrorEnum;
    errorDescription?: Ratcr502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ratcr500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ratcr500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Ratcr500ApplicationJSON extends SpeakeasyBase {
    error?: Ratcr500ApplicationJSONErrorEnum;
    errorDescription?: Ratcr500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ratcr404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ratcr404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Ratcr404ApplicationJSON extends SpeakeasyBase {
    error?: Ratcr404ApplicationJSONErrorEnum;
    errorDescription?: Ratcr404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ratcr401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ratcr401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Ratcr401ApplicationJSON extends SpeakeasyBase {
    error?: Ratcr401ApplicationJSONErrorEnum;
    errorDescription?: Ratcr401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ratcr400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ratcr400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Ratcr400ApplicationJSON extends SpeakeasyBase {
    error?: Ratcr400ApplicationJSONErrorEnum;
    errorDescription?: Ratcr400ApplicationJSONErrorDescriptionEnum;
}
export declare class RatcrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    ratcr400ApplicationJSONObject?: Ratcr400ApplicationJSON;
    /**
     * Unauthorized access
     */
    ratcr401ApplicationJSONObject?: Ratcr401ApplicationJSON;
    /**
     * No record found
     */
    ratcr404ApplicationJSONObject?: Ratcr404ApplicationJSON;
    /**
     * Internal server error
     */
    ratcr500ApplicationJSONObject?: Ratcr500ApplicationJSON;
    /**
     * Bad gateway
     */
    ratcr502ApplicationJSONObject?: Ratcr502ApplicationJSON;
    /**
     * Service unavailable
     */
    ratcr503ApplicationJSONObject?: Ratcr503ApplicationJSON;
    /**
     * Gateway timeout
     */
    ratcr504ApplicationJSONObject?: Ratcr504ApplicationJSON;
}
