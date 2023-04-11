import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CemstSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class CemstRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Aadhaar number
     */
    uid: string;
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
export declare enum CemstRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class CemstRequestBody extends SpeakeasyBase {
    certificateParameters?: CemstRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: CemstRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Cemst504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Cemst504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Cemst504ApplicationJSON extends SpeakeasyBase {
    error?: Cemst504ApplicationJSONErrorEnum;
    errorDescription?: Cemst504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cemst503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Cemst503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Cemst503ApplicationJSON extends SpeakeasyBase {
    error?: Cemst503ApplicationJSONErrorEnum;
    errorDescription?: Cemst503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cemst502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Cemst502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Cemst502ApplicationJSON extends SpeakeasyBase {
    error?: Cemst502ApplicationJSONErrorEnum;
    errorDescription?: Cemst502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cemst500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Cemst500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Cemst500ApplicationJSON extends SpeakeasyBase {
    error?: Cemst500ApplicationJSONErrorEnum;
    errorDescription?: Cemst500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cemst404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Cemst404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Cemst404ApplicationJSON extends SpeakeasyBase {
    error?: Cemst404ApplicationJSONErrorEnum;
    errorDescription?: Cemst404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cemst401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Cemst401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Cemst401ApplicationJSON extends SpeakeasyBase {
    error?: Cemst401ApplicationJSONErrorEnum;
    errorDescription?: Cemst401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cemst400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Cemst400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Cemst400ApplicationJSON extends SpeakeasyBase {
    error?: Cemst400ApplicationJSONErrorEnum;
    errorDescription?: Cemst400ApplicationJSONErrorDescriptionEnum;
}
export declare class CemstResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    cemst400ApplicationJSONObject?: Cemst400ApplicationJSON;
    /**
     * Unauthorized access
     */
    cemst401ApplicationJSONObject?: Cemst401ApplicationJSON;
    /**
     * No record found
     */
    cemst404ApplicationJSONObject?: Cemst404ApplicationJSON;
    /**
     * Internal server error
     */
    cemst500ApplicationJSONObject?: Cemst500ApplicationJSON;
    /**
     * Bad gateway
     */
    cemst502ApplicationJSONObject?: Cemst502ApplicationJSON;
    /**
     * Service unavailable
     */
    cemst503ApplicationJSONObject?: Cemst503ApplicationJSON;
    /**
     * Gateway timeout
     */
    cemst504ApplicationJSONObject?: Cemst504ApplicationJSON;
}
