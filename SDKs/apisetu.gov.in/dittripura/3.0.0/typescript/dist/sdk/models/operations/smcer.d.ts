import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SmcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class SmcerRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum SmcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class SmcerRequestBody extends SpeakeasyBase {
    certificateParameters?: SmcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: SmcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Smcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Smcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Smcer504ApplicationJSON extends SpeakeasyBase {
    error?: Smcer504ApplicationJSONErrorEnum;
    errorDescription?: Smcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Smcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Smcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Smcer503ApplicationJSON extends SpeakeasyBase {
    error?: Smcer503ApplicationJSONErrorEnum;
    errorDescription?: Smcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Smcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Smcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Smcer502ApplicationJSON extends SpeakeasyBase {
    error?: Smcer502ApplicationJSONErrorEnum;
    errorDescription?: Smcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Smcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Smcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Smcer500ApplicationJSON extends SpeakeasyBase {
    error?: Smcer500ApplicationJSONErrorEnum;
    errorDescription?: Smcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Smcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Smcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Smcer404ApplicationJSON extends SpeakeasyBase {
    error?: Smcer404ApplicationJSONErrorEnum;
    errorDescription?: Smcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Smcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Smcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Smcer401ApplicationJSON extends SpeakeasyBase {
    error?: Smcer401ApplicationJSONErrorEnum;
    errorDescription?: Smcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Smcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Smcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Smcer400ApplicationJSON extends SpeakeasyBase {
    error?: Smcer400ApplicationJSONErrorEnum;
    errorDescription?: Smcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class SmcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    smcer400ApplicationJSONObject?: Smcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    smcer401ApplicationJSONObject?: Smcer401ApplicationJSON;
    /**
     * No record found
     */
    smcer404ApplicationJSONObject?: Smcer404ApplicationJSON;
    /**
     * Internal server error
     */
    smcer500ApplicationJSONObject?: Smcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    smcer502ApplicationJSONObject?: Smcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    smcer503ApplicationJSONObject?: Smcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    smcer504ApplicationJSONObject?: Smcer504ApplicationJSON;
}
