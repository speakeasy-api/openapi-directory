import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PodocSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class PodocRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * Date of Birth
     */
    polDOB: string;
    /**
     * Policy Number
     */
    policyNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum PodocRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class PodocRequestBody extends SpeakeasyBase {
    certificateParameters?: PodocRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: PodocRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Podoc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Podoc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Podoc504ApplicationJSON extends SpeakeasyBase {
    error?: Podoc504ApplicationJSONErrorEnum;
    errorDescription?: Podoc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Podoc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Podoc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Podoc503ApplicationJSON extends SpeakeasyBase {
    error?: Podoc503ApplicationJSONErrorEnum;
    errorDescription?: Podoc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Podoc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Podoc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Podoc502ApplicationJSON extends SpeakeasyBase {
    error?: Podoc502ApplicationJSONErrorEnum;
    errorDescription?: Podoc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Podoc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Podoc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Podoc500ApplicationJSON extends SpeakeasyBase {
    error?: Podoc500ApplicationJSONErrorEnum;
    errorDescription?: Podoc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Podoc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Podoc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Podoc404ApplicationJSON extends SpeakeasyBase {
    error?: Podoc404ApplicationJSONErrorEnum;
    errorDescription?: Podoc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Podoc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Podoc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Podoc401ApplicationJSON extends SpeakeasyBase {
    error?: Podoc401ApplicationJSONErrorEnum;
    errorDescription?: Podoc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Podoc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Podoc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Podoc400ApplicationJSON extends SpeakeasyBase {
    error?: Podoc400ApplicationJSONErrorEnum;
    errorDescription?: Podoc400ApplicationJSONErrorDescriptionEnum;
}
export declare class PodocResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    podoc400ApplicationJSONObject?: Podoc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    podoc401ApplicationJSONObject?: Podoc401ApplicationJSON;
    /**
     * No record found
     */
    podoc404ApplicationJSONObject?: Podoc404ApplicationJSON;
    /**
     * Internal server error
     */
    podoc500ApplicationJSONObject?: Podoc500ApplicationJSON;
    /**
     * Bad gateway
     */
    podoc502ApplicationJSONObject?: Podoc502ApplicationJSON;
    /**
     * Service unavailable
     */
    podoc503ApplicationJSONObject?: Podoc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    podoc504ApplicationJSONObject?: Podoc504ApplicationJSON;
}
