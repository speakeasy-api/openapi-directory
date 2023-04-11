import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GrredSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class GrredRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Reference No.
     */
    refNo: string;
    /**
     * Token No.
     */
    tokenNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum GrredRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class GrredRequestBody extends SpeakeasyBase {
    certificateParameters?: GrredRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: GrredRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Grred504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Grred504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Grred504ApplicationJSON extends SpeakeasyBase {
    error?: Grred504ApplicationJSONErrorEnum;
    errorDescription?: Grred504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Grred503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Grred503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Grred503ApplicationJSON extends SpeakeasyBase {
    error?: Grred503ApplicationJSONErrorEnum;
    errorDescription?: Grred503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Grred502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Grred502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Grred502ApplicationJSON extends SpeakeasyBase {
    error?: Grred502ApplicationJSONErrorEnum;
    errorDescription?: Grred502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Grred500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Grred500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Grred500ApplicationJSON extends SpeakeasyBase {
    error?: Grred500ApplicationJSONErrorEnum;
    errorDescription?: Grred500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Grred404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Grred404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Grred404ApplicationJSON extends SpeakeasyBase {
    error?: Grred404ApplicationJSONErrorEnum;
    errorDescription?: Grred404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Grred401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Grred401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Grred401ApplicationJSON extends SpeakeasyBase {
    error?: Grred401ApplicationJSONErrorEnum;
    errorDescription?: Grred401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Grred400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Grred400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Grred400ApplicationJSON extends SpeakeasyBase {
    error?: Grred400ApplicationJSONErrorEnum;
    errorDescription?: Grred400ApplicationJSONErrorDescriptionEnum;
}
export declare class GrredResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    grred400ApplicationJSONObject?: Grred400ApplicationJSON;
    /**
     * Unauthorized access
     */
    grred401ApplicationJSONObject?: Grred401ApplicationJSON;
    /**
     * No record found
     */
    grred404ApplicationJSONObject?: Grred404ApplicationJSON;
    /**
     * Internal server error
     */
    grred500ApplicationJSONObject?: Grred500ApplicationJSON;
    /**
     * Bad gateway
     */
    grred502ApplicationJSONObject?: Grred502ApplicationJSON;
    /**
     * Service unavailable
     */
    grred503ApplicationJSONObject?: Grred503ApplicationJSON;
    /**
     * Gateway timeout
     */
    grred504ApplicationJSONObject?: Grred504ApplicationJSON;
}
