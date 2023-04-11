import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MpkbySecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class MpkbyRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum MpkbyRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class MpkbyRequestBody extends SpeakeasyBase {
    certificateParameters?: MpkbyRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: MpkbyRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Mpkby504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Mpkby504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Mpkby504ApplicationJSON extends SpeakeasyBase {
    error?: Mpkby504ApplicationJSONErrorEnum;
    errorDescription?: Mpkby504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mpkby503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Mpkby503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Mpkby503ApplicationJSON extends SpeakeasyBase {
    error?: Mpkby503ApplicationJSONErrorEnum;
    errorDescription?: Mpkby503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mpkby502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Mpkby502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Mpkby502ApplicationJSON extends SpeakeasyBase {
    error?: Mpkby502ApplicationJSONErrorEnum;
    errorDescription?: Mpkby502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mpkby500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Mpkby500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Mpkby500ApplicationJSON extends SpeakeasyBase {
    error?: Mpkby500ApplicationJSONErrorEnum;
    errorDescription?: Mpkby500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mpkby404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Mpkby404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Mpkby404ApplicationJSON extends SpeakeasyBase {
    error?: Mpkby404ApplicationJSONErrorEnum;
    errorDescription?: Mpkby404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mpkby401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Mpkby401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Mpkby401ApplicationJSON extends SpeakeasyBase {
    error?: Mpkby401ApplicationJSONErrorEnum;
    errorDescription?: Mpkby401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mpkby400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Mpkby400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Mpkby400ApplicationJSON extends SpeakeasyBase {
    error?: Mpkby400ApplicationJSONErrorEnum;
    errorDescription?: Mpkby400ApplicationJSONErrorDescriptionEnum;
}
export declare class MpkbyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    mpkby400ApplicationJSONObject?: Mpkby400ApplicationJSON;
    /**
     * Unauthorized access
     */
    mpkby401ApplicationJSONObject?: Mpkby401ApplicationJSON;
    /**
     * No record found
     */
    mpkby404ApplicationJSONObject?: Mpkby404ApplicationJSON;
    /**
     * Internal server error
     */
    mpkby500ApplicationJSONObject?: Mpkby500ApplicationJSON;
    /**
     * Bad gateway
     */
    mpkby502ApplicationJSONObject?: Mpkby502ApplicationJSON;
    /**
     * Service unavailable
     */
    mpkby503ApplicationJSONObject?: Mpkby503ApplicationJSON;
    /**
     * Gateway timeout
     */
    mpkby504ApplicationJSONObject?: Mpkby504ApplicationJSON;
}
