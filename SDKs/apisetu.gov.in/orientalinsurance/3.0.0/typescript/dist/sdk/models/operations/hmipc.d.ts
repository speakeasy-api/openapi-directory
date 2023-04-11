import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class HmipcSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class HmipcRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * INSCODE
     */
    inscode: string;
    /**
     * POLNO
     */
    polno: string;
    /**
     * STARTDT
     */
    startdt: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum HmipcRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class HmipcRequestBody extends SpeakeasyBase {
    certificateParameters?: HmipcRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: HmipcRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Hmipc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Hmipc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Hmipc504ApplicationJSON extends SpeakeasyBase {
    error?: Hmipc504ApplicationJSONErrorEnum;
    errorDescription?: Hmipc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hmipc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Hmipc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Hmipc503ApplicationJSON extends SpeakeasyBase {
    error?: Hmipc503ApplicationJSONErrorEnum;
    errorDescription?: Hmipc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hmipc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Hmipc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Hmipc502ApplicationJSON extends SpeakeasyBase {
    error?: Hmipc502ApplicationJSONErrorEnum;
    errorDescription?: Hmipc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hmipc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Hmipc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Hmipc500ApplicationJSON extends SpeakeasyBase {
    error?: Hmipc500ApplicationJSONErrorEnum;
    errorDescription?: Hmipc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hmipc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Hmipc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Hmipc404ApplicationJSON extends SpeakeasyBase {
    error?: Hmipc404ApplicationJSONErrorEnum;
    errorDescription?: Hmipc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hmipc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Hmipc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Hmipc401ApplicationJSON extends SpeakeasyBase {
    error?: Hmipc401ApplicationJSONErrorEnum;
    errorDescription?: Hmipc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hmipc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Hmipc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Hmipc400ApplicationJSON extends SpeakeasyBase {
    error?: Hmipc400ApplicationJSONErrorEnum;
    errorDescription?: Hmipc400ApplicationJSONErrorDescriptionEnum;
}
export declare class HmipcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    hmipc400ApplicationJSONObject?: Hmipc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    hmipc401ApplicationJSONObject?: Hmipc401ApplicationJSON;
    /**
     * No record found
     */
    hmipc404ApplicationJSONObject?: Hmipc404ApplicationJSON;
    /**
     * Internal server error
     */
    hmipc500ApplicationJSONObject?: Hmipc500ApplicationJSON;
    /**
     * Bad gateway
     */
    hmipc502ApplicationJSONObject?: Hmipc502ApplicationJSON;
    /**
     * Service unavailable
     */
    hmipc503ApplicationJSONObject?: Hmipc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    hmipc504ApplicationJSONObject?: Hmipc504ApplicationJSON;
}
