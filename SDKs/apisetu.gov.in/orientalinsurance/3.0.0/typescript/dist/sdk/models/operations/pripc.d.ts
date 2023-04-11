import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PripcSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class PripcRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * INSCODE
     */
    inscode: string;
    /**
     * POLNO
     */
    polno: string;
    /**
     * STARTDT
     */
    startdt: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum PripcRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class PripcRequestBody extends SpeakeasyBase {
    certificateParameters?: PripcRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: PripcRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Pripc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Pripc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Pripc504ApplicationJSON extends SpeakeasyBase {
    error?: Pripc504ApplicationJSONErrorEnum;
    errorDescription?: Pripc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pripc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Pripc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Pripc503ApplicationJSON extends SpeakeasyBase {
    error?: Pripc503ApplicationJSONErrorEnum;
    errorDescription?: Pripc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pripc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Pripc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Pripc502ApplicationJSON extends SpeakeasyBase {
    error?: Pripc502ApplicationJSONErrorEnum;
    errorDescription?: Pripc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pripc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Pripc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Pripc500ApplicationJSON extends SpeakeasyBase {
    error?: Pripc500ApplicationJSONErrorEnum;
    errorDescription?: Pripc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pripc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Pripc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Pripc404ApplicationJSON extends SpeakeasyBase {
    error?: Pripc404ApplicationJSONErrorEnum;
    errorDescription?: Pripc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pripc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Pripc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Pripc401ApplicationJSON extends SpeakeasyBase {
    error?: Pripc401ApplicationJSONErrorEnum;
    errorDescription?: Pripc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pripc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Pripc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Pripc400ApplicationJSON extends SpeakeasyBase {
    error?: Pripc400ApplicationJSONErrorEnum;
    errorDescription?: Pripc400ApplicationJSONErrorDescriptionEnum;
}
export declare class PripcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    pripc400ApplicationJSONObject?: Pripc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    pripc401ApplicationJSONObject?: Pripc401ApplicationJSON;
    /**
     * No record found
     */
    pripc404ApplicationJSONObject?: Pripc404ApplicationJSON;
    /**
     * Internal server error
     */
    pripc500ApplicationJSONObject?: Pripc500ApplicationJSON;
    /**
     * Bad gateway
     */
    pripc502ApplicationJSONObject?: Pripc502ApplicationJSON;
    /**
     * Service unavailable
     */
    pripc503ApplicationJSONObject?: Pripc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    pripc504ApplicationJSONObject?: Pripc504ApplicationJSON;
}
