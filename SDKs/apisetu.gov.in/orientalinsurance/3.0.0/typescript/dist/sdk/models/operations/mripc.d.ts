import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MripcSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class MripcRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum MripcRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class MripcRequestBody extends SpeakeasyBase {
    certificateParameters?: MripcRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: MripcRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Mripc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Mripc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Mripc504ApplicationJSON extends SpeakeasyBase {
    error?: Mripc504ApplicationJSONErrorEnum;
    errorDescription?: Mripc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mripc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Mripc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Mripc503ApplicationJSON extends SpeakeasyBase {
    error?: Mripc503ApplicationJSONErrorEnum;
    errorDescription?: Mripc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mripc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Mripc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Mripc502ApplicationJSON extends SpeakeasyBase {
    error?: Mripc502ApplicationJSONErrorEnum;
    errorDescription?: Mripc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mripc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Mripc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Mripc500ApplicationJSON extends SpeakeasyBase {
    error?: Mripc500ApplicationJSONErrorEnum;
    errorDescription?: Mripc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mripc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Mripc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Mripc404ApplicationJSON extends SpeakeasyBase {
    error?: Mripc404ApplicationJSONErrorEnum;
    errorDescription?: Mripc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mripc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Mripc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Mripc401ApplicationJSON extends SpeakeasyBase {
    error?: Mripc401ApplicationJSONErrorEnum;
    errorDescription?: Mripc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mripc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Mripc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Mripc400ApplicationJSON extends SpeakeasyBase {
    error?: Mripc400ApplicationJSONErrorEnum;
    errorDescription?: Mripc400ApplicationJSONErrorDescriptionEnum;
}
export declare class MripcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    mripc400ApplicationJSONObject?: Mripc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    mripc401ApplicationJSONObject?: Mripc401ApplicationJSON;
    /**
     * No record found
     */
    mripc404ApplicationJSONObject?: Mripc404ApplicationJSON;
    /**
     * Internal server error
     */
    mripc500ApplicationJSONObject?: Mripc500ApplicationJSON;
    /**
     * Bad gateway
     */
    mripc502ApplicationJSONObject?: Mripc502ApplicationJSON;
    /**
     * Service unavailable
     */
    mripc503ApplicationJSONObject?: Mripc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    mripc504ApplicationJSONObject?: Mripc504ApplicationJSON;
}
