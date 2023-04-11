import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TrcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class TrcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Admn No.
     */
    admnNo: string;
    /**
     * Full name
     */
    fullName: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum TrcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class TrcerRequestBody extends SpeakeasyBase {
    certificateParameters?: TrcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: TrcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Trcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Trcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Trcer504ApplicationJSON extends SpeakeasyBase {
    error?: Trcer504ApplicationJSONErrorEnum;
    errorDescription?: Trcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Trcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Trcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Trcer503ApplicationJSON extends SpeakeasyBase {
    error?: Trcer503ApplicationJSONErrorEnum;
    errorDescription?: Trcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Trcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Trcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Trcer502ApplicationJSON extends SpeakeasyBase {
    error?: Trcer502ApplicationJSONErrorEnum;
    errorDescription?: Trcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Trcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Trcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Trcer500ApplicationJSON extends SpeakeasyBase {
    error?: Trcer500ApplicationJSONErrorEnum;
    errorDescription?: Trcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Trcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Trcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Trcer404ApplicationJSON extends SpeakeasyBase {
    error?: Trcer404ApplicationJSONErrorEnum;
    errorDescription?: Trcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Trcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Trcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Trcer401ApplicationJSON extends SpeakeasyBase {
    error?: Trcer401ApplicationJSONErrorEnum;
    errorDescription?: Trcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Trcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Trcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Trcer400ApplicationJSON extends SpeakeasyBase {
    error?: Trcer400ApplicationJSONErrorEnum;
    errorDescription?: Trcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class TrcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    trcer400ApplicationJSONObject?: Trcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    trcer401ApplicationJSONObject?: Trcer401ApplicationJSON;
    /**
     * No record found
     */
    trcer404ApplicationJSONObject?: Trcer404ApplicationJSON;
    /**
     * Internal server error
     */
    trcer500ApplicationJSONObject?: Trcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    trcer502ApplicationJSONObject?: Trcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    trcer503ApplicationJSONObject?: Trcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    trcer504ApplicationJSONObject?: Trcer504ApplicationJSON;
}
