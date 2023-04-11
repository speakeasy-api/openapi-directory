import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VhinscSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class VhinscRequestBodyCertificateParameters extends SpeakeasyBase {
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
    /**
     * Son / Wife / Daughter of
     */
    swdName: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum VhinscRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class VhinscRequestBody extends SpeakeasyBase {
    certificateParameters?: VhinscRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: VhinscRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Vhinsc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Vhinsc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Vhinsc504ApplicationJSON extends SpeakeasyBase {
    error?: Vhinsc504ApplicationJSONErrorEnum;
    errorDescription?: Vhinsc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vhinsc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Vhinsc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Vhinsc503ApplicationJSON extends SpeakeasyBase {
    error?: Vhinsc503ApplicationJSONErrorEnum;
    errorDescription?: Vhinsc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vhinsc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Vhinsc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Vhinsc502ApplicationJSON extends SpeakeasyBase {
    error?: Vhinsc502ApplicationJSONErrorEnum;
    errorDescription?: Vhinsc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vhinsc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Vhinsc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Vhinsc500ApplicationJSON extends SpeakeasyBase {
    error?: Vhinsc500ApplicationJSONErrorEnum;
    errorDescription?: Vhinsc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vhinsc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Vhinsc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Vhinsc404ApplicationJSON extends SpeakeasyBase {
    error?: Vhinsc404ApplicationJSONErrorEnum;
    errorDescription?: Vhinsc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vhinsc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Vhinsc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Vhinsc401ApplicationJSON extends SpeakeasyBase {
    error?: Vhinsc401ApplicationJSONErrorEnum;
    errorDescription?: Vhinsc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vhinsc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Vhinsc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Vhinsc400ApplicationJSON extends SpeakeasyBase {
    error?: Vhinsc400ApplicationJSONErrorEnum;
    errorDescription?: Vhinsc400ApplicationJSONErrorDescriptionEnum;
}
export declare class VhinscResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    vhinsc400ApplicationJSONObject?: Vhinsc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    vhinsc401ApplicationJSONObject?: Vhinsc401ApplicationJSON;
    /**
     * No record found
     */
    vhinsc404ApplicationJSONObject?: Vhinsc404ApplicationJSON;
    /**
     * Internal server error
     */
    vhinsc500ApplicationJSONObject?: Vhinsc500ApplicationJSON;
    /**
     * Bad gateway
     */
    vhinsc502ApplicationJSONObject?: Vhinsc502ApplicationJSON;
    /**
     * Service unavailable
     */
    vhinsc503ApplicationJSONObject?: Vhinsc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    vhinsc504ApplicationJSONObject?: Vhinsc504ApplicationJSON;
}
