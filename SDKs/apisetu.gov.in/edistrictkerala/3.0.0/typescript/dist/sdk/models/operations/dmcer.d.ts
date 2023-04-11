import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DmcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class DmcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Application Number
     */
    aplno: string;
    /**
     * Certificate Number
     */
    certno: string;
    /**
     * Security Code
     */
    sccd: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum DmcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class DmcerRequestBody extends SpeakeasyBase {
    certificateParameters?: DmcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: DmcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Dmcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Dmcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Dmcer504ApplicationJSON extends SpeakeasyBase {
    error?: Dmcer504ApplicationJSONErrorEnum;
    errorDescription?: Dmcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dmcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Dmcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Dmcer503ApplicationJSON extends SpeakeasyBase {
    error?: Dmcer503ApplicationJSONErrorEnum;
    errorDescription?: Dmcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dmcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Dmcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Dmcer502ApplicationJSON extends SpeakeasyBase {
    error?: Dmcer502ApplicationJSONErrorEnum;
    errorDescription?: Dmcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dmcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Dmcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Dmcer500ApplicationJSON extends SpeakeasyBase {
    error?: Dmcer500ApplicationJSONErrorEnum;
    errorDescription?: Dmcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dmcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Dmcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Dmcer404ApplicationJSON extends SpeakeasyBase {
    error?: Dmcer404ApplicationJSONErrorEnum;
    errorDescription?: Dmcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dmcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Dmcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Dmcer401ApplicationJSON extends SpeakeasyBase {
    error?: Dmcer401ApplicationJSONErrorEnum;
    errorDescription?: Dmcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dmcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Dmcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Dmcer400ApplicationJSON extends SpeakeasyBase {
    error?: Dmcer400ApplicationJSONErrorEnum;
    errorDescription?: Dmcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class DmcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    dmcer400ApplicationJSONObject?: Dmcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    dmcer401ApplicationJSONObject?: Dmcer401ApplicationJSON;
    /**
     * No record found
     */
    dmcer404ApplicationJSONObject?: Dmcer404ApplicationJSON;
    /**
     * Internal server error
     */
    dmcer500ApplicationJSONObject?: Dmcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    dmcer502ApplicationJSONObject?: Dmcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    dmcer503ApplicationJSONObject?: Dmcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    dmcer504ApplicationJSONObject?: Dmcer504ApplicationJSON;
}
