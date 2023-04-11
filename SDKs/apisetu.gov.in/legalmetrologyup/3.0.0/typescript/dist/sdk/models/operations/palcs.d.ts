import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PalcsSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class PalcsRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum PalcsRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class PalcsRequestBody extends SpeakeasyBase {
    certificateParameters?: PalcsRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: PalcsRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Palcs504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Palcs504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Palcs504ApplicationJSON extends SpeakeasyBase {
    error?: Palcs504ApplicationJSONErrorEnum;
    errorDescription?: Palcs504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Palcs503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Palcs503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Palcs503ApplicationJSON extends SpeakeasyBase {
    error?: Palcs503ApplicationJSONErrorEnum;
    errorDescription?: Palcs503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Palcs502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Palcs502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Palcs502ApplicationJSON extends SpeakeasyBase {
    error?: Palcs502ApplicationJSONErrorEnum;
    errorDescription?: Palcs502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Palcs500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Palcs500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Palcs500ApplicationJSON extends SpeakeasyBase {
    error?: Palcs500ApplicationJSONErrorEnum;
    errorDescription?: Palcs500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Palcs404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Palcs404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Palcs404ApplicationJSON extends SpeakeasyBase {
    error?: Palcs404ApplicationJSONErrorEnum;
    errorDescription?: Palcs404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Palcs401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Palcs401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Palcs401ApplicationJSON extends SpeakeasyBase {
    error?: Palcs401ApplicationJSONErrorEnum;
    errorDescription?: Palcs401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Palcs400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Palcs400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Palcs400ApplicationJSON extends SpeakeasyBase {
    error?: Palcs400ApplicationJSONErrorEnum;
    errorDescription?: Palcs400ApplicationJSONErrorDescriptionEnum;
}
export declare class PalcsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    palcs400ApplicationJSONObject?: Palcs400ApplicationJSON;
    /**
     * Unauthorized access
     */
    palcs401ApplicationJSONObject?: Palcs401ApplicationJSON;
    /**
     * No record found
     */
    palcs404ApplicationJSONObject?: Palcs404ApplicationJSON;
    /**
     * Internal server error
     */
    palcs500ApplicationJSONObject?: Palcs500ApplicationJSON;
    /**
     * Bad gateway
     */
    palcs502ApplicationJSONObject?: Palcs502ApplicationJSON;
    /**
     * Service unavailable
     */
    palcs503ApplicationJSONObject?: Palcs503ApplicationJSON;
    /**
     * Gateway timeout
     */
    palcs504ApplicationJSONObject?: Palcs504ApplicationJSON;
}
