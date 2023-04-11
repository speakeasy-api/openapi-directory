import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class KecerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class KecerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Document Number
     */
    documentNumber: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum KecerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class KecerRequestBody extends SpeakeasyBase {
    certificateParameters?: KecerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: KecerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Kecer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Kecer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Kecer504ApplicationJSON extends SpeakeasyBase {
    error?: Kecer504ApplicationJSONErrorEnum;
    errorDescription?: Kecer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Kecer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Kecer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Kecer503ApplicationJSON extends SpeakeasyBase {
    error?: Kecer503ApplicationJSONErrorEnum;
    errorDescription?: Kecer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Kecer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Kecer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Kecer502ApplicationJSON extends SpeakeasyBase {
    error?: Kecer502ApplicationJSONErrorEnum;
    errorDescription?: Kecer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Kecer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Kecer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Kecer500ApplicationJSON extends SpeakeasyBase {
    error?: Kecer500ApplicationJSONErrorEnum;
    errorDescription?: Kecer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Kecer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Kecer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Kecer404ApplicationJSON extends SpeakeasyBase {
    error?: Kecer404ApplicationJSONErrorEnum;
    errorDescription?: Kecer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Kecer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Kecer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Kecer401ApplicationJSON extends SpeakeasyBase {
    error?: Kecer401ApplicationJSONErrorEnum;
    errorDescription?: Kecer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Kecer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Kecer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Kecer400ApplicationJSON extends SpeakeasyBase {
    error?: Kecer400ApplicationJSONErrorEnum;
    errorDescription?: Kecer400ApplicationJSONErrorDescriptionEnum;
}
export declare class KecerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    kecer400ApplicationJSONObject?: Kecer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    kecer401ApplicationJSONObject?: Kecer401ApplicationJSON;
    /**
     * No record found
     */
    kecer404ApplicationJSONObject?: Kecer404ApplicationJSON;
    /**
     * Internal server error
     */
    kecer500ApplicationJSONObject?: Kecer500ApplicationJSON;
    /**
     * Bad gateway
     */
    kecer502ApplicationJSONObject?: Kecer502ApplicationJSON;
    /**
     * Service unavailable
     */
    kecer503ApplicationJSONObject?: Kecer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    kecer504ApplicationJSONObject?: Kecer504ApplicationJSON;
}
