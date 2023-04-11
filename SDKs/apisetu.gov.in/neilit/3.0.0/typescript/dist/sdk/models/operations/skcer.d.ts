import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SkcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class SkcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * Enter Roll No
     */
    udf1: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum SkcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class SkcerRequestBody extends SpeakeasyBase {
    certificateParameters?: SkcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: SkcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Skcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Skcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Skcer504ApplicationJSON extends SpeakeasyBase {
    error?: Skcer504ApplicationJSONErrorEnum;
    errorDescription?: Skcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Skcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Skcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Skcer503ApplicationJSON extends SpeakeasyBase {
    error?: Skcer503ApplicationJSONErrorEnum;
    errorDescription?: Skcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Skcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Skcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Skcer502ApplicationJSON extends SpeakeasyBase {
    error?: Skcer502ApplicationJSONErrorEnum;
    errorDescription?: Skcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Skcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Skcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Skcer500ApplicationJSON extends SpeakeasyBase {
    error?: Skcer500ApplicationJSONErrorEnum;
    errorDescription?: Skcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Skcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Skcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Skcer404ApplicationJSON extends SpeakeasyBase {
    error?: Skcer404ApplicationJSONErrorEnum;
    errorDescription?: Skcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Skcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Skcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Skcer401ApplicationJSON extends SpeakeasyBase {
    error?: Skcer401ApplicationJSONErrorEnum;
    errorDescription?: Skcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Skcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Skcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Skcer400ApplicationJSON extends SpeakeasyBase {
    error?: Skcer400ApplicationJSONErrorEnum;
    errorDescription?: Skcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class SkcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    skcer400ApplicationJSONObject?: Skcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    skcer401ApplicationJSONObject?: Skcer401ApplicationJSON;
    /**
     * No record found
     */
    skcer404ApplicationJSONObject?: Skcer404ApplicationJSON;
    /**
     * Internal server error
     */
    skcer500ApplicationJSONObject?: Skcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    skcer502ApplicationJSONObject?: Skcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    skcer503ApplicationJSONObject?: Skcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    skcer504ApplicationJSONObject?: Skcer504ApplicationJSON;
}
