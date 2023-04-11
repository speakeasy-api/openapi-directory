import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LocerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class LocerRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum LocerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class LocerRequestBody extends SpeakeasyBase {
    certificateParameters?: LocerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: LocerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Locer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Locer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Locer504ApplicationJSON extends SpeakeasyBase {
    error?: Locer504ApplicationJSONErrorEnum;
    errorDescription?: Locer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Locer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Locer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Locer503ApplicationJSON extends SpeakeasyBase {
    error?: Locer503ApplicationJSONErrorEnum;
    errorDescription?: Locer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Locer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Locer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Locer502ApplicationJSON extends SpeakeasyBase {
    error?: Locer502ApplicationJSONErrorEnum;
    errorDescription?: Locer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Locer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Locer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Locer500ApplicationJSON extends SpeakeasyBase {
    error?: Locer500ApplicationJSONErrorEnum;
    errorDescription?: Locer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Locer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Locer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Locer404ApplicationJSON extends SpeakeasyBase {
    error?: Locer404ApplicationJSONErrorEnum;
    errorDescription?: Locer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Locer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Locer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Locer401ApplicationJSON extends SpeakeasyBase {
    error?: Locer401ApplicationJSONErrorEnum;
    errorDescription?: Locer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Locer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Locer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Locer400ApplicationJSON extends SpeakeasyBase {
    error?: Locer400ApplicationJSONErrorEnum;
    errorDescription?: Locer400ApplicationJSONErrorDescriptionEnum;
}
export declare class LocerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    locer400ApplicationJSONObject?: Locer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    locer401ApplicationJSONObject?: Locer401ApplicationJSON;
    /**
     * No record found
     */
    locer404ApplicationJSONObject?: Locer404ApplicationJSON;
    /**
     * Internal server error
     */
    locer500ApplicationJSONObject?: Locer500ApplicationJSON;
    /**
     * Bad gateway
     */
    locer502ApplicationJSONObject?: Locer502ApplicationJSON;
    /**
     * Service unavailable
     */
    locer503ApplicationJSONObject?: Locer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    locer504ApplicationJSONObject?: Locer504ApplicationJSON;
}
