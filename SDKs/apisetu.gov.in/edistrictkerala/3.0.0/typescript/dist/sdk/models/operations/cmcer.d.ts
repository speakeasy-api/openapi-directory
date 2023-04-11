import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CmcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class CmcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Application Number
     */
    aplno: string;
    /**
     * Certificate Number
     */
    certno: string;
    /**
     * Security Code
     */
    sccd: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum CmcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class CmcerRequestBody extends SpeakeasyBase {
    certificateParameters?: CmcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: CmcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Cmcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Cmcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Cmcer504ApplicationJSON extends SpeakeasyBase {
    error?: Cmcer504ApplicationJSONErrorEnum;
    errorDescription?: Cmcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cmcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Cmcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Cmcer503ApplicationJSON extends SpeakeasyBase {
    error?: Cmcer503ApplicationJSONErrorEnum;
    errorDescription?: Cmcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cmcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Cmcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Cmcer502ApplicationJSON extends SpeakeasyBase {
    error?: Cmcer502ApplicationJSONErrorEnum;
    errorDescription?: Cmcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cmcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Cmcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Cmcer500ApplicationJSON extends SpeakeasyBase {
    error?: Cmcer500ApplicationJSONErrorEnum;
    errorDescription?: Cmcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cmcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Cmcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Cmcer404ApplicationJSON extends SpeakeasyBase {
    error?: Cmcer404ApplicationJSONErrorEnum;
    errorDescription?: Cmcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cmcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Cmcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Cmcer401ApplicationJSON extends SpeakeasyBase {
    error?: Cmcer401ApplicationJSONErrorEnum;
    errorDescription?: Cmcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cmcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Cmcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Cmcer400ApplicationJSON extends SpeakeasyBase {
    error?: Cmcer400ApplicationJSONErrorEnum;
    errorDescription?: Cmcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class CmcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    cmcer400ApplicationJSONObject?: Cmcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    cmcer401ApplicationJSONObject?: Cmcer401ApplicationJSON;
    /**
     * No record found
     */
    cmcer404ApplicationJSONObject?: Cmcer404ApplicationJSON;
    /**
     * Internal server error
     */
    cmcer500ApplicationJSONObject?: Cmcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    cmcer502ApplicationJSONObject?: Cmcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    cmcer503ApplicationJSONObject?: Cmcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    cmcer504ApplicationJSONObject?: Cmcer504ApplicationJSON;
}
