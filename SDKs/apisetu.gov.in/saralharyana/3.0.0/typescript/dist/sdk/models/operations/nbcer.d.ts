import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NbcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class NbcerRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum NbcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class NbcerRequestBody extends SpeakeasyBase {
    certificateParameters?: NbcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: NbcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Nbcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Nbcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Nbcer504ApplicationJSON extends SpeakeasyBase {
    error?: Nbcer504ApplicationJSONErrorEnum;
    errorDescription?: Nbcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nbcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Nbcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Nbcer503ApplicationJSON extends SpeakeasyBase {
    error?: Nbcer503ApplicationJSONErrorEnum;
    errorDescription?: Nbcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nbcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Nbcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Nbcer502ApplicationJSON extends SpeakeasyBase {
    error?: Nbcer502ApplicationJSONErrorEnum;
    errorDescription?: Nbcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nbcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Nbcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Nbcer500ApplicationJSON extends SpeakeasyBase {
    error?: Nbcer500ApplicationJSONErrorEnum;
    errorDescription?: Nbcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nbcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Nbcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Nbcer404ApplicationJSON extends SpeakeasyBase {
    error?: Nbcer404ApplicationJSONErrorEnum;
    errorDescription?: Nbcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nbcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Nbcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Nbcer401ApplicationJSON extends SpeakeasyBase {
    error?: Nbcer401ApplicationJSONErrorEnum;
    errorDescription?: Nbcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nbcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Nbcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Nbcer400ApplicationJSON extends SpeakeasyBase {
    error?: Nbcer400ApplicationJSONErrorEnum;
    errorDescription?: Nbcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class NbcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    nbcer400ApplicationJSONObject?: Nbcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    nbcer401ApplicationJSONObject?: Nbcer401ApplicationJSON;
    /**
     * No record found
     */
    nbcer404ApplicationJSONObject?: Nbcer404ApplicationJSON;
    /**
     * Internal server error
     */
    nbcer500ApplicationJSONObject?: Nbcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    nbcer502ApplicationJSONObject?: Nbcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    nbcer503ApplicationJSONObject?: Nbcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    nbcer504ApplicationJSONObject?: Nbcer504ApplicationJSON;
}
