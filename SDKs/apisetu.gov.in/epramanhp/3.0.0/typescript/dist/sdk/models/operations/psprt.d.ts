import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PsprtSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class PsprtRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Applicant Name
     */
    name: string;
    /**
     * Certificate Id
     */
    refNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum PsprtRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class PsprtRequestBody extends SpeakeasyBase {
    certificateParameters?: PsprtRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: PsprtRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Psprt504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Psprt504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Psprt504ApplicationJSON extends SpeakeasyBase {
    error?: Psprt504ApplicationJSONErrorEnum;
    errorDescription?: Psprt504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Psprt503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Psprt503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Psprt503ApplicationJSON extends SpeakeasyBase {
    error?: Psprt503ApplicationJSONErrorEnum;
    errorDescription?: Psprt503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Psprt502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Psprt502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Psprt502ApplicationJSON extends SpeakeasyBase {
    error?: Psprt502ApplicationJSONErrorEnum;
    errorDescription?: Psprt502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Psprt500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Psprt500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Psprt500ApplicationJSON extends SpeakeasyBase {
    error?: Psprt500ApplicationJSONErrorEnum;
    errorDescription?: Psprt500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Psprt404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Psprt404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Psprt404ApplicationJSON extends SpeakeasyBase {
    error?: Psprt404ApplicationJSONErrorEnum;
    errorDescription?: Psprt404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Psprt401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Psprt401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Psprt401ApplicationJSON extends SpeakeasyBase {
    error?: Psprt401ApplicationJSONErrorEnum;
    errorDescription?: Psprt401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Psprt400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Psprt400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Psprt400ApplicationJSON extends SpeakeasyBase {
    error?: Psprt400ApplicationJSONErrorEnum;
    errorDescription?: Psprt400ApplicationJSONErrorDescriptionEnum;
}
export declare class PsprtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    psprt400ApplicationJSONObject?: Psprt400ApplicationJSON;
    /**
     * Unauthorized access
     */
    psprt401ApplicationJSONObject?: Psprt401ApplicationJSON;
    /**
     * No record found
     */
    psprt404ApplicationJSONObject?: Psprt404ApplicationJSON;
    /**
     * Internal server error
     */
    psprt500ApplicationJSONObject?: Psprt500ApplicationJSON;
    /**
     * Bad gateway
     */
    psprt502ApplicationJSONObject?: Psprt502ApplicationJSON;
    /**
     * Service unavailable
     */
    psprt503ApplicationJSONObject?: Psprt503ApplicationJSON;
    /**
     * Gateway timeout
     */
    psprt504ApplicationJSONObject?: Psprt504ApplicationJSON;
}
