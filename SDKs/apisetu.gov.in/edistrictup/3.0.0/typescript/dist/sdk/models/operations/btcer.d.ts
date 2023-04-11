import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BtcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class BtcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * ApplicationNo
     */
    applicationNo: string;
    /**
     * CertificateID
     */
    certificateID: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum BtcerRequestBodyFormatEnum {
    Xml = "xml",
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class BtcerRequestBody extends SpeakeasyBase {
    certificateParameters?: BtcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: BtcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Btcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Btcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Btcer504ApplicationJSON extends SpeakeasyBase {
    error?: Btcer504ApplicationJSONErrorEnum;
    errorDescription?: Btcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Btcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Btcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Btcer503ApplicationJSON extends SpeakeasyBase {
    error?: Btcer503ApplicationJSONErrorEnum;
    errorDescription?: Btcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Btcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Btcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Btcer502ApplicationJSON extends SpeakeasyBase {
    error?: Btcer502ApplicationJSONErrorEnum;
    errorDescription?: Btcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Btcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Btcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Btcer500ApplicationJSON extends SpeakeasyBase {
    error?: Btcer500ApplicationJSONErrorEnum;
    errorDescription?: Btcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Btcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Btcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Btcer404ApplicationJSON extends SpeakeasyBase {
    error?: Btcer404ApplicationJSONErrorEnum;
    errorDescription?: Btcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Btcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Btcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Btcer401ApplicationJSON extends SpeakeasyBase {
    error?: Btcer401ApplicationJSONErrorEnum;
    errorDescription?: Btcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Btcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Btcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Btcer400ApplicationJSON extends SpeakeasyBase {
    error?: Btcer400ApplicationJSONErrorEnum;
    errorDescription?: Btcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class BtcerResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    btcer400ApplicationJSONObject?: Btcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    btcer401ApplicationJSONObject?: Btcer401ApplicationJSON;
    /**
     * No record found
     */
    btcer404ApplicationJSONObject?: Btcer404ApplicationJSON;
    /**
     * Internal server error
     */
    btcer500ApplicationJSONObject?: Btcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    btcer502ApplicationJSONObject?: Btcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    btcer503ApplicationJSONObject?: Btcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    btcer504ApplicationJSONObject?: Btcer504ApplicationJSON;
}
