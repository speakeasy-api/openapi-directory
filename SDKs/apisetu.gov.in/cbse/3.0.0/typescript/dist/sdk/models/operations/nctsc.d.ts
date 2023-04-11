import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NctscSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class NctscRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum NctscRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class NctscRequestBody extends SpeakeasyBase {
    certificateParameters?: NctscRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: NctscRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Nctsc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Nctsc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Nctsc504ApplicationJSON extends SpeakeasyBase {
    error?: Nctsc504ApplicationJSONErrorEnum;
    errorDescription?: Nctsc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nctsc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Nctsc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Nctsc503ApplicationJSON extends SpeakeasyBase {
    error?: Nctsc503ApplicationJSONErrorEnum;
    errorDescription?: Nctsc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nctsc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Nctsc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Nctsc502ApplicationJSON extends SpeakeasyBase {
    error?: Nctsc502ApplicationJSONErrorEnum;
    errorDescription?: Nctsc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nctsc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Nctsc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Nctsc500ApplicationJSON extends SpeakeasyBase {
    error?: Nctsc500ApplicationJSONErrorEnum;
    errorDescription?: Nctsc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nctsc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Nctsc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Nctsc404ApplicationJSON extends SpeakeasyBase {
    error?: Nctsc404ApplicationJSONErrorEnum;
    errorDescription?: Nctsc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nctsc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Nctsc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Nctsc401ApplicationJSON extends SpeakeasyBase {
    error?: Nctsc401ApplicationJSONErrorEnum;
    errorDescription?: Nctsc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nctsc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Nctsc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Nctsc400ApplicationJSON extends SpeakeasyBase {
    error?: Nctsc400ApplicationJSONErrorEnum;
    errorDescription?: Nctsc400ApplicationJSONErrorDescriptionEnum;
}
export declare class NctscResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    nctsc400ApplicationJSONObject?: Nctsc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    nctsc401ApplicationJSONObject?: Nctsc401ApplicationJSON;
    /**
     * No record found
     */
    nctsc404ApplicationJSONObject?: Nctsc404ApplicationJSON;
    /**
     * Internal server error
     */
    nctsc500ApplicationJSONObject?: Nctsc500ApplicationJSON;
    /**
     * Bad gateway
     */
    nctsc502ApplicationJSONObject?: Nctsc502ApplicationJSON;
    /**
     * Service unavailable
     */
    nctsc503ApplicationJSONObject?: Nctsc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    nctsc504ApplicationJSONObject?: Nctsc504ApplicationJSON;
}
