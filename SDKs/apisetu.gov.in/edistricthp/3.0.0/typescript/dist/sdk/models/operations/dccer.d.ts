import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DccerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class DccerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * ApplicationNumber
     */
    udf1: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum DccerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class DccerRequestBody extends SpeakeasyBase {
    certificateParameters?: DccerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: DccerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Dccer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Dccer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Dccer504ApplicationJSON extends SpeakeasyBase {
    error?: Dccer504ApplicationJSONErrorEnum;
    errorDescription?: Dccer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dccer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Dccer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Dccer503ApplicationJSON extends SpeakeasyBase {
    error?: Dccer503ApplicationJSONErrorEnum;
    errorDescription?: Dccer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dccer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Dccer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Dccer502ApplicationJSON extends SpeakeasyBase {
    error?: Dccer502ApplicationJSONErrorEnum;
    errorDescription?: Dccer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dccer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Dccer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Dccer500ApplicationJSON extends SpeakeasyBase {
    error?: Dccer500ApplicationJSONErrorEnum;
    errorDescription?: Dccer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dccer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Dccer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Dccer404ApplicationJSON extends SpeakeasyBase {
    error?: Dccer404ApplicationJSONErrorEnum;
    errorDescription?: Dccer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dccer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Dccer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Dccer401ApplicationJSON extends SpeakeasyBase {
    error?: Dccer401ApplicationJSONErrorEnum;
    errorDescription?: Dccer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dccer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Dccer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Dccer400ApplicationJSON extends SpeakeasyBase {
    error?: Dccer400ApplicationJSONErrorEnum;
    errorDescription?: Dccer400ApplicationJSONErrorDescriptionEnum;
}
export declare class DccerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    dccer400ApplicationJSONObject?: Dccer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    dccer401ApplicationJSONObject?: Dccer401ApplicationJSON;
    /**
     * No record found
     */
    dccer404ApplicationJSONObject?: Dccer404ApplicationJSON;
    /**
     * Internal server error
     */
    dccer500ApplicationJSONObject?: Dccer500ApplicationJSON;
    /**
     * Bad gateway
     */
    dccer502ApplicationJSONObject?: Dccer502ApplicationJSON;
    /**
     * Service unavailable
     */
    dccer503ApplicationJSONObject?: Dccer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    dccer504ApplicationJSONObject?: Dccer504ApplicationJSON;
}
