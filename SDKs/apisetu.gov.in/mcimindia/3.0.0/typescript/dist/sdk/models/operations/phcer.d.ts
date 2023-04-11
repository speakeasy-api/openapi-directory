import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PhcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class PhcerRequestBodyCertificateParameters extends SpeakeasyBase {
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
    regnNo: string;
    /**
     * Aadhaar number
     */
    uid: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum PhcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class PhcerRequestBody extends SpeakeasyBase {
    certificateParameters?: PhcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: PhcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Phcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Phcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Phcer504ApplicationJSON extends SpeakeasyBase {
    error?: Phcer504ApplicationJSONErrorEnum;
    errorDescription?: Phcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Phcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Phcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Phcer503ApplicationJSON extends SpeakeasyBase {
    error?: Phcer503ApplicationJSONErrorEnum;
    errorDescription?: Phcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Phcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Phcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Phcer502ApplicationJSON extends SpeakeasyBase {
    error?: Phcer502ApplicationJSONErrorEnum;
    errorDescription?: Phcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Phcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Phcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Phcer500ApplicationJSON extends SpeakeasyBase {
    error?: Phcer500ApplicationJSONErrorEnum;
    errorDescription?: Phcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Phcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Phcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Phcer404ApplicationJSON extends SpeakeasyBase {
    error?: Phcer404ApplicationJSONErrorEnum;
    errorDescription?: Phcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Phcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Phcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Phcer401ApplicationJSON extends SpeakeasyBase {
    error?: Phcer401ApplicationJSONErrorEnum;
    errorDescription?: Phcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Phcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Phcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Phcer400ApplicationJSON extends SpeakeasyBase {
    error?: Phcer400ApplicationJSONErrorEnum;
    errorDescription?: Phcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class PhcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    phcer400ApplicationJSONObject?: Phcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    phcer401ApplicationJSONObject?: Phcer401ApplicationJSON;
    /**
     * No record found
     */
    phcer404ApplicationJSONObject?: Phcer404ApplicationJSON;
    /**
     * Internal server error
     */
    phcer500ApplicationJSONObject?: Phcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    phcer502ApplicationJSONObject?: Phcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    phcer503ApplicationJSONObject?: Phcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    phcer504ApplicationJSONObject?: Phcer504ApplicationJSON;
}
