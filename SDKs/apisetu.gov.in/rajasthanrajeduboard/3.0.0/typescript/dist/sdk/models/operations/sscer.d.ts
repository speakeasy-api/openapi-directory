import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SscerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class SscerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Candidate Name
     */
    cname: string;
    /**
     * ROLL Number
     */
    roll: string;
    /**
     * YEAR
     */
    year: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum SscerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class SscerRequestBody extends SpeakeasyBase {
    certificateParameters?: SscerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: SscerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Sscer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Sscer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Sscer504ApplicationJSON extends SpeakeasyBase {
    error?: Sscer504ApplicationJSONErrorEnum;
    errorDescription?: Sscer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sscer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Sscer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Sscer503ApplicationJSON extends SpeakeasyBase {
    error?: Sscer503ApplicationJSONErrorEnum;
    errorDescription?: Sscer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sscer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Sscer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Sscer502ApplicationJSON extends SpeakeasyBase {
    error?: Sscer502ApplicationJSONErrorEnum;
    errorDescription?: Sscer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sscer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Sscer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Sscer500ApplicationJSON extends SpeakeasyBase {
    error?: Sscer500ApplicationJSONErrorEnum;
    errorDescription?: Sscer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sscer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Sscer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Sscer404ApplicationJSON extends SpeakeasyBase {
    error?: Sscer404ApplicationJSONErrorEnum;
    errorDescription?: Sscer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sscer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Sscer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Sscer401ApplicationJSON extends SpeakeasyBase {
    error?: Sscer401ApplicationJSONErrorEnum;
    errorDescription?: Sscer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sscer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Sscer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Sscer400ApplicationJSON extends SpeakeasyBase {
    error?: Sscer400ApplicationJSONErrorEnum;
    errorDescription?: Sscer400ApplicationJSONErrorDescriptionEnum;
}
export declare class SscerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    sscer400ApplicationJSONObject?: Sscer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    sscer401ApplicationJSONObject?: Sscer401ApplicationJSON;
    /**
     * No record found
     */
    sscer404ApplicationJSONObject?: Sscer404ApplicationJSON;
    /**
     * Internal server error
     */
    sscer500ApplicationJSONObject?: Sscer500ApplicationJSON;
    /**
     * Bad gateway
     */
    sscer502ApplicationJSONObject?: Sscer502ApplicationJSON;
    /**
     * Service unavailable
     */
    sscer503ApplicationJSONObject?: Sscer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    sscer504ApplicationJSONObject?: Sscer504ApplicationJSON;
}
