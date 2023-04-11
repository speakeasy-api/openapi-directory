import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SkhscSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class SkhscRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum SkhscRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class SkhscRequestBody extends SpeakeasyBase {
    certificateParameters?: SkhscRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: SkhscRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Skhsc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Skhsc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Skhsc504ApplicationJSON extends SpeakeasyBase {
    error?: Skhsc504ApplicationJSONErrorEnum;
    errorDescription?: Skhsc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Skhsc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Skhsc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Skhsc503ApplicationJSON extends SpeakeasyBase {
    error?: Skhsc503ApplicationJSONErrorEnum;
    errorDescription?: Skhsc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Skhsc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Skhsc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Skhsc502ApplicationJSON extends SpeakeasyBase {
    error?: Skhsc502ApplicationJSONErrorEnum;
    errorDescription?: Skhsc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Skhsc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Skhsc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Skhsc500ApplicationJSON extends SpeakeasyBase {
    error?: Skhsc500ApplicationJSONErrorEnum;
    errorDescription?: Skhsc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Skhsc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Skhsc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Skhsc404ApplicationJSON extends SpeakeasyBase {
    error?: Skhsc404ApplicationJSONErrorEnum;
    errorDescription?: Skhsc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Skhsc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Skhsc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Skhsc401ApplicationJSON extends SpeakeasyBase {
    error?: Skhsc401ApplicationJSONErrorEnum;
    errorDescription?: Skhsc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Skhsc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Skhsc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Skhsc400ApplicationJSON extends SpeakeasyBase {
    error?: Skhsc400ApplicationJSONErrorEnum;
    errorDescription?: Skhsc400ApplicationJSONErrorDescriptionEnum;
}
export declare class SkhscResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    skhsc400ApplicationJSONObject?: Skhsc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    skhsc401ApplicationJSONObject?: Skhsc401ApplicationJSON;
    /**
     * No record found
     */
    skhsc404ApplicationJSONObject?: Skhsc404ApplicationJSON;
    /**
     * Internal server error
     */
    skhsc500ApplicationJSONObject?: Skhsc500ApplicationJSON;
    /**
     * Bad gateway
     */
    skhsc502ApplicationJSONObject?: Skhsc502ApplicationJSON;
    /**
     * Service unavailable
     */
    skhsc503ApplicationJSONObject?: Skhsc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    skhsc504ApplicationJSONObject?: Skhsc504ApplicationJSON;
}
