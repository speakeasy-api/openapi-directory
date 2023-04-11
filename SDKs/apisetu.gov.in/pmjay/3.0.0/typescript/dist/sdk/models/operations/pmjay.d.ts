import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PmjaySecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class PmjayRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * PMJAY ID
     */
    udf1: string;
    /**
     * State Name
     */
    udf2: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum PmjayRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class PmjayRequestBody extends SpeakeasyBase {
    certificateParameters?: PmjayRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: PmjayRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Pmjay504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Pmjay504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Pmjay504ApplicationJSON extends SpeakeasyBase {
    error?: Pmjay504ApplicationJSONErrorEnum;
    errorDescription?: Pmjay504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pmjay503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Pmjay503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Pmjay503ApplicationJSON extends SpeakeasyBase {
    error?: Pmjay503ApplicationJSONErrorEnum;
    errorDescription?: Pmjay503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pmjay502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Pmjay502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Pmjay502ApplicationJSON extends SpeakeasyBase {
    error?: Pmjay502ApplicationJSONErrorEnum;
    errorDescription?: Pmjay502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pmjay500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Pmjay500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Pmjay500ApplicationJSON extends SpeakeasyBase {
    error?: Pmjay500ApplicationJSONErrorEnum;
    errorDescription?: Pmjay500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pmjay404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Pmjay404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Pmjay404ApplicationJSON extends SpeakeasyBase {
    error?: Pmjay404ApplicationJSONErrorEnum;
    errorDescription?: Pmjay404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pmjay401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Pmjay401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Pmjay401ApplicationJSON extends SpeakeasyBase {
    error?: Pmjay401ApplicationJSONErrorEnum;
    errorDescription?: Pmjay401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pmjay400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Pmjay400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Pmjay400ApplicationJSON extends SpeakeasyBase {
    error?: Pmjay400ApplicationJSONErrorEnum;
    errorDescription?: Pmjay400ApplicationJSONErrorDescriptionEnum;
}
export declare class PmjayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    pmjay400ApplicationJSONObject?: Pmjay400ApplicationJSON;
    /**
     * Unauthorized access
     */
    pmjay401ApplicationJSONObject?: Pmjay401ApplicationJSON;
    /**
     * No record found
     */
    pmjay404ApplicationJSONObject?: Pmjay404ApplicationJSON;
    /**
     * Internal server error
     */
    pmjay500ApplicationJSONObject?: Pmjay500ApplicationJSON;
    /**
     * Bad gateway
     */
    pmjay502ApplicationJSONObject?: Pmjay502ApplicationJSON;
    /**
     * Service unavailable
     */
    pmjay503ApplicationJSONObject?: Pmjay503ApplicationJSON;
    /**
     * Gateway timeout
     */
    pmjay504ApplicationJSONObject?: Pmjay504ApplicationJSON;
}
