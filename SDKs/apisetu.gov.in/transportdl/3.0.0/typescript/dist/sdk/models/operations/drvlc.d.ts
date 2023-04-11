import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DrvlcSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class DrvlcRequestBodyCertificateParameters extends SpeakeasyBase {
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
    /**
     * Driving License No
     */
    dlno: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum DrvlcRequestBodyFormatEnum {
    Xml = "xml",
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class DrvlcRequestBody extends SpeakeasyBase {
    certificateParameters?: DrvlcRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: DrvlcRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Drvlc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Drvlc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Drvlc504ApplicationJSON extends SpeakeasyBase {
    error?: Drvlc504ApplicationJSONErrorEnum;
    errorDescription?: Drvlc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Drvlc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Drvlc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Drvlc503ApplicationJSON extends SpeakeasyBase {
    error?: Drvlc503ApplicationJSONErrorEnum;
    errorDescription?: Drvlc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Drvlc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Drvlc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Drvlc502ApplicationJSON extends SpeakeasyBase {
    error?: Drvlc502ApplicationJSONErrorEnum;
    errorDescription?: Drvlc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Drvlc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Drvlc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Drvlc500ApplicationJSON extends SpeakeasyBase {
    error?: Drvlc500ApplicationJSONErrorEnum;
    errorDescription?: Drvlc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Drvlc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Drvlc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Drvlc404ApplicationJSON extends SpeakeasyBase {
    error?: Drvlc404ApplicationJSONErrorEnum;
    errorDescription?: Drvlc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Drvlc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Drvlc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Drvlc401ApplicationJSON extends SpeakeasyBase {
    error?: Drvlc401ApplicationJSONErrorEnum;
    errorDescription?: Drvlc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Drvlc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Drvlc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Drvlc400ApplicationJSON extends SpeakeasyBase {
    error?: Drvlc400ApplicationJSONErrorEnum;
    errorDescription?: Drvlc400ApplicationJSONErrorDescriptionEnum;
}
export declare class DrvlcResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    drvlc400ApplicationJSONObject?: Drvlc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    drvlc401ApplicationJSONObject?: Drvlc401ApplicationJSON;
    /**
     * No record found
     */
    drvlc404ApplicationJSONObject?: Drvlc404ApplicationJSON;
    /**
     * Internal server error
     */
    drvlc500ApplicationJSONObject?: Drvlc500ApplicationJSON;
    /**
     * Bad gateway
     */
    drvlc502ApplicationJSONObject?: Drvlc502ApplicationJSON;
    /**
     * Service unavailable
     */
    drvlc503ApplicationJSONObject?: Drvlc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    drvlc504ApplicationJSONObject?: Drvlc504ApplicationJSON;
}
