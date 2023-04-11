import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EgipcSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class EgipcRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Customer No
     */
    customerId: string;
    /**
     * Policy Number
     */
    policyNumber: string;
    /**
     * Policy Start Date
     */
    policyStartDate: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum EgipcRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class EgipcRequestBody extends SpeakeasyBase {
    certificateParameters?: EgipcRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: EgipcRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Egipc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Egipc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Egipc504ApplicationJSON extends SpeakeasyBase {
    error?: Egipc504ApplicationJSONErrorEnum;
    errorDescription?: Egipc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Egipc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Egipc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Egipc503ApplicationJSON extends SpeakeasyBase {
    error?: Egipc503ApplicationJSONErrorEnum;
    errorDescription?: Egipc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Egipc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Egipc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Egipc502ApplicationJSON extends SpeakeasyBase {
    error?: Egipc502ApplicationJSONErrorEnum;
    errorDescription?: Egipc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Egipc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Egipc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Egipc500ApplicationJSON extends SpeakeasyBase {
    error?: Egipc500ApplicationJSONErrorEnum;
    errorDescription?: Egipc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Egipc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Egipc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Egipc404ApplicationJSON extends SpeakeasyBase {
    error?: Egipc404ApplicationJSONErrorEnum;
    errorDescription?: Egipc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Egipc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Egipc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Egipc401ApplicationJSON extends SpeakeasyBase {
    error?: Egipc401ApplicationJSONErrorEnum;
    errorDescription?: Egipc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Egipc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Egipc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Egipc400ApplicationJSON extends SpeakeasyBase {
    error?: Egipc400ApplicationJSONErrorEnum;
    errorDescription?: Egipc400ApplicationJSONErrorDescriptionEnum;
}
export declare class EgipcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    egipc400ApplicationJSONObject?: Egipc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    egipc401ApplicationJSONObject?: Egipc401ApplicationJSON;
    /**
     * No record found
     */
    egipc404ApplicationJSONObject?: Egipc404ApplicationJSON;
    /**
     * Internal server error
     */
    egipc500ApplicationJSONObject?: Egipc500ApplicationJSON;
    /**
     * Bad gateway
     */
    egipc502ApplicationJSONObject?: Egipc502ApplicationJSON;
    /**
     * Service unavailable
     */
    egipc503ApplicationJSONObject?: Egipc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    egipc504ApplicationJSONObject?: Egipc504ApplicationJSON;
}
