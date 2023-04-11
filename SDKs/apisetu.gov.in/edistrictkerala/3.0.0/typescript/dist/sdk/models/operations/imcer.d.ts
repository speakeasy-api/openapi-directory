import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ImcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class ImcerRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum ImcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class ImcerRequestBody extends SpeakeasyBase {
    certificateParameters?: ImcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: ImcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Imcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Imcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Imcer504ApplicationJSON extends SpeakeasyBase {
    error?: Imcer504ApplicationJSONErrorEnum;
    errorDescription?: Imcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Imcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Imcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Imcer503ApplicationJSON extends SpeakeasyBase {
    error?: Imcer503ApplicationJSONErrorEnum;
    errorDescription?: Imcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Imcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Imcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Imcer502ApplicationJSON extends SpeakeasyBase {
    error?: Imcer502ApplicationJSONErrorEnum;
    errorDescription?: Imcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Imcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Imcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Imcer500ApplicationJSON extends SpeakeasyBase {
    error?: Imcer500ApplicationJSONErrorEnum;
    errorDescription?: Imcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Imcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Imcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Imcer404ApplicationJSON extends SpeakeasyBase {
    error?: Imcer404ApplicationJSONErrorEnum;
    errorDescription?: Imcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Imcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Imcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Imcer401ApplicationJSON extends SpeakeasyBase {
    error?: Imcer401ApplicationJSONErrorEnum;
    errorDescription?: Imcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Imcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Imcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Imcer400ApplicationJSON extends SpeakeasyBase {
    error?: Imcer400ApplicationJSONErrorEnum;
    errorDescription?: Imcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class ImcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    imcer400ApplicationJSONObject?: Imcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    imcer401ApplicationJSONObject?: Imcer401ApplicationJSON;
    /**
     * No record found
     */
    imcer404ApplicationJSONObject?: Imcer404ApplicationJSON;
    /**
     * Internal server error
     */
    imcer500ApplicationJSONObject?: Imcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    imcer502ApplicationJSONObject?: Imcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    imcer503ApplicationJSONObject?: Imcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    imcer504ApplicationJSONObject?: Imcer504ApplicationJSON;
}
