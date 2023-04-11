import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RvcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class RvcerRequestBodyCertificateParameters extends SpeakeasyBase {
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
}
/**
 * The format of the certificate in response.
 */
export declare enum RvcerRequestBodyFormatEnum {
    Xml = "xml",
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class RvcerRequestBody extends SpeakeasyBase {
    certificateParameters?: RvcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: RvcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Rvcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Rvcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Rvcer504ApplicationJSON extends SpeakeasyBase {
    error?: Rvcer504ApplicationJSONErrorEnum;
    errorDescription?: Rvcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rvcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Rvcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Rvcer503ApplicationJSON extends SpeakeasyBase {
    error?: Rvcer503ApplicationJSONErrorEnum;
    errorDescription?: Rvcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rvcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Rvcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Rvcer502ApplicationJSON extends SpeakeasyBase {
    error?: Rvcer502ApplicationJSONErrorEnum;
    errorDescription?: Rvcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rvcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Rvcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Rvcer500ApplicationJSON extends SpeakeasyBase {
    error?: Rvcer500ApplicationJSONErrorEnum;
    errorDescription?: Rvcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rvcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Rvcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Rvcer404ApplicationJSON extends SpeakeasyBase {
    error?: Rvcer404ApplicationJSONErrorEnum;
    errorDescription?: Rvcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rvcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Rvcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Rvcer401ApplicationJSON extends SpeakeasyBase {
    error?: Rvcer401ApplicationJSONErrorEnum;
    errorDescription?: Rvcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rvcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Rvcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Rvcer400ApplicationJSON extends SpeakeasyBase {
    error?: Rvcer400ApplicationJSONErrorEnum;
    errorDescription?: Rvcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class RvcerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    rvcer400ApplicationJSONObject?: Rvcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    rvcer401ApplicationJSONObject?: Rvcer401ApplicationJSON;
    /**
     * No record found
     */
    rvcer404ApplicationJSONObject?: Rvcer404ApplicationJSON;
    /**
     * Internal server error
     */
    rvcer500ApplicationJSONObject?: Rvcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    rvcer502ApplicationJSONObject?: Rvcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    rvcer503ApplicationJSONObject?: Rvcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    rvcer504ApplicationJSONObject?: Rvcer504ApplicationJSON;
}
