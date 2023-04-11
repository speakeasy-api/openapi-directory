import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PancrSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class PancrRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * Gender - M for male, F for female and O for other
     */
    gender: string;
    /**
     * Name as in PAN Card
     */
    panFullName: string;
    /**
     * Aadhaar number
     */
    uid: string;
    /**
     * PAN No.
     */
    panno: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum PancrRequestBodyFormatEnum {
    Xml = "xml",
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class PancrRequestBody extends SpeakeasyBase {
    certificateParameters?: PancrRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: PancrRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Pancr504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Pancr504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Pancr504ApplicationJSON extends SpeakeasyBase {
    error?: Pancr504ApplicationJSONErrorEnum;
    errorDescription?: Pancr504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pancr503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Pancr503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Pancr503ApplicationJSON extends SpeakeasyBase {
    error?: Pancr503ApplicationJSONErrorEnum;
    errorDescription?: Pancr503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pancr502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Pancr502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Pancr502ApplicationJSON extends SpeakeasyBase {
    error?: Pancr502ApplicationJSONErrorEnum;
    errorDescription?: Pancr502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pancr500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Pancr500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Pancr500ApplicationJSON extends SpeakeasyBase {
    error?: Pancr500ApplicationJSONErrorEnum;
    errorDescription?: Pancr500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pancr404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Pancr404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Pancr404ApplicationJSON extends SpeakeasyBase {
    error?: Pancr404ApplicationJSONErrorEnum;
    errorDescription?: Pancr404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pancr401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Pancr401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Pancr401ApplicationJSON extends SpeakeasyBase {
    error?: Pancr401ApplicationJSONErrorEnum;
    errorDescription?: Pancr401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pancr400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Pancr400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Pancr400ApplicationJSON extends SpeakeasyBase {
    error?: Pancr400ApplicationJSONErrorEnum;
    errorDescription?: Pancr400ApplicationJSONErrorDescriptionEnum;
}
export declare class PancrResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    pancr400ApplicationJSONObject?: Pancr400ApplicationJSON;
    /**
     * Unauthorized access
     */
    pancr401ApplicationJSONObject?: Pancr401ApplicationJSON;
    /**
     * No record found
     */
    pancr404ApplicationJSONObject?: Pancr404ApplicationJSON;
    /**
     * Internal server error
     */
    pancr500ApplicationJSONObject?: Pancr500ApplicationJSON;
    /**
     * Bad gateway
     */
    pancr502ApplicationJSONObject?: Pancr502ApplicationJSON;
    /**
     * Service unavailable
     */
    pancr503ApplicationJSONObject?: Pancr503ApplicationJSON;
    /**
     * Gateway timeout
     */
    pancr504ApplicationJSONObject?: Pancr504ApplicationJSON;
}
