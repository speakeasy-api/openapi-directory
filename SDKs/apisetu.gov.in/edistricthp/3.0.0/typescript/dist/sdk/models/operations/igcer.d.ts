import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IgcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class IgcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * ApplicationNumber
     */
    udf1: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum IgcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class IgcerRequestBody extends SpeakeasyBase {
    certificateParameters?: IgcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: IgcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Igcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Igcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Igcer504ApplicationJSON extends SpeakeasyBase {
    error?: Igcer504ApplicationJSONErrorEnum;
    errorDescription?: Igcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Igcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Igcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Igcer503ApplicationJSON extends SpeakeasyBase {
    error?: Igcer503ApplicationJSONErrorEnum;
    errorDescription?: Igcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Igcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Igcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Igcer502ApplicationJSON extends SpeakeasyBase {
    error?: Igcer502ApplicationJSONErrorEnum;
    errorDescription?: Igcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Igcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Igcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Igcer500ApplicationJSON extends SpeakeasyBase {
    error?: Igcer500ApplicationJSONErrorEnum;
    errorDescription?: Igcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Igcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Igcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Igcer404ApplicationJSON extends SpeakeasyBase {
    error?: Igcer404ApplicationJSONErrorEnum;
    errorDescription?: Igcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Igcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Igcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Igcer401ApplicationJSON extends SpeakeasyBase {
    error?: Igcer401ApplicationJSONErrorEnum;
    errorDescription?: Igcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Igcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Igcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Igcer400ApplicationJSON extends SpeakeasyBase {
    error?: Igcer400ApplicationJSONErrorEnum;
    errorDescription?: Igcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class IgcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    igcer400ApplicationJSONObject?: Igcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    igcer401ApplicationJSONObject?: Igcer401ApplicationJSON;
    /**
     * No record found
     */
    igcer404ApplicationJSONObject?: Igcer404ApplicationJSON;
    /**
     * Internal server error
     */
    igcer500ApplicationJSONObject?: Igcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    igcer502ApplicationJSONObject?: Igcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    igcer503ApplicationJSONObject?: Igcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    igcer504ApplicationJSONObject?: Igcer504ApplicationJSON;
}
