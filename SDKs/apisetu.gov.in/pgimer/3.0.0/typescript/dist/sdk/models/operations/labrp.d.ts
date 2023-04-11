import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LabrpSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class LabrpRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * Gender - M for male, F for female and O for other
     */
    gender: string;
    /**
     * Mobile No.
     */
    mobileNoRQ: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum LabrpRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class LabrpRequestBody extends SpeakeasyBase {
    certificateParameters?: LabrpRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: LabrpRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Labrp504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Labrp504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Labrp504ApplicationJSON extends SpeakeasyBase {
    error?: Labrp504ApplicationJSONErrorEnum;
    errorDescription?: Labrp504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Labrp503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Labrp503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Labrp503ApplicationJSON extends SpeakeasyBase {
    error?: Labrp503ApplicationJSONErrorEnum;
    errorDescription?: Labrp503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Labrp502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Labrp502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Labrp502ApplicationJSON extends SpeakeasyBase {
    error?: Labrp502ApplicationJSONErrorEnum;
    errorDescription?: Labrp502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Labrp500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Labrp500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Labrp500ApplicationJSON extends SpeakeasyBase {
    error?: Labrp500ApplicationJSONErrorEnum;
    errorDescription?: Labrp500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Labrp404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Labrp404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Labrp404ApplicationJSON extends SpeakeasyBase {
    error?: Labrp404ApplicationJSONErrorEnum;
    errorDescription?: Labrp404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Labrp401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Labrp401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Labrp401ApplicationJSON extends SpeakeasyBase {
    error?: Labrp401ApplicationJSONErrorEnum;
    errorDescription?: Labrp401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Labrp400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Labrp400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Labrp400ApplicationJSON extends SpeakeasyBase {
    error?: Labrp400ApplicationJSONErrorEnum;
    errorDescription?: Labrp400ApplicationJSONErrorDescriptionEnum;
}
export declare class LabrpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    labrp400ApplicationJSONObject?: Labrp400ApplicationJSON;
    /**
     * Unauthorized access
     */
    labrp401ApplicationJSONObject?: Labrp401ApplicationJSON;
    /**
     * No record found
     */
    labrp404ApplicationJSONObject?: Labrp404ApplicationJSON;
    /**
     * Internal server error
     */
    labrp500ApplicationJSONObject?: Labrp500ApplicationJSON;
    /**
     * Bad gateway
     */
    labrp502ApplicationJSONObject?: Labrp502ApplicationJSON;
    /**
     * Service unavailable
     */
    labrp503ApplicationJSONObject?: Labrp503ApplicationJSON;
    /**
     * Gateway timeout
     */
    labrp504ApplicationJSONObject?: Labrp504ApplicationJSON;
}
