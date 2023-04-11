import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IdcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class IdcerRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum IdcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class IdcerRequestBody extends SpeakeasyBase {
    certificateParameters?: IdcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: IdcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Idcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Idcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Idcer504ApplicationJSON extends SpeakeasyBase {
    error?: Idcer504ApplicationJSONErrorEnum;
    errorDescription?: Idcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Idcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Idcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Idcer503ApplicationJSON extends SpeakeasyBase {
    error?: Idcer503ApplicationJSONErrorEnum;
    errorDescription?: Idcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Idcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Idcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Idcer502ApplicationJSON extends SpeakeasyBase {
    error?: Idcer502ApplicationJSONErrorEnum;
    errorDescription?: Idcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Idcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Idcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Idcer500ApplicationJSON extends SpeakeasyBase {
    error?: Idcer500ApplicationJSONErrorEnum;
    errorDescription?: Idcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Idcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Idcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Idcer404ApplicationJSON extends SpeakeasyBase {
    error?: Idcer404ApplicationJSONErrorEnum;
    errorDescription?: Idcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Idcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Idcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Idcer401ApplicationJSON extends SpeakeasyBase {
    error?: Idcer401ApplicationJSONErrorEnum;
    errorDescription?: Idcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Idcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Idcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Idcer400ApplicationJSON extends SpeakeasyBase {
    error?: Idcer400ApplicationJSONErrorEnum;
    errorDescription?: Idcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class IdcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    idcer400ApplicationJSONObject?: Idcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    idcer401ApplicationJSONObject?: Idcer401ApplicationJSON;
    /**
     * No record found
     */
    idcer404ApplicationJSONObject?: Idcer404ApplicationJSON;
    /**
     * Internal server error
     */
    idcer500ApplicationJSONObject?: Idcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    idcer502ApplicationJSONObject?: Idcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    idcer503ApplicationJSONObject?: Idcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    idcer504ApplicationJSONObject?: Idcer504ApplicationJSON;
}
