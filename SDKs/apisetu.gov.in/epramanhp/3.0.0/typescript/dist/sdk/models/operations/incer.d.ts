import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IncerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class IncerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Applicant Name
     */
    name: string;
    /**
     * Certificate Id
     */
    refNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum IncerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class IncerRequestBody extends SpeakeasyBase {
    certificateParameters?: IncerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: IncerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Incer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Incer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Incer504ApplicationJSON extends SpeakeasyBase {
    error?: Incer504ApplicationJSONErrorEnum;
    errorDescription?: Incer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Incer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Incer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Incer503ApplicationJSON extends SpeakeasyBase {
    error?: Incer503ApplicationJSONErrorEnum;
    errorDescription?: Incer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Incer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Incer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Incer502ApplicationJSON extends SpeakeasyBase {
    error?: Incer502ApplicationJSONErrorEnum;
    errorDescription?: Incer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Incer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Incer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Incer500ApplicationJSON extends SpeakeasyBase {
    error?: Incer500ApplicationJSONErrorEnum;
    errorDescription?: Incer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Incer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Incer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Incer404ApplicationJSON extends SpeakeasyBase {
    error?: Incer404ApplicationJSONErrorEnum;
    errorDescription?: Incer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Incer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Incer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Incer401ApplicationJSON extends SpeakeasyBase {
    error?: Incer401ApplicationJSONErrorEnum;
    errorDescription?: Incer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Incer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Incer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Incer400ApplicationJSON extends SpeakeasyBase {
    error?: Incer400ApplicationJSONErrorEnum;
    errorDescription?: Incer400ApplicationJSONErrorDescriptionEnum;
}
export declare class IncerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    incer400ApplicationJSONObject?: Incer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    incer401ApplicationJSONObject?: Incer401ApplicationJSON;
    /**
     * No record found
     */
    incer404ApplicationJSONObject?: Incer404ApplicationJSON;
    /**
     * Internal server error
     */
    incer500ApplicationJSONObject?: Incer500ApplicationJSON;
    /**
     * Bad gateway
     */
    incer502ApplicationJSONObject?: Incer502ApplicationJSON;
    /**
     * Service unavailable
     */
    incer503ApplicationJSONObject?: Incer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    incer504ApplicationJSONObject?: Incer504ApplicationJSON;
}
