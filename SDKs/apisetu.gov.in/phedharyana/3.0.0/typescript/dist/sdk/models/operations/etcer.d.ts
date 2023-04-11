import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EtcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class EtcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Unique Code
     */
    uniqueCode: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum EtcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class EtcerRequestBody extends SpeakeasyBase {
    certificateParameters?: EtcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: EtcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Etcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Etcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Etcer504ApplicationJSON extends SpeakeasyBase {
    error?: Etcer504ApplicationJSONErrorEnum;
    errorDescription?: Etcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Etcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Etcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Etcer503ApplicationJSON extends SpeakeasyBase {
    error?: Etcer503ApplicationJSONErrorEnum;
    errorDescription?: Etcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Etcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Etcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Etcer502ApplicationJSON extends SpeakeasyBase {
    error?: Etcer502ApplicationJSONErrorEnum;
    errorDescription?: Etcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Etcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Etcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Etcer500ApplicationJSON extends SpeakeasyBase {
    error?: Etcer500ApplicationJSONErrorEnum;
    errorDescription?: Etcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Etcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Etcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Etcer404ApplicationJSON extends SpeakeasyBase {
    error?: Etcer404ApplicationJSONErrorEnum;
    errorDescription?: Etcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Etcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Etcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Etcer401ApplicationJSON extends SpeakeasyBase {
    error?: Etcer401ApplicationJSONErrorEnum;
    errorDescription?: Etcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Etcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Etcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Etcer400ApplicationJSON extends SpeakeasyBase {
    error?: Etcer400ApplicationJSONErrorEnum;
    errorDescription?: Etcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class EtcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    etcer400ApplicationJSONObject?: Etcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    etcer401ApplicationJSONObject?: Etcer401ApplicationJSON;
    /**
     * No record found
     */
    etcer404ApplicationJSONObject?: Etcer404ApplicationJSON;
    /**
     * Internal server error
     */
    etcer500ApplicationJSONObject?: Etcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    etcer502ApplicationJSONObject?: Etcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    etcer503ApplicationJSONObject?: Etcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    etcer504ApplicationJSONObject?: Etcer504ApplicationJSON;
}
