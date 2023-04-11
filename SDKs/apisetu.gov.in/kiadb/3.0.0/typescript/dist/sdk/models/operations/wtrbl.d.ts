import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class WtrblSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class WtrblRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum WtrblRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class WtrblRequestBody extends SpeakeasyBase {
    certificateParameters?: WtrblRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: WtrblRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Wtrbl504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Wtrbl504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Wtrbl504ApplicationJSON extends SpeakeasyBase {
    error?: Wtrbl504ApplicationJSONErrorEnum;
    errorDescription?: Wtrbl504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Wtrbl503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Wtrbl503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Wtrbl503ApplicationJSON extends SpeakeasyBase {
    error?: Wtrbl503ApplicationJSONErrorEnum;
    errorDescription?: Wtrbl503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Wtrbl502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Wtrbl502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Wtrbl502ApplicationJSON extends SpeakeasyBase {
    error?: Wtrbl502ApplicationJSONErrorEnum;
    errorDescription?: Wtrbl502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Wtrbl500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Wtrbl500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Wtrbl500ApplicationJSON extends SpeakeasyBase {
    error?: Wtrbl500ApplicationJSONErrorEnum;
    errorDescription?: Wtrbl500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Wtrbl404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Wtrbl404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Wtrbl404ApplicationJSON extends SpeakeasyBase {
    error?: Wtrbl404ApplicationJSONErrorEnum;
    errorDescription?: Wtrbl404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Wtrbl401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Wtrbl401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Wtrbl401ApplicationJSON extends SpeakeasyBase {
    error?: Wtrbl401ApplicationJSONErrorEnum;
    errorDescription?: Wtrbl401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Wtrbl400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Wtrbl400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Wtrbl400ApplicationJSON extends SpeakeasyBase {
    error?: Wtrbl400ApplicationJSONErrorEnum;
    errorDescription?: Wtrbl400ApplicationJSONErrorDescriptionEnum;
}
export declare class WtrblResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    wtrbl400ApplicationJSONObject?: Wtrbl400ApplicationJSON;
    /**
     * Unauthorized access
     */
    wtrbl401ApplicationJSONObject?: Wtrbl401ApplicationJSON;
    /**
     * No record found
     */
    wtrbl404ApplicationJSONObject?: Wtrbl404ApplicationJSON;
    /**
     * Internal server error
     */
    wtrbl500ApplicationJSONObject?: Wtrbl500ApplicationJSON;
    /**
     * Bad gateway
     */
    wtrbl502ApplicationJSONObject?: Wtrbl502ApplicationJSON;
    /**
     * Service unavailable
     */
    wtrbl503ApplicationJSONObject?: Wtrbl503ApplicationJSON;
    /**
     * Gateway timeout
     */
    wtrbl504ApplicationJSONObject?: Wtrbl504ApplicationJSON;
}
