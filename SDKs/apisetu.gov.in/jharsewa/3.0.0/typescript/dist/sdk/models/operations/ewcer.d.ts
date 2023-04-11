import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EwcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class EwcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Application Reference Number
     */
    refNo: string;
    /**
     * Certificate Token Number
     */
    tokenNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum EwcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class EwcerRequestBody extends SpeakeasyBase {
    certificateParameters?: EwcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: EwcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Ewcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ewcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Ewcer504ApplicationJSON extends SpeakeasyBase {
    error?: Ewcer504ApplicationJSONErrorEnum;
    errorDescription?: Ewcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ewcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ewcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Ewcer503ApplicationJSON extends SpeakeasyBase {
    error?: Ewcer503ApplicationJSONErrorEnum;
    errorDescription?: Ewcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ewcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ewcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Ewcer502ApplicationJSON extends SpeakeasyBase {
    error?: Ewcer502ApplicationJSONErrorEnum;
    errorDescription?: Ewcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ewcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ewcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Ewcer500ApplicationJSON extends SpeakeasyBase {
    error?: Ewcer500ApplicationJSONErrorEnum;
    errorDescription?: Ewcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ewcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ewcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Ewcer404ApplicationJSON extends SpeakeasyBase {
    error?: Ewcer404ApplicationJSONErrorEnum;
    errorDescription?: Ewcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ewcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ewcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Ewcer401ApplicationJSON extends SpeakeasyBase {
    error?: Ewcer401ApplicationJSONErrorEnum;
    errorDescription?: Ewcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ewcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ewcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Ewcer400ApplicationJSON extends SpeakeasyBase {
    error?: Ewcer400ApplicationJSONErrorEnum;
    errorDescription?: Ewcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class EwcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    ewcer400ApplicationJSONObject?: Ewcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    ewcer401ApplicationJSONObject?: Ewcer401ApplicationJSON;
    /**
     * No record found
     */
    ewcer404ApplicationJSONObject?: Ewcer404ApplicationJSON;
    /**
     * Internal server error
     */
    ewcer500ApplicationJSONObject?: Ewcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    ewcer502ApplicationJSONObject?: Ewcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    ewcer503ApplicationJSONObject?: Ewcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    ewcer504ApplicationJSONObject?: Ewcer504ApplicationJSON;
}
