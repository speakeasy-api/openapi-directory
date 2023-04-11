import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CoprgSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class CoprgRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * ApplicationNumber
     */
    udf1: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum CoprgRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class CoprgRequestBody extends SpeakeasyBase {
    certificateParameters?: CoprgRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: CoprgRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Coprg504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Coprg504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Coprg504ApplicationJSON extends SpeakeasyBase {
    error?: Coprg504ApplicationJSONErrorEnum;
    errorDescription?: Coprg504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Coprg503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Coprg503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Coprg503ApplicationJSON extends SpeakeasyBase {
    error?: Coprg503ApplicationJSONErrorEnum;
    errorDescription?: Coprg503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Coprg502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Coprg502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Coprg502ApplicationJSON extends SpeakeasyBase {
    error?: Coprg502ApplicationJSONErrorEnum;
    errorDescription?: Coprg502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Coprg500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Coprg500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Coprg500ApplicationJSON extends SpeakeasyBase {
    error?: Coprg500ApplicationJSONErrorEnum;
    errorDescription?: Coprg500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Coprg404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Coprg404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Coprg404ApplicationJSON extends SpeakeasyBase {
    error?: Coprg404ApplicationJSONErrorEnum;
    errorDescription?: Coprg404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Coprg401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Coprg401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Coprg401ApplicationJSON extends SpeakeasyBase {
    error?: Coprg401ApplicationJSONErrorEnum;
    errorDescription?: Coprg401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Coprg400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Coprg400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Coprg400ApplicationJSON extends SpeakeasyBase {
    error?: Coprg400ApplicationJSONErrorEnum;
    errorDescription?: Coprg400ApplicationJSONErrorDescriptionEnum;
}
export declare class CoprgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    coprg400ApplicationJSONObject?: Coprg400ApplicationJSON;
    /**
     * Unauthorized access
     */
    coprg401ApplicationJSONObject?: Coprg401ApplicationJSON;
    /**
     * No record found
     */
    coprg404ApplicationJSONObject?: Coprg404ApplicationJSON;
    /**
     * Internal server error
     */
    coprg500ApplicationJSONObject?: Coprg500ApplicationJSON;
    /**
     * Bad gateway
     */
    coprg502ApplicationJSONObject?: Coprg502ApplicationJSON;
    /**
     * Service unavailable
     */
    coprg503ApplicationJSONObject?: Coprg503ApplicationJSON;
    /**
     * Gateway timeout
     */
    coprg504ApplicationJSONObject?: Coprg504ApplicationJSON;
}
