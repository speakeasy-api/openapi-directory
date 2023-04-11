import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TetmsSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class TetmsRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum TetmsRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class TetmsRequestBody extends SpeakeasyBase {
    certificateParameters?: TetmsRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: TetmsRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Tetms504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Tetms504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Tetms504ApplicationJSON extends SpeakeasyBase {
    error?: Tetms504ApplicationJSONErrorEnum;
    errorDescription?: Tetms504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tetms503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Tetms503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Tetms503ApplicationJSON extends SpeakeasyBase {
    error?: Tetms503ApplicationJSONErrorEnum;
    errorDescription?: Tetms503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tetms502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Tetms502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Tetms502ApplicationJSON extends SpeakeasyBase {
    error?: Tetms502ApplicationJSONErrorEnum;
    errorDescription?: Tetms502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tetms500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Tetms500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Tetms500ApplicationJSON extends SpeakeasyBase {
    error?: Tetms500ApplicationJSONErrorEnum;
    errorDescription?: Tetms500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tetms404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Tetms404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Tetms404ApplicationJSON extends SpeakeasyBase {
    error?: Tetms404ApplicationJSONErrorEnum;
    errorDescription?: Tetms404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tetms401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Tetms401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Tetms401ApplicationJSON extends SpeakeasyBase {
    error?: Tetms401ApplicationJSONErrorEnum;
    errorDescription?: Tetms401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tetms400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Tetms400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Tetms400ApplicationJSON extends SpeakeasyBase {
    error?: Tetms400ApplicationJSONErrorEnum;
    errorDescription?: Tetms400ApplicationJSONErrorDescriptionEnum;
}
export declare class TetmsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    tetms400ApplicationJSONObject?: Tetms400ApplicationJSON;
    /**
     * Unauthorized access
     */
    tetms401ApplicationJSONObject?: Tetms401ApplicationJSON;
    /**
     * No record found
     */
    tetms404ApplicationJSONObject?: Tetms404ApplicationJSON;
    /**
     * Internal server error
     */
    tetms500ApplicationJSONObject?: Tetms500ApplicationJSON;
    /**
     * Bad gateway
     */
    tetms502ApplicationJSONObject?: Tetms502ApplicationJSON;
    /**
     * Service unavailable
     */
    tetms503ApplicationJSONObject?: Tetms503ApplicationJSON;
    /**
     * Gateway timeout
     */
    tetms504ApplicationJSONObject?: Tetms504ApplicationJSON;
}
