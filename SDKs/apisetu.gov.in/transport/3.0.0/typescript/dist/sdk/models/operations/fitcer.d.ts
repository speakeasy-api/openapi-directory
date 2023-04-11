import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FitcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class FitcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Aadhaar number
     */
    uid: string;
    /**
     * Chassis No
     */
    chasisNo: string;
    /**
     * Vehicle Registration No
     */
    regNo: string;
    /**
     * Son / Wife / Daughter of
     */
    swdName: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum FitcerRequestBodyFormatEnum {
    Xml = "xml",
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class FitcerRequestBody extends SpeakeasyBase {
    certificateParameters?: FitcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: FitcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Fitcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Fitcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Fitcer504ApplicationJSON extends SpeakeasyBase {
    error?: Fitcer504ApplicationJSONErrorEnum;
    errorDescription?: Fitcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Fitcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Fitcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Fitcer503ApplicationJSON extends SpeakeasyBase {
    error?: Fitcer503ApplicationJSONErrorEnum;
    errorDescription?: Fitcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Fitcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Fitcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Fitcer502ApplicationJSON extends SpeakeasyBase {
    error?: Fitcer502ApplicationJSONErrorEnum;
    errorDescription?: Fitcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Fitcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Fitcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Fitcer500ApplicationJSON extends SpeakeasyBase {
    error?: Fitcer500ApplicationJSONErrorEnum;
    errorDescription?: Fitcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Fitcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Fitcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Fitcer404ApplicationJSON extends SpeakeasyBase {
    error?: Fitcer404ApplicationJSONErrorEnum;
    errorDescription?: Fitcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Fitcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Fitcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Fitcer401ApplicationJSON extends SpeakeasyBase {
    error?: Fitcer401ApplicationJSONErrorEnum;
    errorDescription?: Fitcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Fitcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Fitcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Fitcer400ApplicationJSON extends SpeakeasyBase {
    error?: Fitcer400ApplicationJSONErrorEnum;
    errorDescription?: Fitcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class FitcerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    fitcer400ApplicationJSONObject?: Fitcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    fitcer401ApplicationJSONObject?: Fitcer401ApplicationJSON;
    /**
     * No record found
     */
    fitcer404ApplicationJSONObject?: Fitcer404ApplicationJSON;
    /**
     * Internal server error
     */
    fitcer500ApplicationJSONObject?: Fitcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    fitcer502ApplicationJSONObject?: Fitcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    fitcer503ApplicationJSONObject?: Fitcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    fitcer504ApplicationJSONObject?: Fitcer504ApplicationJSON;
}
