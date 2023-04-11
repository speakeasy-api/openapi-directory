import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DelcsSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class DelcsRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum DelcsRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class DelcsRequestBody extends SpeakeasyBase {
    certificateParameters?: DelcsRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: DelcsRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Delcs504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Delcs504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Delcs504ApplicationJSON extends SpeakeasyBase {
    error?: Delcs504ApplicationJSONErrorEnum;
    errorDescription?: Delcs504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Delcs503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Delcs503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Delcs503ApplicationJSON extends SpeakeasyBase {
    error?: Delcs503ApplicationJSONErrorEnum;
    errorDescription?: Delcs503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Delcs502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Delcs502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Delcs502ApplicationJSON extends SpeakeasyBase {
    error?: Delcs502ApplicationJSONErrorEnum;
    errorDescription?: Delcs502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Delcs500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Delcs500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Delcs500ApplicationJSON extends SpeakeasyBase {
    error?: Delcs500ApplicationJSONErrorEnum;
    errorDescription?: Delcs500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Delcs404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Delcs404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Delcs404ApplicationJSON extends SpeakeasyBase {
    error?: Delcs404ApplicationJSONErrorEnum;
    errorDescription?: Delcs404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Delcs401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Delcs401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Delcs401ApplicationJSON extends SpeakeasyBase {
    error?: Delcs401ApplicationJSONErrorEnum;
    errorDescription?: Delcs401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Delcs400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Delcs400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Delcs400ApplicationJSON extends SpeakeasyBase {
    error?: Delcs400ApplicationJSONErrorEnum;
    errorDescription?: Delcs400ApplicationJSONErrorDescriptionEnum;
}
export declare class DelcsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    delcs400ApplicationJSONObject?: Delcs400ApplicationJSON;
    /**
     * Unauthorized access
     */
    delcs401ApplicationJSONObject?: Delcs401ApplicationJSON;
    /**
     * No record found
     */
    delcs404ApplicationJSONObject?: Delcs404ApplicationJSON;
    /**
     * Internal server error
     */
    delcs500ApplicationJSONObject?: Delcs500ApplicationJSON;
    /**
     * Bad gateway
     */
    delcs502ApplicationJSONObject?: Delcs502ApplicationJSON;
    /**
     * Service unavailable
     */
    delcs503ApplicationJSONObject?: Delcs503ApplicationJSON;
    /**
     * Gateway timeout
     */
    delcs504ApplicationJSONObject?: Delcs504ApplicationJSON;
}
