import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NchscSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class NchscRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Roll No
     */
    rollno: string;
    /**
     * Year
     */
    year: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum NchscRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class NchscRequestBody extends SpeakeasyBase {
    certificateParameters?: NchscRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: NchscRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Nchsc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Nchsc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Nchsc504ApplicationJSON extends SpeakeasyBase {
    error?: Nchsc504ApplicationJSONErrorEnum;
    errorDescription?: Nchsc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nchsc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Nchsc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Nchsc503ApplicationJSON extends SpeakeasyBase {
    error?: Nchsc503ApplicationJSONErrorEnum;
    errorDescription?: Nchsc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nchsc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Nchsc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Nchsc502ApplicationJSON extends SpeakeasyBase {
    error?: Nchsc502ApplicationJSONErrorEnum;
    errorDescription?: Nchsc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nchsc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Nchsc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Nchsc500ApplicationJSON extends SpeakeasyBase {
    error?: Nchsc500ApplicationJSONErrorEnum;
    errorDescription?: Nchsc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nchsc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Nchsc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Nchsc404ApplicationJSON extends SpeakeasyBase {
    error?: Nchsc404ApplicationJSONErrorEnum;
    errorDescription?: Nchsc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nchsc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Nchsc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Nchsc401ApplicationJSON extends SpeakeasyBase {
    error?: Nchsc401ApplicationJSONErrorEnum;
    errorDescription?: Nchsc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nchsc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Nchsc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Nchsc400ApplicationJSON extends SpeakeasyBase {
    error?: Nchsc400ApplicationJSONErrorEnum;
    errorDescription?: Nchsc400ApplicationJSONErrorDescriptionEnum;
}
export declare class NchscResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    nchsc400ApplicationJSONObject?: Nchsc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    nchsc401ApplicationJSONObject?: Nchsc401ApplicationJSON;
    /**
     * No record found
     */
    nchsc404ApplicationJSONObject?: Nchsc404ApplicationJSON;
    /**
     * Internal server error
     */
    nchsc500ApplicationJSONObject?: Nchsc500ApplicationJSON;
    /**
     * Bad gateway
     */
    nchsc502ApplicationJSONObject?: Nchsc502ApplicationJSON;
    /**
     * Service unavailable
     */
    nchsc503ApplicationJSONObject?: Nchsc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    nchsc504ApplicationJSONObject?: Nchsc504ApplicationJSON;
}
