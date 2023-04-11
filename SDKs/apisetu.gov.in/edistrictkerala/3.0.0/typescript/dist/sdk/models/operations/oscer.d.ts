import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OscerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class OscerRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum OscerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class OscerRequestBody extends SpeakeasyBase {
    certificateParameters?: OscerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: OscerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Oscer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Oscer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Oscer504ApplicationJSON extends SpeakeasyBase {
    error?: Oscer504ApplicationJSONErrorEnum;
    errorDescription?: Oscer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Oscer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Oscer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Oscer503ApplicationJSON extends SpeakeasyBase {
    error?: Oscer503ApplicationJSONErrorEnum;
    errorDescription?: Oscer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Oscer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Oscer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Oscer502ApplicationJSON extends SpeakeasyBase {
    error?: Oscer502ApplicationJSONErrorEnum;
    errorDescription?: Oscer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Oscer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Oscer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Oscer500ApplicationJSON extends SpeakeasyBase {
    error?: Oscer500ApplicationJSONErrorEnum;
    errorDescription?: Oscer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Oscer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Oscer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Oscer404ApplicationJSON extends SpeakeasyBase {
    error?: Oscer404ApplicationJSONErrorEnum;
    errorDescription?: Oscer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Oscer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Oscer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Oscer401ApplicationJSON extends SpeakeasyBase {
    error?: Oscer401ApplicationJSONErrorEnum;
    errorDescription?: Oscer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Oscer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Oscer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Oscer400ApplicationJSON extends SpeakeasyBase {
    error?: Oscer400ApplicationJSONErrorEnum;
    errorDescription?: Oscer400ApplicationJSONErrorDescriptionEnum;
}
export declare class OscerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    oscer400ApplicationJSONObject?: Oscer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    oscer401ApplicationJSONObject?: Oscer401ApplicationJSON;
    /**
     * No record found
     */
    oscer404ApplicationJSONObject?: Oscer404ApplicationJSON;
    /**
     * Internal server error
     */
    oscer500ApplicationJSONObject?: Oscer500ApplicationJSON;
    /**
     * Bad gateway
     */
    oscer502ApplicationJSONObject?: Oscer502ApplicationJSON;
    /**
     * Service unavailable
     */
    oscer503ApplicationJSONObject?: Oscer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    oscer504ApplicationJSONObject?: Oscer504ApplicationJSON;
}
