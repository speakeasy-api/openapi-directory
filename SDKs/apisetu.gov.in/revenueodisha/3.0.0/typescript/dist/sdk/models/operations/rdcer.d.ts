import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RdcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class RdcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * Registration No
     */
    regdno: string;
    /**
     * Aadhaar number
     */
    uid: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum RdcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class RdcerRequestBody extends SpeakeasyBase {
    certificateParameters?: RdcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: RdcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Rdcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Rdcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Rdcer504ApplicationJSON extends SpeakeasyBase {
    error?: Rdcer504ApplicationJSONErrorEnum;
    errorDescription?: Rdcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rdcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Rdcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Rdcer503ApplicationJSON extends SpeakeasyBase {
    error?: Rdcer503ApplicationJSONErrorEnum;
    errorDescription?: Rdcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rdcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Rdcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Rdcer502ApplicationJSON extends SpeakeasyBase {
    error?: Rdcer502ApplicationJSONErrorEnum;
    errorDescription?: Rdcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rdcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Rdcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Rdcer500ApplicationJSON extends SpeakeasyBase {
    error?: Rdcer500ApplicationJSONErrorEnum;
    errorDescription?: Rdcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rdcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Rdcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Rdcer404ApplicationJSON extends SpeakeasyBase {
    error?: Rdcer404ApplicationJSONErrorEnum;
    errorDescription?: Rdcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rdcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Rdcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Rdcer401ApplicationJSON extends SpeakeasyBase {
    error?: Rdcer401ApplicationJSONErrorEnum;
    errorDescription?: Rdcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rdcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Rdcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Rdcer400ApplicationJSON extends SpeakeasyBase {
    error?: Rdcer400ApplicationJSONErrorEnum;
    errorDescription?: Rdcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class RdcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    rdcer400ApplicationJSONObject?: Rdcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    rdcer401ApplicationJSONObject?: Rdcer401ApplicationJSON;
    /**
     * No record found
     */
    rdcer404ApplicationJSONObject?: Rdcer404ApplicationJSON;
    /**
     * Internal server error
     */
    rdcer500ApplicationJSONObject?: Rdcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    rdcer502ApplicationJSONObject?: Rdcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    rdcer503ApplicationJSONObject?: Rdcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    rdcer504ApplicationJSONObject?: Rdcer504ApplicationJSON;
}
