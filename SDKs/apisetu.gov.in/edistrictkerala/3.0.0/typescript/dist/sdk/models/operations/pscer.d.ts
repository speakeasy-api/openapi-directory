import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PscerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class PscerRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum PscerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class PscerRequestBody extends SpeakeasyBase {
    certificateParameters?: PscerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: PscerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Pscer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Pscer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Pscer504ApplicationJSON extends SpeakeasyBase {
    error?: Pscer504ApplicationJSONErrorEnum;
    errorDescription?: Pscer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pscer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Pscer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Pscer503ApplicationJSON extends SpeakeasyBase {
    error?: Pscer503ApplicationJSONErrorEnum;
    errorDescription?: Pscer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pscer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Pscer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Pscer502ApplicationJSON extends SpeakeasyBase {
    error?: Pscer502ApplicationJSONErrorEnum;
    errorDescription?: Pscer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pscer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Pscer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Pscer500ApplicationJSON extends SpeakeasyBase {
    error?: Pscer500ApplicationJSONErrorEnum;
    errorDescription?: Pscer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pscer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Pscer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Pscer404ApplicationJSON extends SpeakeasyBase {
    error?: Pscer404ApplicationJSONErrorEnum;
    errorDescription?: Pscer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pscer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Pscer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Pscer401ApplicationJSON extends SpeakeasyBase {
    error?: Pscer401ApplicationJSONErrorEnum;
    errorDescription?: Pscer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pscer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Pscer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Pscer400ApplicationJSON extends SpeakeasyBase {
    error?: Pscer400ApplicationJSONErrorEnum;
    errorDescription?: Pscer400ApplicationJSONErrorDescriptionEnum;
}
export declare class PscerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    pscer400ApplicationJSONObject?: Pscer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    pscer401ApplicationJSONObject?: Pscer401ApplicationJSON;
    /**
     * No record found
     */
    pscer404ApplicationJSONObject?: Pscer404ApplicationJSON;
    /**
     * Internal server error
     */
    pscer500ApplicationJSONObject?: Pscer500ApplicationJSON;
    /**
     * Bad gateway
     */
    pscer502ApplicationJSONObject?: Pscer502ApplicationJSON;
    /**
     * Service unavailable
     */
    pscer503ApplicationJSONObject?: Pscer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    pscer504ApplicationJSONObject?: Pscer504ApplicationJSON;
}
