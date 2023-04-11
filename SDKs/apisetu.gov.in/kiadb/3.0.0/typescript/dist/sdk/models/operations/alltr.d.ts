import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AlltrSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class AlltrRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * Registration Number
     */
    regNum: string;
    /**
     * Aadhaar number
     */
    uid: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum AlltrRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class AlltrRequestBody extends SpeakeasyBase {
    certificateParameters?: AlltrRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: AlltrRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Alltr504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Alltr504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Alltr504ApplicationJSON extends SpeakeasyBase {
    error?: Alltr504ApplicationJSONErrorEnum;
    errorDescription?: Alltr504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alltr503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Alltr503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Alltr503ApplicationJSON extends SpeakeasyBase {
    error?: Alltr503ApplicationJSONErrorEnum;
    errorDescription?: Alltr503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alltr502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Alltr502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Alltr502ApplicationJSON extends SpeakeasyBase {
    error?: Alltr502ApplicationJSONErrorEnum;
    errorDescription?: Alltr502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alltr500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Alltr500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Alltr500ApplicationJSON extends SpeakeasyBase {
    error?: Alltr500ApplicationJSONErrorEnum;
    errorDescription?: Alltr500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alltr404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Alltr404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Alltr404ApplicationJSON extends SpeakeasyBase {
    error?: Alltr404ApplicationJSONErrorEnum;
    errorDescription?: Alltr404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alltr401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Alltr401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Alltr401ApplicationJSON extends SpeakeasyBase {
    error?: Alltr401ApplicationJSONErrorEnum;
    errorDescription?: Alltr401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alltr400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Alltr400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Alltr400ApplicationJSON extends SpeakeasyBase {
    error?: Alltr400ApplicationJSONErrorEnum;
    errorDescription?: Alltr400ApplicationJSONErrorDescriptionEnum;
}
export declare class AlltrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    alltr400ApplicationJSONObject?: Alltr400ApplicationJSON;
    /**
     * Unauthorized access
     */
    alltr401ApplicationJSONObject?: Alltr401ApplicationJSON;
    /**
     * No record found
     */
    alltr404ApplicationJSONObject?: Alltr404ApplicationJSON;
    /**
     * Internal server error
     */
    alltr500ApplicationJSONObject?: Alltr500ApplicationJSON;
    /**
     * Bad gateway
     */
    alltr502ApplicationJSONObject?: Alltr502ApplicationJSON;
    /**
     * Service unavailable
     */
    alltr503ApplicationJSONObject?: Alltr503ApplicationJSON;
    /**
     * Gateway timeout
     */
    alltr504ApplicationJSONObject?: Alltr504ApplicationJSON;
}
