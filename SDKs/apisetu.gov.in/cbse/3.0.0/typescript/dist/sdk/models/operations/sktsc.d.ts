import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SktscSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class SktscRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum SktscRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class SktscRequestBody extends SpeakeasyBase {
    certificateParameters?: SktscRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: SktscRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Sktsc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Sktsc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Sktsc504ApplicationJSON extends SpeakeasyBase {
    error?: Sktsc504ApplicationJSONErrorEnum;
    errorDescription?: Sktsc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sktsc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Sktsc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Sktsc503ApplicationJSON extends SpeakeasyBase {
    error?: Sktsc503ApplicationJSONErrorEnum;
    errorDescription?: Sktsc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sktsc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Sktsc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Sktsc502ApplicationJSON extends SpeakeasyBase {
    error?: Sktsc502ApplicationJSONErrorEnum;
    errorDescription?: Sktsc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sktsc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Sktsc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Sktsc500ApplicationJSON extends SpeakeasyBase {
    error?: Sktsc500ApplicationJSONErrorEnum;
    errorDescription?: Sktsc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sktsc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Sktsc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Sktsc404ApplicationJSON extends SpeakeasyBase {
    error?: Sktsc404ApplicationJSONErrorEnum;
    errorDescription?: Sktsc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sktsc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Sktsc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Sktsc401ApplicationJSON extends SpeakeasyBase {
    error?: Sktsc401ApplicationJSONErrorEnum;
    errorDescription?: Sktsc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sktsc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Sktsc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Sktsc400ApplicationJSON extends SpeakeasyBase {
    error?: Sktsc400ApplicationJSONErrorEnum;
    errorDescription?: Sktsc400ApplicationJSONErrorDescriptionEnum;
}
export declare class SktscResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    sktsc400ApplicationJSONObject?: Sktsc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    sktsc401ApplicationJSONObject?: Sktsc401ApplicationJSON;
    /**
     * No record found
     */
    sktsc404ApplicationJSONObject?: Sktsc404ApplicationJSON;
    /**
     * Internal server error
     */
    sktsc500ApplicationJSONObject?: Sktsc500ApplicationJSON;
    /**
     * Bad gateway
     */
    sktsc502ApplicationJSONObject?: Sktsc502ApplicationJSON;
    /**
     * Service unavailable
     */
    sktsc503ApplicationJSONObject?: Sktsc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    sktsc504ApplicationJSONObject?: Sktsc504ApplicationJSON;
}
