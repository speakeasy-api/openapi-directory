import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AlsfcSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class AlsfcRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Aadhaar number
     */
    uid: string;
    /**
     * Licence No
     */
    lino: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum AlsfcRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class AlsfcRequestBody extends SpeakeasyBase {
    certificateParameters?: AlsfcRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: AlsfcRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Alsfc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Alsfc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Alsfc504ApplicationJSON extends SpeakeasyBase {
    error?: Alsfc504ApplicationJSONErrorEnum;
    errorDescription?: Alsfc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alsfc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Alsfc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Alsfc503ApplicationJSON extends SpeakeasyBase {
    error?: Alsfc503ApplicationJSONErrorEnum;
    errorDescription?: Alsfc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alsfc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Alsfc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Alsfc502ApplicationJSON extends SpeakeasyBase {
    error?: Alsfc502ApplicationJSONErrorEnum;
    errorDescription?: Alsfc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alsfc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Alsfc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Alsfc500ApplicationJSON extends SpeakeasyBase {
    error?: Alsfc500ApplicationJSONErrorEnum;
    errorDescription?: Alsfc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alsfc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Alsfc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Alsfc404ApplicationJSON extends SpeakeasyBase {
    error?: Alsfc404ApplicationJSONErrorEnum;
    errorDescription?: Alsfc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alsfc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Alsfc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Alsfc401ApplicationJSON extends SpeakeasyBase {
    error?: Alsfc401ApplicationJSONErrorEnum;
    errorDescription?: Alsfc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alsfc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Alsfc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Alsfc400ApplicationJSON extends SpeakeasyBase {
    error?: Alsfc400ApplicationJSONErrorEnum;
    errorDescription?: Alsfc400ApplicationJSONErrorDescriptionEnum;
}
export declare class AlsfcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    alsfc400ApplicationJSONObject?: Alsfc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    alsfc401ApplicationJSONObject?: Alsfc401ApplicationJSON;
    /**
     * No record found
     */
    alsfc404ApplicationJSONObject?: Alsfc404ApplicationJSON;
    /**
     * Internal server error
     */
    alsfc500ApplicationJSONObject?: Alsfc500ApplicationJSON;
    /**
     * Bad gateway
     */
    alsfc502ApplicationJSONObject?: Alsfc502ApplicationJSON;
    /**
     * Service unavailable
     */
    alsfc503ApplicationJSONObject?: Alsfc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    alsfc504ApplicationJSONObject?: Alsfc504ApplicationJSON;
}
