import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RscerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class RscerRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum RscerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class RscerRequestBody extends SpeakeasyBase {
    certificateParameters?: RscerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: RscerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Rscer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Rscer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Rscer504ApplicationJSON extends SpeakeasyBase {
    error?: Rscer504ApplicationJSONErrorEnum;
    errorDescription?: Rscer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rscer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Rscer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Rscer503ApplicationJSON extends SpeakeasyBase {
    error?: Rscer503ApplicationJSONErrorEnum;
    errorDescription?: Rscer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rscer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Rscer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Rscer502ApplicationJSON extends SpeakeasyBase {
    error?: Rscer502ApplicationJSONErrorEnum;
    errorDescription?: Rscer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rscer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Rscer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Rscer500ApplicationJSON extends SpeakeasyBase {
    error?: Rscer500ApplicationJSONErrorEnum;
    errorDescription?: Rscer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rscer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Rscer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Rscer404ApplicationJSON extends SpeakeasyBase {
    error?: Rscer404ApplicationJSONErrorEnum;
    errorDescription?: Rscer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rscer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Rscer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Rscer401ApplicationJSON extends SpeakeasyBase {
    error?: Rscer401ApplicationJSONErrorEnum;
    errorDescription?: Rscer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rscer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Rscer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Rscer400ApplicationJSON extends SpeakeasyBase {
    error?: Rscer400ApplicationJSONErrorEnum;
    errorDescription?: Rscer400ApplicationJSONErrorDescriptionEnum;
}
export declare class RscerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    rscer400ApplicationJSONObject?: Rscer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    rscer401ApplicationJSONObject?: Rscer401ApplicationJSON;
    /**
     * No record found
     */
    rscer404ApplicationJSONObject?: Rscer404ApplicationJSON;
    /**
     * Internal server error
     */
    rscer500ApplicationJSONObject?: Rscer500ApplicationJSON;
    /**
     * Bad gateway
     */
    rscer502ApplicationJSONObject?: Rscer502ApplicationJSON;
    /**
     * Service unavailable
     */
    rscer503ApplicationJSONObject?: Rscer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    rscer504ApplicationJSONObject?: Rscer504ApplicationJSON;
}
