import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AlsblSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class AlsblRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Reference No.
     */
    refNo: string;
    /**
     * Token ID
     */
    tokenNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum AlsblRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class AlsblRequestBody extends SpeakeasyBase {
    certificateParameters?: AlsblRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: AlsblRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Alsbl504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Alsbl504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Alsbl504ApplicationJSON extends SpeakeasyBase {
    error?: Alsbl504ApplicationJSONErrorEnum;
    errorDescription?: Alsbl504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alsbl503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Alsbl503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Alsbl503ApplicationJSON extends SpeakeasyBase {
    error?: Alsbl503ApplicationJSONErrorEnum;
    errorDescription?: Alsbl503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alsbl502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Alsbl502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Alsbl502ApplicationJSON extends SpeakeasyBase {
    error?: Alsbl502ApplicationJSONErrorEnum;
    errorDescription?: Alsbl502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alsbl500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Alsbl500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Alsbl500ApplicationJSON extends SpeakeasyBase {
    error?: Alsbl500ApplicationJSONErrorEnum;
    errorDescription?: Alsbl500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alsbl404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Alsbl404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Alsbl404ApplicationJSON extends SpeakeasyBase {
    error?: Alsbl404ApplicationJSONErrorEnum;
    errorDescription?: Alsbl404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alsbl401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Alsbl401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Alsbl401ApplicationJSON extends SpeakeasyBase {
    error?: Alsbl401ApplicationJSONErrorEnum;
    errorDescription?: Alsbl401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Alsbl400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Alsbl400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Alsbl400ApplicationJSON extends SpeakeasyBase {
    error?: Alsbl400ApplicationJSONErrorEnum;
    errorDescription?: Alsbl400ApplicationJSONErrorDescriptionEnum;
}
export declare class AlsblResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    alsbl400ApplicationJSONObject?: Alsbl400ApplicationJSON;
    /**
     * Unauthorized access
     */
    alsbl401ApplicationJSONObject?: Alsbl401ApplicationJSON;
    /**
     * No record found
     */
    alsbl404ApplicationJSONObject?: Alsbl404ApplicationJSON;
    /**
     * Internal server error
     */
    alsbl500ApplicationJSONObject?: Alsbl500ApplicationJSON;
    /**
     * Bad gateway
     */
    alsbl502ApplicationJSONObject?: Alsbl502ApplicationJSON;
    /**
     * Service unavailable
     */
    alsbl503ApplicationJSONObject?: Alsbl503ApplicationJSON;
    /**
     * Gateway timeout
     */
    alsbl504ApplicationJSONObject?: Alsbl504ApplicationJSON;
}
