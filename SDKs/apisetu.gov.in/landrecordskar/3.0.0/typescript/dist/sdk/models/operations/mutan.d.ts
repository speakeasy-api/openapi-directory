import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MutanSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class MutanRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Document Number
     */
    documentNumber: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum MutanRequestBodyFormatEnum {
    Xml = "xml",
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class MutanRequestBody extends SpeakeasyBase {
    certificateParameters?: MutanRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: MutanRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Mutan504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Mutan504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Mutan504ApplicationJSON extends SpeakeasyBase {
    error?: Mutan504ApplicationJSONErrorEnum;
    errorDescription?: Mutan504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mutan503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Mutan503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Mutan503ApplicationJSON extends SpeakeasyBase {
    error?: Mutan503ApplicationJSONErrorEnum;
    errorDescription?: Mutan503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mutan502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Mutan502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Mutan502ApplicationJSON extends SpeakeasyBase {
    error?: Mutan502ApplicationJSONErrorEnum;
    errorDescription?: Mutan502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mutan500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Mutan500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Mutan500ApplicationJSON extends SpeakeasyBase {
    error?: Mutan500ApplicationJSONErrorEnum;
    errorDescription?: Mutan500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mutan404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Mutan404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Mutan404ApplicationJSON extends SpeakeasyBase {
    error?: Mutan404ApplicationJSONErrorEnum;
    errorDescription?: Mutan404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mutan401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Mutan401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Mutan401ApplicationJSON extends SpeakeasyBase {
    error?: Mutan401ApplicationJSONErrorEnum;
    errorDescription?: Mutan401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mutan400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Mutan400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Mutan400ApplicationJSON extends SpeakeasyBase {
    error?: Mutan400ApplicationJSONErrorEnum;
    errorDescription?: Mutan400ApplicationJSONErrorDescriptionEnum;
}
export declare class MutanResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    mutan400ApplicationJSONObject?: Mutan400ApplicationJSON;
    /**
     * Unauthorized access
     */
    mutan401ApplicationJSONObject?: Mutan401ApplicationJSON;
    /**
     * No record found
     */
    mutan404ApplicationJSONObject?: Mutan404ApplicationJSON;
    /**
     * Internal server error
     */
    mutan500ApplicationJSONObject?: Mutan500ApplicationJSON;
    /**
     * Bad gateway
     */
    mutan502ApplicationJSONObject?: Mutan502ApplicationJSON;
    /**
     * Service unavailable
     */
    mutan503ApplicationJSONObject?: Mutan503ApplicationJSON;
    /**
     * Gateway timeout
     */
    mutan504ApplicationJSONObject?: Mutan504ApplicationJSON;
}
