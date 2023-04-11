import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TwipcSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class TwipcRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Policy Number
     */
    udf1: string;
    /**
     * Customer Id
     */
    udf2: string;
    /**
     * Policy Start Date
     */
    udf3: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum TwipcRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class TwipcRequestBody extends SpeakeasyBase {
    certificateParameters?: TwipcRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: TwipcRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Twipc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Twipc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Twipc504ApplicationJSON extends SpeakeasyBase {
    error?: Twipc504ApplicationJSONErrorEnum;
    errorDescription?: Twipc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Twipc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Twipc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Twipc503ApplicationJSON extends SpeakeasyBase {
    error?: Twipc503ApplicationJSONErrorEnum;
    errorDescription?: Twipc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Twipc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Twipc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Twipc502ApplicationJSON extends SpeakeasyBase {
    error?: Twipc502ApplicationJSONErrorEnum;
    errorDescription?: Twipc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Twipc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Twipc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Twipc500ApplicationJSON extends SpeakeasyBase {
    error?: Twipc500ApplicationJSONErrorEnum;
    errorDescription?: Twipc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Twipc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Twipc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Twipc404ApplicationJSON extends SpeakeasyBase {
    error?: Twipc404ApplicationJSONErrorEnum;
    errorDescription?: Twipc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Twipc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Twipc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Twipc401ApplicationJSON extends SpeakeasyBase {
    error?: Twipc401ApplicationJSONErrorEnum;
    errorDescription?: Twipc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Twipc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Twipc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Twipc400ApplicationJSON extends SpeakeasyBase {
    error?: Twipc400ApplicationJSONErrorEnum;
    errorDescription?: Twipc400ApplicationJSONErrorDescriptionEnum;
}
export declare class TwipcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    twipc400ApplicationJSONObject?: Twipc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    twipc401ApplicationJSONObject?: Twipc401ApplicationJSON;
    /**
     * No record found
     */
    twipc404ApplicationJSONObject?: Twipc404ApplicationJSON;
    /**
     * Internal server error
     */
    twipc500ApplicationJSONObject?: Twipc500ApplicationJSON;
    /**
     * Bad gateway
     */
    twipc502ApplicationJSONObject?: Twipc502ApplicationJSON;
    /**
     * Service unavailable
     */
    twipc503ApplicationJSONObject?: Twipc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    twipc504ApplicationJSONObject?: Twipc504ApplicationJSON;
}
