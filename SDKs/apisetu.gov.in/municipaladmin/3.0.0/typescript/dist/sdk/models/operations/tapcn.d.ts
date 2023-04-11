import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TapcnSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class TapcnRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * DocumentNumber
     */
    documentNumber: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum TapcnRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class TapcnRequestBody extends SpeakeasyBase {
    certificateParameters?: TapcnRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: TapcnRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Tapcn504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Tapcn504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Tapcn504ApplicationJSON extends SpeakeasyBase {
    error?: Tapcn504ApplicationJSONErrorEnum;
    errorDescription?: Tapcn504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tapcn503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Tapcn503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Tapcn503ApplicationJSON extends SpeakeasyBase {
    error?: Tapcn503ApplicationJSONErrorEnum;
    errorDescription?: Tapcn503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tapcn502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Tapcn502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Tapcn502ApplicationJSON extends SpeakeasyBase {
    error?: Tapcn502ApplicationJSONErrorEnum;
    errorDescription?: Tapcn502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tapcn500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Tapcn500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Tapcn500ApplicationJSON extends SpeakeasyBase {
    error?: Tapcn500ApplicationJSONErrorEnum;
    errorDescription?: Tapcn500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tapcn404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Tapcn404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Tapcn404ApplicationJSON extends SpeakeasyBase {
    error?: Tapcn404ApplicationJSONErrorEnum;
    errorDescription?: Tapcn404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tapcn401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Tapcn401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Tapcn401ApplicationJSON extends SpeakeasyBase {
    error?: Tapcn401ApplicationJSONErrorEnum;
    errorDescription?: Tapcn401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tapcn400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Tapcn400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Tapcn400ApplicationJSON extends SpeakeasyBase {
    error?: Tapcn400ApplicationJSONErrorEnum;
    errorDescription?: Tapcn400ApplicationJSONErrorDescriptionEnum;
}
export declare class TapcnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    tapcn400ApplicationJSONObject?: Tapcn400ApplicationJSON;
    /**
     * Unauthorized access
     */
    tapcn401ApplicationJSONObject?: Tapcn401ApplicationJSON;
    /**
     * No record found
     */
    tapcn404ApplicationJSONObject?: Tapcn404ApplicationJSON;
    /**
     * Internal server error
     */
    tapcn500ApplicationJSONObject?: Tapcn500ApplicationJSON;
    /**
     * Bad gateway
     */
    tapcn502ApplicationJSONObject?: Tapcn502ApplicationJSON;
    /**
     * Service unavailable
     */
    tapcn503ApplicationJSONObject?: Tapcn503ApplicationJSON;
    /**
     * Gateway timeout
     */
    tapcn504ApplicationJSONObject?: Tapcn504ApplicationJSON;
}
