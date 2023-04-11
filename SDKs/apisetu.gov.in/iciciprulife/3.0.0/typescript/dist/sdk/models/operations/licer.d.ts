import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LicerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class LicerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Policy Number
     */
    policynumber: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum LicerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class LicerRequestBody extends SpeakeasyBase {
    certificateParameters?: LicerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: LicerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Licer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Licer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Licer504ApplicationJSON extends SpeakeasyBase {
    error?: Licer504ApplicationJSONErrorEnum;
    errorDescription?: Licer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Licer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Licer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Licer503ApplicationJSON extends SpeakeasyBase {
    error?: Licer503ApplicationJSONErrorEnum;
    errorDescription?: Licer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Licer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Licer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Licer502ApplicationJSON extends SpeakeasyBase {
    error?: Licer502ApplicationJSONErrorEnum;
    errorDescription?: Licer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Licer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Licer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Licer500ApplicationJSON extends SpeakeasyBase {
    error?: Licer500ApplicationJSONErrorEnum;
    errorDescription?: Licer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Licer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Licer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Licer404ApplicationJSON extends SpeakeasyBase {
    error?: Licer404ApplicationJSONErrorEnum;
    errorDescription?: Licer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Licer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Licer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Licer401ApplicationJSON extends SpeakeasyBase {
    error?: Licer401ApplicationJSONErrorEnum;
    errorDescription?: Licer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Licer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Licer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Licer400ApplicationJSON extends SpeakeasyBase {
    error?: Licer400ApplicationJSONErrorEnum;
    errorDescription?: Licer400ApplicationJSONErrorDescriptionEnum;
}
export declare class LicerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    licer400ApplicationJSONObject?: Licer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    licer401ApplicationJSONObject?: Licer401ApplicationJSON;
    /**
     * No record found
     */
    licer404ApplicationJSONObject?: Licer404ApplicationJSON;
    /**
     * Internal server error
     */
    licer500ApplicationJSONObject?: Licer500ApplicationJSON;
    /**
     * Bad gateway
     */
    licer502ApplicationJSONObject?: Licer502ApplicationJSON;
    /**
     * Service unavailable
     */
    licer503ApplicationJSONObject?: Licer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    licer504ApplicationJSONObject?: Licer504ApplicationJSON;
}
