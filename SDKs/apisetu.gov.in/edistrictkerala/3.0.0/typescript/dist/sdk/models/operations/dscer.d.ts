import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DscerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class DscerRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum DscerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class DscerRequestBody extends SpeakeasyBase {
    certificateParameters?: DscerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: DscerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Dscer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Dscer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Dscer504ApplicationJSON extends SpeakeasyBase {
    error?: Dscer504ApplicationJSONErrorEnum;
    errorDescription?: Dscer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dscer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Dscer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Dscer503ApplicationJSON extends SpeakeasyBase {
    error?: Dscer503ApplicationJSONErrorEnum;
    errorDescription?: Dscer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dscer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Dscer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Dscer502ApplicationJSON extends SpeakeasyBase {
    error?: Dscer502ApplicationJSONErrorEnum;
    errorDescription?: Dscer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dscer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Dscer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Dscer500ApplicationJSON extends SpeakeasyBase {
    error?: Dscer500ApplicationJSONErrorEnum;
    errorDescription?: Dscer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dscer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Dscer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Dscer404ApplicationJSON extends SpeakeasyBase {
    error?: Dscer404ApplicationJSONErrorEnum;
    errorDescription?: Dscer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dscer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Dscer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Dscer401ApplicationJSON extends SpeakeasyBase {
    error?: Dscer401ApplicationJSONErrorEnum;
    errorDescription?: Dscer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dscer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Dscer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Dscer400ApplicationJSON extends SpeakeasyBase {
    error?: Dscer400ApplicationJSONErrorEnum;
    errorDescription?: Dscer400ApplicationJSONErrorDescriptionEnum;
}
export declare class DscerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    dscer400ApplicationJSONObject?: Dscer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    dscer401ApplicationJSONObject?: Dscer401ApplicationJSON;
    /**
     * No record found
     */
    dscer404ApplicationJSONObject?: Dscer404ApplicationJSON;
    /**
     * Internal server error
     */
    dscer500ApplicationJSONObject?: Dscer500ApplicationJSON;
    /**
     * Bad gateway
     */
    dscer502ApplicationJSONObject?: Dscer502ApplicationJSON;
    /**
     * Service unavailable
     */
    dscer503ApplicationJSONObject?: Dscer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    dscer504ApplicationJSONObject?: Dscer504ApplicationJSON;
}
