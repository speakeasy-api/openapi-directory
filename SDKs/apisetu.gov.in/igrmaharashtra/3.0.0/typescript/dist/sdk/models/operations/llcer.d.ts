import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LlcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class LlcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Document SRO
     */
    udf1: string;
    /**
     * Document Number
     */
    udf2: string;
    /**
     * Document Year
     */
    udf3: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum LlcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class LlcerRequestBody extends SpeakeasyBase {
    certificateParameters?: LlcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: LlcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Llcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Llcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Llcer504ApplicationJSON extends SpeakeasyBase {
    error?: Llcer504ApplicationJSONErrorEnum;
    errorDescription?: Llcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Llcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Llcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Llcer503ApplicationJSON extends SpeakeasyBase {
    error?: Llcer503ApplicationJSONErrorEnum;
    errorDescription?: Llcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Llcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Llcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Llcer502ApplicationJSON extends SpeakeasyBase {
    error?: Llcer502ApplicationJSONErrorEnum;
    errorDescription?: Llcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Llcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Llcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Llcer500ApplicationJSON extends SpeakeasyBase {
    error?: Llcer500ApplicationJSONErrorEnum;
    errorDescription?: Llcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Llcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Llcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Llcer404ApplicationJSON extends SpeakeasyBase {
    error?: Llcer404ApplicationJSONErrorEnum;
    errorDescription?: Llcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Llcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Llcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Llcer401ApplicationJSON extends SpeakeasyBase {
    error?: Llcer401ApplicationJSONErrorEnum;
    errorDescription?: Llcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Llcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Llcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Llcer400ApplicationJSON extends SpeakeasyBase {
    error?: Llcer400ApplicationJSONErrorEnum;
    errorDescription?: Llcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class LlcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    llcer400ApplicationJSONObject?: Llcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    llcer401ApplicationJSONObject?: Llcer401ApplicationJSON;
    /**
     * No record found
     */
    llcer404ApplicationJSONObject?: Llcer404ApplicationJSON;
    /**
     * Internal server error
     */
    llcer500ApplicationJSONObject?: Llcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    llcer502ApplicationJSONObject?: Llcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    llcer503ApplicationJSONObject?: Llcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    llcer504ApplicationJSONObject?: Llcer504ApplicationJSON;
}
