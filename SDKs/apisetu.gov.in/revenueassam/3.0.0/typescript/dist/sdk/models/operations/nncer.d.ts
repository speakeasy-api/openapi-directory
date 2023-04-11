import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NncerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class NncerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Application Reference No
     */
    refNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum NncerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class NncerRequestBody extends SpeakeasyBase {
    certificateParameters?: NncerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: NncerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Nncer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Nncer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Nncer504ApplicationJSON extends SpeakeasyBase {
    error?: Nncer504ApplicationJSONErrorEnum;
    errorDescription?: Nncer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nncer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Nncer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Nncer503ApplicationJSON extends SpeakeasyBase {
    error?: Nncer503ApplicationJSONErrorEnum;
    errorDescription?: Nncer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nncer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Nncer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Nncer502ApplicationJSON extends SpeakeasyBase {
    error?: Nncer502ApplicationJSONErrorEnum;
    errorDescription?: Nncer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nncer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Nncer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Nncer500ApplicationJSON extends SpeakeasyBase {
    error?: Nncer500ApplicationJSONErrorEnum;
    errorDescription?: Nncer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nncer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Nncer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Nncer404ApplicationJSON extends SpeakeasyBase {
    error?: Nncer404ApplicationJSONErrorEnum;
    errorDescription?: Nncer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nncer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Nncer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Nncer401ApplicationJSON extends SpeakeasyBase {
    error?: Nncer401ApplicationJSONErrorEnum;
    errorDescription?: Nncer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nncer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Nncer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Nncer400ApplicationJSON extends SpeakeasyBase {
    error?: Nncer400ApplicationJSONErrorEnum;
    errorDescription?: Nncer400ApplicationJSONErrorDescriptionEnum;
}
export declare class NncerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    nncer400ApplicationJSONObject?: Nncer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    nncer401ApplicationJSONObject?: Nncer401ApplicationJSON;
    /**
     * No record found
     */
    nncer404ApplicationJSONObject?: Nncer404ApplicationJSON;
    /**
     * Internal server error
     */
    nncer500ApplicationJSONObject?: Nncer500ApplicationJSON;
    /**
     * Bad gateway
     */
    nncer502ApplicationJSONObject?: Nncer502ApplicationJSON;
    /**
     * Service unavailable
     */
    nncer503ApplicationJSONObject?: Nncer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    nncer504ApplicationJSONObject?: Nncer504ApplicationJSON;
}
