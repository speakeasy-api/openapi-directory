import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MiipcSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class MiipcRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum MiipcRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class MiipcRequestBody extends SpeakeasyBase {
    certificateParameters?: MiipcRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: MiipcRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Miipc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Miipc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Miipc504ApplicationJSON extends SpeakeasyBase {
    error?: Miipc504ApplicationJSONErrorEnum;
    errorDescription?: Miipc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Miipc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Miipc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Miipc503ApplicationJSON extends SpeakeasyBase {
    error?: Miipc503ApplicationJSONErrorEnum;
    errorDescription?: Miipc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Miipc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Miipc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Miipc502ApplicationJSON extends SpeakeasyBase {
    error?: Miipc502ApplicationJSONErrorEnum;
    errorDescription?: Miipc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Miipc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Miipc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Miipc500ApplicationJSON extends SpeakeasyBase {
    error?: Miipc500ApplicationJSONErrorEnum;
    errorDescription?: Miipc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Miipc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Miipc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Miipc404ApplicationJSON extends SpeakeasyBase {
    error?: Miipc404ApplicationJSONErrorEnum;
    errorDescription?: Miipc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Miipc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Miipc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Miipc401ApplicationJSON extends SpeakeasyBase {
    error?: Miipc401ApplicationJSONErrorEnum;
    errorDescription?: Miipc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Miipc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Miipc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Miipc400ApplicationJSON extends SpeakeasyBase {
    error?: Miipc400ApplicationJSONErrorEnum;
    errorDescription?: Miipc400ApplicationJSONErrorDescriptionEnum;
}
export declare class MiipcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    miipc400ApplicationJSONObject?: Miipc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    miipc401ApplicationJSONObject?: Miipc401ApplicationJSON;
    /**
     * No record found
     */
    miipc404ApplicationJSONObject?: Miipc404ApplicationJSON;
    /**
     * Internal server error
     */
    miipc500ApplicationJSONObject?: Miipc500ApplicationJSON;
    /**
     * Bad gateway
     */
    miipc502ApplicationJSONObject?: Miipc502ApplicationJSON;
    /**
     * Service unavailable
     */
    miipc503ApplicationJSONObject?: Miipc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    miipc504ApplicationJSONObject?: Miipc504ApplicationJSON;
}
