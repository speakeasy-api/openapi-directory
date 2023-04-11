import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class OtcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class OtcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * Aadhaar number
     */
    uid: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum OtcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class OtcerRequestBody extends SpeakeasyBase {
    certificateParameters?: OtcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: OtcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Otcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Otcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Otcer504ApplicationJSON extends SpeakeasyBase {
    error?: Otcer504ApplicationJSONErrorEnum;
    errorDescription?: Otcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Otcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Otcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Otcer503ApplicationJSON extends SpeakeasyBase {
    error?: Otcer503ApplicationJSONErrorEnum;
    errorDescription?: Otcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Otcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Otcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Otcer502ApplicationJSON extends SpeakeasyBase {
    error?: Otcer502ApplicationJSONErrorEnum;
    errorDescription?: Otcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Otcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Otcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Otcer500ApplicationJSON extends SpeakeasyBase {
    error?: Otcer500ApplicationJSONErrorEnum;
    errorDescription?: Otcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Otcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Otcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Otcer404ApplicationJSON extends SpeakeasyBase {
    error?: Otcer404ApplicationJSONErrorEnum;
    errorDescription?: Otcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Otcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Otcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Otcer401ApplicationJSON extends SpeakeasyBase {
    error?: Otcer401ApplicationJSONErrorEnum;
    errorDescription?: Otcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Otcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Otcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Otcer400ApplicationJSON extends SpeakeasyBase {
    error?: Otcer400ApplicationJSONErrorEnum;
    errorDescription?: Otcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class OtcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    otcer400ApplicationJSONObject?: Otcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    otcer401ApplicationJSONObject?: Otcer401ApplicationJSON;
    /**
     * No record found
     */
    otcer404ApplicationJSONObject?: Otcer404ApplicationJSON;
    /**
     * Internal server error
     */
    otcer500ApplicationJSONObject?: Otcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    otcer502ApplicationJSONObject?: Otcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    otcer503ApplicationJSONObject?: Otcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    otcer504ApplicationJSONObject?: Otcer504ApplicationJSON;
}
