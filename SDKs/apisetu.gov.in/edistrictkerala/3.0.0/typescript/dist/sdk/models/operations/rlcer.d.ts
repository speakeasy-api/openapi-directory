import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RlcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class RlcerRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum RlcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class RlcerRequestBody extends SpeakeasyBase {
    certificateParameters?: RlcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: RlcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Rlcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Rlcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Rlcer504ApplicationJSON extends SpeakeasyBase {
    error?: Rlcer504ApplicationJSONErrorEnum;
    errorDescription?: Rlcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rlcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Rlcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Rlcer503ApplicationJSON extends SpeakeasyBase {
    error?: Rlcer503ApplicationJSONErrorEnum;
    errorDescription?: Rlcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rlcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Rlcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Rlcer502ApplicationJSON extends SpeakeasyBase {
    error?: Rlcer502ApplicationJSONErrorEnum;
    errorDescription?: Rlcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rlcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Rlcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Rlcer500ApplicationJSON extends SpeakeasyBase {
    error?: Rlcer500ApplicationJSONErrorEnum;
    errorDescription?: Rlcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rlcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Rlcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Rlcer404ApplicationJSON extends SpeakeasyBase {
    error?: Rlcer404ApplicationJSONErrorEnum;
    errorDescription?: Rlcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rlcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Rlcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Rlcer401ApplicationJSON extends SpeakeasyBase {
    error?: Rlcer401ApplicationJSONErrorEnum;
    errorDescription?: Rlcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rlcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Rlcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Rlcer400ApplicationJSON extends SpeakeasyBase {
    error?: Rlcer400ApplicationJSONErrorEnum;
    errorDescription?: Rlcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class RlcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    rlcer400ApplicationJSONObject?: Rlcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    rlcer401ApplicationJSONObject?: Rlcer401ApplicationJSON;
    /**
     * No record found
     */
    rlcer404ApplicationJSONObject?: Rlcer404ApplicationJSON;
    /**
     * Internal server error
     */
    rlcer500ApplicationJSONObject?: Rlcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    rlcer502ApplicationJSONObject?: Rlcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    rlcer503ApplicationJSONObject?: Rlcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    rlcer504ApplicationJSONObject?: Rlcer504ApplicationJSON;
}
