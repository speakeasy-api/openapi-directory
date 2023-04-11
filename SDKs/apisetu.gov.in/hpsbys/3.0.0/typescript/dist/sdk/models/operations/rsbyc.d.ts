import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RsbycSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class RsbycRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Aadhaar number
     */
    uid: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum RsbycRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class RsbycRequestBody extends SpeakeasyBase {
    certificateParameters?: RsbycRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: RsbycRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Rsbyc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Rsbyc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Rsbyc504ApplicationJSON extends SpeakeasyBase {
    error?: Rsbyc504ApplicationJSONErrorEnum;
    errorDescription?: Rsbyc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rsbyc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Rsbyc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Rsbyc503ApplicationJSON extends SpeakeasyBase {
    error?: Rsbyc503ApplicationJSONErrorEnum;
    errorDescription?: Rsbyc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rsbyc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Rsbyc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Rsbyc502ApplicationJSON extends SpeakeasyBase {
    error?: Rsbyc502ApplicationJSONErrorEnum;
    errorDescription?: Rsbyc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rsbyc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Rsbyc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Rsbyc500ApplicationJSON extends SpeakeasyBase {
    error?: Rsbyc500ApplicationJSONErrorEnum;
    errorDescription?: Rsbyc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rsbyc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Rsbyc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Rsbyc404ApplicationJSON extends SpeakeasyBase {
    error?: Rsbyc404ApplicationJSONErrorEnum;
    errorDescription?: Rsbyc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rsbyc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Rsbyc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Rsbyc401ApplicationJSON extends SpeakeasyBase {
    error?: Rsbyc401ApplicationJSONErrorEnum;
    errorDescription?: Rsbyc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rsbyc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Rsbyc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Rsbyc400ApplicationJSON extends SpeakeasyBase {
    error?: Rsbyc400ApplicationJSONErrorEnum;
    errorDescription?: Rsbyc400ApplicationJSONErrorDescriptionEnum;
}
export declare class RsbycResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    rsbyc400ApplicationJSONObject?: Rsbyc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    rsbyc401ApplicationJSONObject?: Rsbyc401ApplicationJSON;
    /**
     * No record found
     */
    rsbyc404ApplicationJSONObject?: Rsbyc404ApplicationJSON;
    /**
     * Internal server error
     */
    rsbyc500ApplicationJSONObject?: Rsbyc500ApplicationJSON;
    /**
     * Bad gateway
     */
    rsbyc502ApplicationJSONObject?: Rsbyc502ApplicationJSON;
    /**
     * Service unavailable
     */
    rsbyc503ApplicationJSONObject?: Rsbyc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    rsbyc504ApplicationJSONObject?: Rsbyc504ApplicationJSON;
}
