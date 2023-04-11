import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FmcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class FmcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Certificate Number
     */
    certificateNumber: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum FmcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class FmcerRequestBody extends SpeakeasyBase {
    certificateParameters?: FmcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: FmcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Fmcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Fmcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Fmcer504ApplicationJSON extends SpeakeasyBase {
    error?: Fmcer504ApplicationJSONErrorEnum;
    errorDescription?: Fmcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Fmcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Fmcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Fmcer503ApplicationJSON extends SpeakeasyBase {
    error?: Fmcer503ApplicationJSONErrorEnum;
    errorDescription?: Fmcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Fmcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Fmcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Fmcer502ApplicationJSON extends SpeakeasyBase {
    error?: Fmcer502ApplicationJSONErrorEnum;
    errorDescription?: Fmcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Fmcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Fmcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Fmcer500ApplicationJSON extends SpeakeasyBase {
    error?: Fmcer500ApplicationJSONErrorEnum;
    errorDescription?: Fmcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Fmcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Fmcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Fmcer404ApplicationJSON extends SpeakeasyBase {
    error?: Fmcer404ApplicationJSONErrorEnum;
    errorDescription?: Fmcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Fmcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Fmcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Fmcer401ApplicationJSON extends SpeakeasyBase {
    error?: Fmcer401ApplicationJSONErrorEnum;
    errorDescription?: Fmcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Fmcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Fmcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Fmcer400ApplicationJSON extends SpeakeasyBase {
    error?: Fmcer400ApplicationJSONErrorEnum;
    errorDescription?: Fmcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class FmcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    fmcer400ApplicationJSONObject?: Fmcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    fmcer401ApplicationJSONObject?: Fmcer401ApplicationJSON;
    /**
     * No record found
     */
    fmcer404ApplicationJSONObject?: Fmcer404ApplicationJSON;
    /**
     * Internal server error
     */
    fmcer500ApplicationJSONObject?: Fmcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    fmcer502ApplicationJSONObject?: Fmcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    fmcer503ApplicationJSONObject?: Fmcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    fmcer504ApplicationJSONObject?: Fmcer504ApplicationJSON;
}
