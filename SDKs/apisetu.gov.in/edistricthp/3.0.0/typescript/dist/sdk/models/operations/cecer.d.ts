import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CecerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class CecerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * ApplicationNumber
     */
    udf1: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum CecerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class CecerRequestBody extends SpeakeasyBase {
    certificateParameters?: CecerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: CecerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Cecer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Cecer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Cecer504ApplicationJSON extends SpeakeasyBase {
    error?: Cecer504ApplicationJSONErrorEnum;
    errorDescription?: Cecer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cecer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Cecer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Cecer503ApplicationJSON extends SpeakeasyBase {
    error?: Cecer503ApplicationJSONErrorEnum;
    errorDescription?: Cecer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cecer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Cecer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Cecer502ApplicationJSON extends SpeakeasyBase {
    error?: Cecer502ApplicationJSONErrorEnum;
    errorDescription?: Cecer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cecer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Cecer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Cecer500ApplicationJSON extends SpeakeasyBase {
    error?: Cecer500ApplicationJSONErrorEnum;
    errorDescription?: Cecer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cecer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Cecer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Cecer404ApplicationJSON extends SpeakeasyBase {
    error?: Cecer404ApplicationJSONErrorEnum;
    errorDescription?: Cecer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cecer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Cecer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Cecer401ApplicationJSON extends SpeakeasyBase {
    error?: Cecer401ApplicationJSONErrorEnum;
    errorDescription?: Cecer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cecer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Cecer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Cecer400ApplicationJSON extends SpeakeasyBase {
    error?: Cecer400ApplicationJSONErrorEnum;
    errorDescription?: Cecer400ApplicationJSONErrorDescriptionEnum;
}
export declare class CecerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    cecer400ApplicationJSONObject?: Cecer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    cecer401ApplicationJSONObject?: Cecer401ApplicationJSON;
    /**
     * No record found
     */
    cecer404ApplicationJSONObject?: Cecer404ApplicationJSON;
    /**
     * Internal server error
     */
    cecer500ApplicationJSONObject?: Cecer500ApplicationJSON;
    /**
     * Bad gateway
     */
    cecer502ApplicationJSONObject?: Cecer502ApplicationJSON;
    /**
     * Service unavailable
     */
    cecer503ApplicationJSONObject?: Cecer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    cecer504ApplicationJSONObject?: Cecer504ApplicationJSON;
}
