import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ShcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class ShcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Reference No.
     */
    refNo: string;
    /**
     * Token No.
     */
    tokenNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum ShcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class ShcerRequestBody extends SpeakeasyBase {
    certificateParameters?: ShcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: ShcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Shcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Shcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Shcer504ApplicationJSON extends SpeakeasyBase {
    error?: Shcer504ApplicationJSONErrorEnum;
    errorDescription?: Shcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Shcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Shcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Shcer503ApplicationJSON extends SpeakeasyBase {
    error?: Shcer503ApplicationJSONErrorEnum;
    errorDescription?: Shcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Shcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Shcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Shcer502ApplicationJSON extends SpeakeasyBase {
    error?: Shcer502ApplicationJSONErrorEnum;
    errorDescription?: Shcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Shcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Shcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Shcer500ApplicationJSON extends SpeakeasyBase {
    error?: Shcer500ApplicationJSONErrorEnum;
    errorDescription?: Shcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Shcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Shcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Shcer404ApplicationJSON extends SpeakeasyBase {
    error?: Shcer404ApplicationJSONErrorEnum;
    errorDescription?: Shcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Shcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Shcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Shcer401ApplicationJSON extends SpeakeasyBase {
    error?: Shcer401ApplicationJSONErrorEnum;
    errorDescription?: Shcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Shcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Shcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Shcer400ApplicationJSON extends SpeakeasyBase {
    error?: Shcer400ApplicationJSONErrorEnum;
    errorDescription?: Shcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class ShcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    shcer400ApplicationJSONObject?: Shcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    shcer401ApplicationJSONObject?: Shcer401ApplicationJSON;
    /**
     * No record found
     */
    shcer404ApplicationJSONObject?: Shcer404ApplicationJSON;
    /**
     * Internal server error
     */
    shcer500ApplicationJSONObject?: Shcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    shcer502ApplicationJSONObject?: Shcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    shcer503ApplicationJSONObject?: Shcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    shcer504ApplicationJSONObject?: Shcer504ApplicationJSON;
}
