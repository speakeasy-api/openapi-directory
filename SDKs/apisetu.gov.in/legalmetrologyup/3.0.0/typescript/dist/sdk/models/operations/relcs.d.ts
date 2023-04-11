import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RelcsSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class RelcsRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Application No.
     */
    applicationNo: string;
    /**
     * License No.
     */
    licenseNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum RelcsRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class RelcsRequestBody extends SpeakeasyBase {
    certificateParameters?: RelcsRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: RelcsRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Relcs504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Relcs504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Relcs504ApplicationJSON extends SpeakeasyBase {
    error?: Relcs504ApplicationJSONErrorEnum;
    errorDescription?: Relcs504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Relcs503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Relcs503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Relcs503ApplicationJSON extends SpeakeasyBase {
    error?: Relcs503ApplicationJSONErrorEnum;
    errorDescription?: Relcs503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Relcs502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Relcs502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Relcs502ApplicationJSON extends SpeakeasyBase {
    error?: Relcs502ApplicationJSONErrorEnum;
    errorDescription?: Relcs502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Relcs500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Relcs500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Relcs500ApplicationJSON extends SpeakeasyBase {
    error?: Relcs500ApplicationJSONErrorEnum;
    errorDescription?: Relcs500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Relcs404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Relcs404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Relcs404ApplicationJSON extends SpeakeasyBase {
    error?: Relcs404ApplicationJSONErrorEnum;
    errorDescription?: Relcs404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Relcs401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Relcs401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Relcs401ApplicationJSON extends SpeakeasyBase {
    error?: Relcs401ApplicationJSONErrorEnum;
    errorDescription?: Relcs401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Relcs400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Relcs400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Relcs400ApplicationJSON extends SpeakeasyBase {
    error?: Relcs400ApplicationJSONErrorEnum;
    errorDescription?: Relcs400ApplicationJSONErrorDescriptionEnum;
}
export declare class RelcsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    relcs400ApplicationJSONObject?: Relcs400ApplicationJSON;
    /**
     * Unauthorized access
     */
    relcs401ApplicationJSONObject?: Relcs401ApplicationJSON;
    /**
     * No record found
     */
    relcs404ApplicationJSONObject?: Relcs404ApplicationJSON;
    /**
     * Internal server error
     */
    relcs500ApplicationJSONObject?: Relcs500ApplicationJSON;
    /**
     * Bad gateway
     */
    relcs502ApplicationJSONObject?: Relcs502ApplicationJSON;
    /**
     * Service unavailable
     */
    relcs503ApplicationJSONObject?: Relcs503ApplicationJSON;
    /**
     * Gateway timeout
     */
    relcs504ApplicationJSONObject?: Relcs504ApplicationJSON;
}
