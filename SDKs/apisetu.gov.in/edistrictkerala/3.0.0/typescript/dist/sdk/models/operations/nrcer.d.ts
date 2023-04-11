import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NrcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class NrcerRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum NrcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class NrcerRequestBody extends SpeakeasyBase {
    certificateParameters?: NrcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: NrcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Nrcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Nrcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Nrcer504ApplicationJSON extends SpeakeasyBase {
    error?: Nrcer504ApplicationJSONErrorEnum;
    errorDescription?: Nrcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nrcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Nrcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Nrcer503ApplicationJSON extends SpeakeasyBase {
    error?: Nrcer503ApplicationJSONErrorEnum;
    errorDescription?: Nrcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nrcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Nrcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Nrcer502ApplicationJSON extends SpeakeasyBase {
    error?: Nrcer502ApplicationJSONErrorEnum;
    errorDescription?: Nrcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nrcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Nrcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Nrcer500ApplicationJSON extends SpeakeasyBase {
    error?: Nrcer500ApplicationJSONErrorEnum;
    errorDescription?: Nrcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nrcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Nrcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Nrcer404ApplicationJSON extends SpeakeasyBase {
    error?: Nrcer404ApplicationJSONErrorEnum;
    errorDescription?: Nrcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nrcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Nrcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Nrcer401ApplicationJSON extends SpeakeasyBase {
    error?: Nrcer401ApplicationJSONErrorEnum;
    errorDescription?: Nrcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nrcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Nrcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Nrcer400ApplicationJSON extends SpeakeasyBase {
    error?: Nrcer400ApplicationJSONErrorEnum;
    errorDescription?: Nrcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class NrcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    nrcer400ApplicationJSONObject?: Nrcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    nrcer401ApplicationJSONObject?: Nrcer401ApplicationJSON;
    /**
     * No record found
     */
    nrcer404ApplicationJSONObject?: Nrcer404ApplicationJSON;
    /**
     * Internal server error
     */
    nrcer500ApplicationJSONObject?: Nrcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    nrcer502ApplicationJSONObject?: Nrcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    nrcer503ApplicationJSONObject?: Nrcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    nrcer504ApplicationJSONObject?: Nrcer504ApplicationJSON;
}
