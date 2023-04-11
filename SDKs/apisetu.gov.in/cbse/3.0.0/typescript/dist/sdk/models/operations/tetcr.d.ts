import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TetcrSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class TetcrRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Roll No
     */
    rollno: string;
    /**
     * Year-Month
     */
    yearMonth: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum TetcrRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class TetcrRequestBody extends SpeakeasyBase {
    certificateParameters?: TetcrRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: TetcrRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Tetcr504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Tetcr504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Tetcr504ApplicationJSON extends SpeakeasyBase {
    error?: Tetcr504ApplicationJSONErrorEnum;
    errorDescription?: Tetcr504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tetcr503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Tetcr503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Tetcr503ApplicationJSON extends SpeakeasyBase {
    error?: Tetcr503ApplicationJSONErrorEnum;
    errorDescription?: Tetcr503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tetcr502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Tetcr502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Tetcr502ApplicationJSON extends SpeakeasyBase {
    error?: Tetcr502ApplicationJSONErrorEnum;
    errorDescription?: Tetcr502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tetcr500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Tetcr500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Tetcr500ApplicationJSON extends SpeakeasyBase {
    error?: Tetcr500ApplicationJSONErrorEnum;
    errorDescription?: Tetcr500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tetcr404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Tetcr404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Tetcr404ApplicationJSON extends SpeakeasyBase {
    error?: Tetcr404ApplicationJSONErrorEnum;
    errorDescription?: Tetcr404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tetcr401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Tetcr401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Tetcr401ApplicationJSON extends SpeakeasyBase {
    error?: Tetcr401ApplicationJSONErrorEnum;
    errorDescription?: Tetcr401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tetcr400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Tetcr400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Tetcr400ApplicationJSON extends SpeakeasyBase {
    error?: Tetcr400ApplicationJSONErrorEnum;
    errorDescription?: Tetcr400ApplicationJSONErrorDescriptionEnum;
}
export declare class TetcrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    tetcr400ApplicationJSONObject?: Tetcr400ApplicationJSON;
    /**
     * Unauthorized access
     */
    tetcr401ApplicationJSONObject?: Tetcr401ApplicationJSON;
    /**
     * No record found
     */
    tetcr404ApplicationJSONObject?: Tetcr404ApplicationJSON;
    /**
     * Internal server error
     */
    tetcr500ApplicationJSONObject?: Tetcr500ApplicationJSON;
    /**
     * Bad gateway
     */
    tetcr502ApplicationJSONObject?: Tetcr502ApplicationJSON;
    /**
     * Service unavailable
     */
    tetcr503ApplicationJSONObject?: Tetcr503ApplicationJSON;
    /**
     * Gateway timeout
     */
    tetcr504ApplicationJSONObject?: Tetcr504ApplicationJSON;
}
