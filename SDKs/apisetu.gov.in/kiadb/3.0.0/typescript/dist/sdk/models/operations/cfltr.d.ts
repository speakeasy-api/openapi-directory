import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CfltrSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class CfltrRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum CfltrRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class CfltrRequestBody extends SpeakeasyBase {
    certificateParameters?: CfltrRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: CfltrRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Cfltr504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Cfltr504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Cfltr504ApplicationJSON extends SpeakeasyBase {
    error?: Cfltr504ApplicationJSONErrorEnum;
    errorDescription?: Cfltr504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cfltr503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Cfltr503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Cfltr503ApplicationJSON extends SpeakeasyBase {
    error?: Cfltr503ApplicationJSONErrorEnum;
    errorDescription?: Cfltr503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cfltr502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Cfltr502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Cfltr502ApplicationJSON extends SpeakeasyBase {
    error?: Cfltr502ApplicationJSONErrorEnum;
    errorDescription?: Cfltr502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cfltr500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Cfltr500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Cfltr500ApplicationJSON extends SpeakeasyBase {
    error?: Cfltr500ApplicationJSONErrorEnum;
    errorDescription?: Cfltr500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cfltr404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Cfltr404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Cfltr404ApplicationJSON extends SpeakeasyBase {
    error?: Cfltr404ApplicationJSONErrorEnum;
    errorDescription?: Cfltr404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cfltr401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Cfltr401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Cfltr401ApplicationJSON extends SpeakeasyBase {
    error?: Cfltr401ApplicationJSONErrorEnum;
    errorDescription?: Cfltr401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cfltr400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Cfltr400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Cfltr400ApplicationJSON extends SpeakeasyBase {
    error?: Cfltr400ApplicationJSONErrorEnum;
    errorDescription?: Cfltr400ApplicationJSONErrorDescriptionEnum;
}
export declare class CfltrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    cfltr400ApplicationJSONObject?: Cfltr400ApplicationJSON;
    /**
     * Unauthorized access
     */
    cfltr401ApplicationJSONObject?: Cfltr401ApplicationJSON;
    /**
     * No record found
     */
    cfltr404ApplicationJSONObject?: Cfltr404ApplicationJSON;
    /**
     * Internal server error
     */
    cfltr500ApplicationJSONObject?: Cfltr500ApplicationJSON;
    /**
     * Bad gateway
     */
    cfltr502ApplicationJSONObject?: Cfltr502ApplicationJSON;
    /**
     * Service unavailable
     */
    cfltr503ApplicationJSONObject?: Cfltr503ApplicationJSON;
    /**
     * Gateway timeout
     */
    cfltr504ApplicationJSONObject?: Cfltr504ApplicationJSON;
}
