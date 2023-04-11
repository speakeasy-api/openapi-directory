import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CncerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class CncerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Document Number
     */
    documentNumber: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum CncerRequestBodyFormatEnum {
    Xml = "xml",
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class CncerRequestBody extends SpeakeasyBase {
    certificateParameters?: CncerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: CncerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Cncer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Cncer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Cncer504ApplicationJSON extends SpeakeasyBase {
    error?: Cncer504ApplicationJSONErrorEnum;
    errorDescription?: Cncer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cncer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Cncer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Cncer503ApplicationJSON extends SpeakeasyBase {
    error?: Cncer503ApplicationJSONErrorEnum;
    errorDescription?: Cncer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cncer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Cncer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Cncer502ApplicationJSON extends SpeakeasyBase {
    error?: Cncer502ApplicationJSONErrorEnum;
    errorDescription?: Cncer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cncer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Cncer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Cncer500ApplicationJSON extends SpeakeasyBase {
    error?: Cncer500ApplicationJSONErrorEnum;
    errorDescription?: Cncer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cncer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Cncer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Cncer404ApplicationJSON extends SpeakeasyBase {
    error?: Cncer404ApplicationJSONErrorEnum;
    errorDescription?: Cncer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cncer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Cncer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Cncer401ApplicationJSON extends SpeakeasyBase {
    error?: Cncer401ApplicationJSONErrorEnum;
    errorDescription?: Cncer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cncer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Cncer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Cncer400ApplicationJSON extends SpeakeasyBase {
    error?: Cncer400ApplicationJSONErrorEnum;
    errorDescription?: Cncer400ApplicationJSONErrorDescriptionEnum;
}
export declare class CncerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    cncer400ApplicationJSONObject?: Cncer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    cncer401ApplicationJSONObject?: Cncer401ApplicationJSON;
    /**
     * No record found
     */
    cncer404ApplicationJSONObject?: Cncer404ApplicationJSON;
    /**
     * Internal server error
     */
    cncer500ApplicationJSONObject?: Cncer500ApplicationJSON;
    /**
     * Bad gateway
     */
    cncer502ApplicationJSONObject?: Cncer502ApplicationJSON;
    /**
     * Service unavailable
     */
    cncer503ApplicationJSONObject?: Cncer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    cncer504ApplicationJSONObject?: Cncer504ApplicationJSON;
}
