import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PncerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class PncerRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum PncerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class PncerRequestBody extends SpeakeasyBase {
    certificateParameters?: PncerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: PncerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Pncer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Pncer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Pncer504ApplicationJSON extends SpeakeasyBase {
    error?: Pncer504ApplicationJSONErrorEnum;
    errorDescription?: Pncer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pncer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Pncer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Pncer503ApplicationJSON extends SpeakeasyBase {
    error?: Pncer503ApplicationJSONErrorEnum;
    errorDescription?: Pncer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pncer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Pncer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Pncer502ApplicationJSON extends SpeakeasyBase {
    error?: Pncer502ApplicationJSONErrorEnum;
    errorDescription?: Pncer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pncer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Pncer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Pncer500ApplicationJSON extends SpeakeasyBase {
    error?: Pncer500ApplicationJSONErrorEnum;
    errorDescription?: Pncer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pncer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Pncer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Pncer404ApplicationJSON extends SpeakeasyBase {
    error?: Pncer404ApplicationJSONErrorEnum;
    errorDescription?: Pncer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pncer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Pncer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Pncer401ApplicationJSON extends SpeakeasyBase {
    error?: Pncer401ApplicationJSONErrorEnum;
    errorDescription?: Pncer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pncer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Pncer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Pncer400ApplicationJSON extends SpeakeasyBase {
    error?: Pncer400ApplicationJSONErrorEnum;
    errorDescription?: Pncer400ApplicationJSONErrorDescriptionEnum;
}
export declare class PncerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    pncer400ApplicationJSONObject?: Pncer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    pncer401ApplicationJSONObject?: Pncer401ApplicationJSON;
    /**
     * No record found
     */
    pncer404ApplicationJSONObject?: Pncer404ApplicationJSON;
    /**
     * Internal server error
     */
    pncer500ApplicationJSONObject?: Pncer500ApplicationJSON;
    /**
     * Bad gateway
     */
    pncer502ApplicationJSONObject?: Pncer502ApplicationJSON;
    /**
     * Service unavailable
     */
    pncer503ApplicationJSONObject?: Pncer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    pncer504ApplicationJSONObject?: Pncer504ApplicationJSON;
}
