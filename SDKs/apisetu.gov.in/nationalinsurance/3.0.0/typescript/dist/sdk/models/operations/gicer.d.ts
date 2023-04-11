import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GicerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class GicerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Customer No
     */
    customerId: string;
    /**
     * Policy Number
     */
    policyNumber: string;
    /**
     * Policy Start Date
     */
    policyStartDate: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum GicerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class GicerRequestBody extends SpeakeasyBase {
    certificateParameters?: GicerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: GicerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Gicer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Gicer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Gicer504ApplicationJSON extends SpeakeasyBase {
    error?: Gicer504ApplicationJSONErrorEnum;
    errorDescription?: Gicer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Gicer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Gicer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Gicer503ApplicationJSON extends SpeakeasyBase {
    error?: Gicer503ApplicationJSONErrorEnum;
    errorDescription?: Gicer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Gicer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Gicer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Gicer502ApplicationJSON extends SpeakeasyBase {
    error?: Gicer502ApplicationJSONErrorEnum;
    errorDescription?: Gicer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Gicer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Gicer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Gicer500ApplicationJSON extends SpeakeasyBase {
    error?: Gicer500ApplicationJSONErrorEnum;
    errorDescription?: Gicer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Gicer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Gicer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Gicer404ApplicationJSON extends SpeakeasyBase {
    error?: Gicer404ApplicationJSONErrorEnum;
    errorDescription?: Gicer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Gicer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Gicer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Gicer401ApplicationJSON extends SpeakeasyBase {
    error?: Gicer401ApplicationJSONErrorEnum;
    errorDescription?: Gicer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Gicer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Gicer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Gicer400ApplicationJSON extends SpeakeasyBase {
    error?: Gicer400ApplicationJSONErrorEnum;
    errorDescription?: Gicer400ApplicationJSONErrorDescriptionEnum;
}
export declare class GicerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    gicer400ApplicationJSONObject?: Gicer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    gicer401ApplicationJSONObject?: Gicer401ApplicationJSON;
    /**
     * No record found
     */
    gicer404ApplicationJSONObject?: Gicer404ApplicationJSON;
    /**
     * Internal server error
     */
    gicer500ApplicationJSONObject?: Gicer500ApplicationJSON;
    /**
     * Bad gateway
     */
    gicer502ApplicationJSONObject?: Gicer502ApplicationJSON;
    /**
     * Service unavailable
     */
    gicer503ApplicationJSONObject?: Gicer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    gicer504ApplicationJSONObject?: Gicer504ApplicationJSON;
}
