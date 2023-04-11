import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SslcsSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class SslcsRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Reference No.
     */
    refNo: string;
    /**
     * Token No.
     */
    tokenNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum SslcsRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class SslcsRequestBody extends SpeakeasyBase {
    certificateParameters?: SslcsRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: SslcsRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Sslcs504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Sslcs504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Sslcs504ApplicationJSON extends SpeakeasyBase {
    error?: Sslcs504ApplicationJSONErrorEnum;
    errorDescription?: Sslcs504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sslcs503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Sslcs503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Sslcs503ApplicationJSON extends SpeakeasyBase {
    error?: Sslcs503ApplicationJSONErrorEnum;
    errorDescription?: Sslcs503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sslcs502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Sslcs502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Sslcs502ApplicationJSON extends SpeakeasyBase {
    error?: Sslcs502ApplicationJSONErrorEnum;
    errorDescription?: Sslcs502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sslcs500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Sslcs500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Sslcs500ApplicationJSON extends SpeakeasyBase {
    error?: Sslcs500ApplicationJSONErrorEnum;
    errorDescription?: Sslcs500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sslcs404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Sslcs404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Sslcs404ApplicationJSON extends SpeakeasyBase {
    error?: Sslcs404ApplicationJSONErrorEnum;
    errorDescription?: Sslcs404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sslcs401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Sslcs401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Sslcs401ApplicationJSON extends SpeakeasyBase {
    error?: Sslcs401ApplicationJSONErrorEnum;
    errorDescription?: Sslcs401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sslcs400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Sslcs400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Sslcs400ApplicationJSON extends SpeakeasyBase {
    error?: Sslcs400ApplicationJSONErrorEnum;
    errorDescription?: Sslcs400ApplicationJSONErrorDescriptionEnum;
}
export declare class SslcsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    sslcs400ApplicationJSONObject?: Sslcs400ApplicationJSON;
    /**
     * Unauthorized access
     */
    sslcs401ApplicationJSONObject?: Sslcs401ApplicationJSON;
    /**
     * No record found
     */
    sslcs404ApplicationJSONObject?: Sslcs404ApplicationJSON;
    /**
     * Internal server error
     */
    sslcs500ApplicationJSONObject?: Sslcs500ApplicationJSON;
    /**
     * Bad gateway
     */
    sslcs502ApplicationJSONObject?: Sslcs502ApplicationJSON;
    /**
     * Service unavailable
     */
    sslcs503ApplicationJSONObject?: Sslcs503ApplicationJSON;
    /**
     * Gateway timeout
     */
    sslcs504ApplicationJSONObject?: Sslcs504ApplicationJSON;
}
