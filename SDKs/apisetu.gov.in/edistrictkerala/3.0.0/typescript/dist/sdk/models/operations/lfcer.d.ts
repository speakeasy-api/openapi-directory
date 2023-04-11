import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LfcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class LfcerRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum LfcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class LfcerRequestBody extends SpeakeasyBase {
    certificateParameters?: LfcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: LfcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Lfcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Lfcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Lfcer504ApplicationJSON extends SpeakeasyBase {
    error?: Lfcer504ApplicationJSONErrorEnum;
    errorDescription?: Lfcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lfcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Lfcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Lfcer503ApplicationJSON extends SpeakeasyBase {
    error?: Lfcer503ApplicationJSONErrorEnum;
    errorDescription?: Lfcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lfcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Lfcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Lfcer502ApplicationJSON extends SpeakeasyBase {
    error?: Lfcer502ApplicationJSONErrorEnum;
    errorDescription?: Lfcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lfcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Lfcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Lfcer500ApplicationJSON extends SpeakeasyBase {
    error?: Lfcer500ApplicationJSONErrorEnum;
    errorDescription?: Lfcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lfcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Lfcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Lfcer404ApplicationJSON extends SpeakeasyBase {
    error?: Lfcer404ApplicationJSONErrorEnum;
    errorDescription?: Lfcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lfcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Lfcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Lfcer401ApplicationJSON extends SpeakeasyBase {
    error?: Lfcer401ApplicationJSONErrorEnum;
    errorDescription?: Lfcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lfcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Lfcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Lfcer400ApplicationJSON extends SpeakeasyBase {
    error?: Lfcer400ApplicationJSONErrorEnum;
    errorDescription?: Lfcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class LfcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    lfcer400ApplicationJSONObject?: Lfcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    lfcer401ApplicationJSONObject?: Lfcer401ApplicationJSON;
    /**
     * No record found
     */
    lfcer404ApplicationJSONObject?: Lfcer404ApplicationJSON;
    /**
     * Internal server error
     */
    lfcer500ApplicationJSONObject?: Lfcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    lfcer502ApplicationJSONObject?: Lfcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    lfcer503ApplicationJSONObject?: Lfcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    lfcer504ApplicationJSONObject?: Lfcer504ApplicationJSON;
}
