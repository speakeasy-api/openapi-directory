import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RmcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class RmcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Application Reference Number
     */
    refNo: string;
    /**
     * Certificate Token Number
     */
    tokenNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum RmcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class RmcerRequestBody extends SpeakeasyBase {
    certificateParameters?: RmcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: RmcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Rmcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Rmcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Rmcer504ApplicationJSON extends SpeakeasyBase {
    error?: Rmcer504ApplicationJSONErrorEnum;
    errorDescription?: Rmcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rmcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Rmcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Rmcer503ApplicationJSON extends SpeakeasyBase {
    error?: Rmcer503ApplicationJSONErrorEnum;
    errorDescription?: Rmcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rmcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Rmcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Rmcer502ApplicationJSON extends SpeakeasyBase {
    error?: Rmcer502ApplicationJSONErrorEnum;
    errorDescription?: Rmcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rmcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Rmcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Rmcer500ApplicationJSON extends SpeakeasyBase {
    error?: Rmcer500ApplicationJSONErrorEnum;
    errorDescription?: Rmcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rmcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Rmcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Rmcer404ApplicationJSON extends SpeakeasyBase {
    error?: Rmcer404ApplicationJSONErrorEnum;
    errorDescription?: Rmcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rmcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Rmcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Rmcer401ApplicationJSON extends SpeakeasyBase {
    error?: Rmcer401ApplicationJSONErrorEnum;
    errorDescription?: Rmcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rmcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Rmcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Rmcer400ApplicationJSON extends SpeakeasyBase {
    error?: Rmcer400ApplicationJSONErrorEnum;
    errorDescription?: Rmcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class RmcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    rmcer400ApplicationJSONObject?: Rmcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    rmcer401ApplicationJSONObject?: Rmcer401ApplicationJSON;
    /**
     * No record found
     */
    rmcer404ApplicationJSONObject?: Rmcer404ApplicationJSON;
    /**
     * Internal server error
     */
    rmcer500ApplicationJSONObject?: Rmcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    rmcer502ApplicationJSONObject?: Rmcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    rmcer503ApplicationJSONObject?: Rmcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    rmcer504ApplicationJSONObject?: Rmcer504ApplicationJSON;
}
