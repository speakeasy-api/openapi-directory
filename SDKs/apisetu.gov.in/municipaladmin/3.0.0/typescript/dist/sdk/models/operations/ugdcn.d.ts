import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UgdcnSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class UgdcnRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * DocumentNumber
     */
    documentNumber: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum UgdcnRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class UgdcnRequestBody extends SpeakeasyBase {
    certificateParameters?: UgdcnRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: UgdcnRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Ugdcn504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ugdcn504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Ugdcn504ApplicationJSON extends SpeakeasyBase {
    error?: Ugdcn504ApplicationJSONErrorEnum;
    errorDescription?: Ugdcn504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ugdcn503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ugdcn503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Ugdcn503ApplicationJSON extends SpeakeasyBase {
    error?: Ugdcn503ApplicationJSONErrorEnum;
    errorDescription?: Ugdcn503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ugdcn502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ugdcn502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Ugdcn502ApplicationJSON extends SpeakeasyBase {
    error?: Ugdcn502ApplicationJSONErrorEnum;
    errorDescription?: Ugdcn502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ugdcn500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ugdcn500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Ugdcn500ApplicationJSON extends SpeakeasyBase {
    error?: Ugdcn500ApplicationJSONErrorEnum;
    errorDescription?: Ugdcn500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ugdcn404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ugdcn404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Ugdcn404ApplicationJSON extends SpeakeasyBase {
    error?: Ugdcn404ApplicationJSONErrorEnum;
    errorDescription?: Ugdcn404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ugdcn401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ugdcn401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Ugdcn401ApplicationJSON extends SpeakeasyBase {
    error?: Ugdcn401ApplicationJSONErrorEnum;
    errorDescription?: Ugdcn401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ugdcn400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ugdcn400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Ugdcn400ApplicationJSON extends SpeakeasyBase {
    error?: Ugdcn400ApplicationJSONErrorEnum;
    errorDescription?: Ugdcn400ApplicationJSONErrorDescriptionEnum;
}
export declare class UgdcnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    ugdcn400ApplicationJSONObject?: Ugdcn400ApplicationJSON;
    /**
     * Unauthorized access
     */
    ugdcn401ApplicationJSONObject?: Ugdcn401ApplicationJSON;
    /**
     * No record found
     */
    ugdcn404ApplicationJSONObject?: Ugdcn404ApplicationJSON;
    /**
     * Internal server error
     */
    ugdcn500ApplicationJSONObject?: Ugdcn500ApplicationJSON;
    /**
     * Bad gateway
     */
    ugdcn502ApplicationJSONObject?: Ugdcn502ApplicationJSON;
    /**
     * Service unavailable
     */
    ugdcn503ApplicationJSONObject?: Ugdcn503ApplicationJSON;
    /**
     * Gateway timeout
     */
    ugdcn504ApplicationJSONObject?: Ugdcn504ApplicationJSON;
}
