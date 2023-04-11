import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CtcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class CtcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Aadhaar number
     */
    uid: string;
    /**
     * ApplicationReferenceNo
     */
    refno: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum CtcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class CtcerRequestBody extends SpeakeasyBase {
    certificateParameters?: CtcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: CtcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Ctcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ctcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Ctcer504ApplicationJSON extends SpeakeasyBase {
    error?: Ctcer504ApplicationJSONErrorEnum;
    errorDescription?: Ctcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ctcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ctcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Ctcer503ApplicationJSON extends SpeakeasyBase {
    error?: Ctcer503ApplicationJSONErrorEnum;
    errorDescription?: Ctcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ctcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ctcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Ctcer502ApplicationJSON extends SpeakeasyBase {
    error?: Ctcer502ApplicationJSONErrorEnum;
    errorDescription?: Ctcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ctcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ctcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Ctcer500ApplicationJSON extends SpeakeasyBase {
    error?: Ctcer500ApplicationJSONErrorEnum;
    errorDescription?: Ctcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ctcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ctcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Ctcer404ApplicationJSON extends SpeakeasyBase {
    error?: Ctcer404ApplicationJSONErrorEnum;
    errorDescription?: Ctcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ctcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ctcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Ctcer401ApplicationJSON extends SpeakeasyBase {
    error?: Ctcer401ApplicationJSONErrorEnum;
    errorDescription?: Ctcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ctcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ctcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Ctcer400ApplicationJSON extends SpeakeasyBase {
    error?: Ctcer400ApplicationJSONErrorEnum;
    errorDescription?: Ctcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class CtcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    ctcer400ApplicationJSONObject?: Ctcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    ctcer401ApplicationJSONObject?: Ctcer401ApplicationJSON;
    /**
     * No record found
     */
    ctcer404ApplicationJSONObject?: Ctcer404ApplicationJSON;
    /**
     * Internal server error
     */
    ctcer500ApplicationJSONObject?: Ctcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    ctcer502ApplicationJSONObject?: Ctcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    ctcer503ApplicationJSONObject?: Ctcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    ctcer504ApplicationJSONObject?: Ctcer504ApplicationJSON;
}
