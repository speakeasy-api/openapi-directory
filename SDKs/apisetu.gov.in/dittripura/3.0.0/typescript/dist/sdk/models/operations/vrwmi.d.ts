import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VrwmiSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class VrwmiRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Reference No.
     */
    refNo: string;
    /**
     * Token No.
     */
    tokenNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum VrwmiRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class VrwmiRequestBody extends SpeakeasyBase {
    certificateParameters?: VrwmiRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: VrwmiRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Vrwmi504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Vrwmi504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Vrwmi504ApplicationJSON extends SpeakeasyBase {
    error?: Vrwmi504ApplicationJSONErrorEnum;
    errorDescription?: Vrwmi504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vrwmi503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Vrwmi503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Vrwmi503ApplicationJSON extends SpeakeasyBase {
    error?: Vrwmi503ApplicationJSONErrorEnum;
    errorDescription?: Vrwmi503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vrwmi502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Vrwmi502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Vrwmi502ApplicationJSON extends SpeakeasyBase {
    error?: Vrwmi502ApplicationJSONErrorEnum;
    errorDescription?: Vrwmi502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vrwmi500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Vrwmi500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Vrwmi500ApplicationJSON extends SpeakeasyBase {
    error?: Vrwmi500ApplicationJSONErrorEnum;
    errorDescription?: Vrwmi500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vrwmi404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Vrwmi404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Vrwmi404ApplicationJSON extends SpeakeasyBase {
    error?: Vrwmi404ApplicationJSONErrorEnum;
    errorDescription?: Vrwmi404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vrwmi401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Vrwmi401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Vrwmi401ApplicationJSON extends SpeakeasyBase {
    error?: Vrwmi401ApplicationJSONErrorEnum;
    errorDescription?: Vrwmi401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vrwmi400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Vrwmi400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Vrwmi400ApplicationJSON extends SpeakeasyBase {
    error?: Vrwmi400ApplicationJSONErrorEnum;
    errorDescription?: Vrwmi400ApplicationJSONErrorDescriptionEnum;
}
export declare class VrwmiResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    vrwmi400ApplicationJSONObject?: Vrwmi400ApplicationJSON;
    /**
     * Unauthorized access
     */
    vrwmi401ApplicationJSONObject?: Vrwmi401ApplicationJSON;
    /**
     * No record found
     */
    vrwmi404ApplicationJSONObject?: Vrwmi404ApplicationJSON;
    /**
     * Internal server error
     */
    vrwmi500ApplicationJSONObject?: Vrwmi500ApplicationJSON;
    /**
     * Bad gateway
     */
    vrwmi502ApplicationJSONObject?: Vrwmi502ApplicationJSON;
    /**
     * Service unavailable
     */
    vrwmi503ApplicationJSONObject?: Vrwmi503ApplicationJSON;
    /**
     * Gateway timeout
     */
    vrwmi504ApplicationJSONObject?: Vrwmi504ApplicationJSON;
}
