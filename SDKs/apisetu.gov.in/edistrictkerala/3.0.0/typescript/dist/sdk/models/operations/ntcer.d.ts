import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NtcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class NtcerRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum NtcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class NtcerRequestBody extends SpeakeasyBase {
    certificateParameters?: NtcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: NtcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Ntcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ntcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Ntcer504ApplicationJSON extends SpeakeasyBase {
    error?: Ntcer504ApplicationJSONErrorEnum;
    errorDescription?: Ntcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ntcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ntcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Ntcer503ApplicationJSON extends SpeakeasyBase {
    error?: Ntcer503ApplicationJSONErrorEnum;
    errorDescription?: Ntcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ntcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ntcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Ntcer502ApplicationJSON extends SpeakeasyBase {
    error?: Ntcer502ApplicationJSONErrorEnum;
    errorDescription?: Ntcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ntcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ntcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Ntcer500ApplicationJSON extends SpeakeasyBase {
    error?: Ntcer500ApplicationJSONErrorEnum;
    errorDescription?: Ntcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ntcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ntcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Ntcer404ApplicationJSON extends SpeakeasyBase {
    error?: Ntcer404ApplicationJSONErrorEnum;
    errorDescription?: Ntcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ntcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ntcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Ntcer401ApplicationJSON extends SpeakeasyBase {
    error?: Ntcer401ApplicationJSONErrorEnum;
    errorDescription?: Ntcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ntcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ntcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Ntcer400ApplicationJSON extends SpeakeasyBase {
    error?: Ntcer400ApplicationJSONErrorEnum;
    errorDescription?: Ntcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class NtcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    ntcer400ApplicationJSONObject?: Ntcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    ntcer401ApplicationJSONObject?: Ntcer401ApplicationJSON;
    /**
     * No record found
     */
    ntcer404ApplicationJSONObject?: Ntcer404ApplicationJSON;
    /**
     * Internal server error
     */
    ntcer500ApplicationJSONObject?: Ntcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    ntcer502ApplicationJSONObject?: Ntcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    ntcer503ApplicationJSONObject?: Ntcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    ntcer504ApplicationJSONObject?: Ntcer504ApplicationJSON;
}
