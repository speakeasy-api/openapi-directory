import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SpcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class SpcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Exam Session
     */
    exsession: string;
    /**
     * Seat No
     */
    rollnumber: string;
    /**
     * Total Marks
     */
    totalmarks: string;
    /**
     * Year
     */
    year: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum SpcerRequestBodyFormatEnum {
    Xml = "xml",
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class SpcerRequestBody extends SpeakeasyBase {
    certificateParameters?: SpcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: SpcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Spcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Spcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Spcer504ApplicationJSON extends SpeakeasyBase {
    error?: Spcer504ApplicationJSONErrorEnum;
    errorDescription?: Spcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Spcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Spcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Spcer503ApplicationJSON extends SpeakeasyBase {
    error?: Spcer503ApplicationJSONErrorEnum;
    errorDescription?: Spcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Spcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Spcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Spcer502ApplicationJSON extends SpeakeasyBase {
    error?: Spcer502ApplicationJSONErrorEnum;
    errorDescription?: Spcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Spcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Spcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Spcer500ApplicationJSON extends SpeakeasyBase {
    error?: Spcer500ApplicationJSONErrorEnum;
    errorDescription?: Spcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Spcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Spcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Spcer404ApplicationJSON extends SpeakeasyBase {
    error?: Spcer404ApplicationJSONErrorEnum;
    errorDescription?: Spcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Spcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Spcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Spcer401ApplicationJSON extends SpeakeasyBase {
    error?: Spcer401ApplicationJSONErrorEnum;
    errorDescription?: Spcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Spcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Spcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Spcer400ApplicationJSON extends SpeakeasyBase {
    error?: Spcer400ApplicationJSONErrorEnum;
    errorDescription?: Spcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class SpcerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    spcer400ApplicationJSONObject?: Spcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    spcer401ApplicationJSONObject?: Spcer401ApplicationJSON;
    /**
     * No record found
     */
    spcer404ApplicationJSONObject?: Spcer404ApplicationJSON;
    /**
     * Internal server error
     */
    spcer500ApplicationJSONObject?: Spcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    spcer502ApplicationJSONObject?: Spcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    spcer503ApplicationJSONObject?: Spcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    spcer504ApplicationJSONObject?: Spcer504ApplicationJSON;
}
