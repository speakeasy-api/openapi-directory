import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LccepSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class LccepRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Certificate Number
     */
    certificateNumber: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum LccepRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class LccepRequestBody extends SpeakeasyBase {
    certificateParameters?: LccepRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: LccepRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Lccep504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Lccep504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Lccep504ApplicationJSON extends SpeakeasyBase {
    error?: Lccep504ApplicationJSONErrorEnum;
    errorDescription?: Lccep504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lccep503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Lccep503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Lccep503ApplicationJSON extends SpeakeasyBase {
    error?: Lccep503ApplicationJSONErrorEnum;
    errorDescription?: Lccep503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lccep502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Lccep502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Lccep502ApplicationJSON extends SpeakeasyBase {
    error?: Lccep502ApplicationJSONErrorEnum;
    errorDescription?: Lccep502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lccep500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Lccep500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Lccep500ApplicationJSON extends SpeakeasyBase {
    error?: Lccep500ApplicationJSONErrorEnum;
    errorDescription?: Lccep500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lccep404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Lccep404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Lccep404ApplicationJSON extends SpeakeasyBase {
    error?: Lccep404ApplicationJSONErrorEnum;
    errorDescription?: Lccep404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lccep401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Lccep401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Lccep401ApplicationJSON extends SpeakeasyBase {
    error?: Lccep401ApplicationJSONErrorEnum;
    errorDescription?: Lccep401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lccep400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Lccep400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Lccep400ApplicationJSON extends SpeakeasyBase {
    error?: Lccep400ApplicationJSONErrorEnum;
    errorDescription?: Lccep400ApplicationJSONErrorDescriptionEnum;
}
export declare class LccepResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    lccep400ApplicationJSONObject?: Lccep400ApplicationJSON;
    /**
     * Unauthorized access
     */
    lccep401ApplicationJSONObject?: Lccep401ApplicationJSON;
    /**
     * No record found
     */
    lccep404ApplicationJSONObject?: Lccep404ApplicationJSON;
    /**
     * Internal server error
     */
    lccep500ApplicationJSONObject?: Lccep500ApplicationJSON;
    /**
     * Bad gateway
     */
    lccep502ApplicationJSONObject?: Lccep502ApplicationJSON;
    /**
     * Service unavailable
     */
    lccep503ApplicationJSONObject?: Lccep503ApplicationJSON;
    /**
     * Gateway timeout
     */
    lccep504ApplicationJSONObject?: Lccep504ApplicationJSON;
}
