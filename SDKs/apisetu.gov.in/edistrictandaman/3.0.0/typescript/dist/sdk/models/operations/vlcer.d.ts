import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VlcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class VlcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Certificate Number
     */
    certificateNumber: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum VlcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class VlcerRequestBody extends SpeakeasyBase {
    certificateParameters?: VlcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: VlcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Vlcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Vlcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Vlcer504ApplicationJSON extends SpeakeasyBase {
    error?: Vlcer504ApplicationJSONErrorEnum;
    errorDescription?: Vlcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vlcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Vlcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Vlcer503ApplicationJSON extends SpeakeasyBase {
    error?: Vlcer503ApplicationJSONErrorEnum;
    errorDescription?: Vlcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vlcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Vlcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Vlcer502ApplicationJSON extends SpeakeasyBase {
    error?: Vlcer502ApplicationJSONErrorEnum;
    errorDescription?: Vlcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vlcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Vlcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Vlcer500ApplicationJSON extends SpeakeasyBase {
    error?: Vlcer500ApplicationJSONErrorEnum;
    errorDescription?: Vlcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vlcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Vlcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Vlcer404ApplicationJSON extends SpeakeasyBase {
    error?: Vlcer404ApplicationJSONErrorEnum;
    errorDescription?: Vlcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vlcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Vlcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Vlcer401ApplicationJSON extends SpeakeasyBase {
    error?: Vlcer401ApplicationJSONErrorEnum;
    errorDescription?: Vlcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vlcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Vlcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Vlcer400ApplicationJSON extends SpeakeasyBase {
    error?: Vlcer400ApplicationJSONErrorEnum;
    errorDescription?: Vlcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class VlcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    vlcer400ApplicationJSONObject?: Vlcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    vlcer401ApplicationJSONObject?: Vlcer401ApplicationJSON;
    /**
     * No record found
     */
    vlcer404ApplicationJSONObject?: Vlcer404ApplicationJSON;
    /**
     * Internal server error
     */
    vlcer500ApplicationJSONObject?: Vlcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    vlcer502ApplicationJSONObject?: Vlcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    vlcer503ApplicationJSONObject?: Vlcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    vlcer504ApplicationJSONObject?: Vlcer504ApplicationJSON;
}
