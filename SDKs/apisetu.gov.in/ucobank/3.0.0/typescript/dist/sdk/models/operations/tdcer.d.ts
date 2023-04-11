import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TdcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class TdcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Account Number
     */
    custID: string;
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Financial Year
     */
    finYr: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum TdcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class TdcerRequestBody extends SpeakeasyBase {
    certificateParameters?: TdcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: TdcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Tdcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Tdcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Tdcer504ApplicationJSON extends SpeakeasyBase {
    error?: Tdcer504ApplicationJSONErrorEnum;
    errorDescription?: Tdcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tdcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Tdcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Tdcer503ApplicationJSON extends SpeakeasyBase {
    error?: Tdcer503ApplicationJSONErrorEnum;
    errorDescription?: Tdcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tdcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Tdcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Tdcer502ApplicationJSON extends SpeakeasyBase {
    error?: Tdcer502ApplicationJSONErrorEnum;
    errorDescription?: Tdcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tdcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Tdcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Tdcer500ApplicationJSON extends SpeakeasyBase {
    error?: Tdcer500ApplicationJSONErrorEnum;
    errorDescription?: Tdcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tdcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Tdcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Tdcer404ApplicationJSON extends SpeakeasyBase {
    error?: Tdcer404ApplicationJSONErrorEnum;
    errorDescription?: Tdcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tdcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Tdcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Tdcer401ApplicationJSON extends SpeakeasyBase {
    error?: Tdcer401ApplicationJSONErrorEnum;
    errorDescription?: Tdcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tdcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Tdcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Tdcer400ApplicationJSON extends SpeakeasyBase {
    error?: Tdcer400ApplicationJSONErrorEnum;
    errorDescription?: Tdcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class TdcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    tdcer400ApplicationJSONObject?: Tdcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    tdcer401ApplicationJSONObject?: Tdcer401ApplicationJSON;
    /**
     * No record found
     */
    tdcer404ApplicationJSONObject?: Tdcer404ApplicationJSON;
    /**
     * Internal server error
     */
    tdcer500ApplicationJSONObject?: Tdcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    tdcer502ApplicationJSONObject?: Tdcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    tdcer503ApplicationJSONObject?: Tdcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    tdcer504ApplicationJSONObject?: Tdcer504ApplicationJSON;
}
