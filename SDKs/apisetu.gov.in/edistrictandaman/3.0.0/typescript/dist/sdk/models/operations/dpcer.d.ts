import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DpcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class DpcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Certificate Number
     */
    certificateNumber: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum DpcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class DpcerRequestBody extends SpeakeasyBase {
    certificateParameters?: DpcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: DpcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Dpcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Dpcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Dpcer504ApplicationJSON extends SpeakeasyBase {
    error?: Dpcer504ApplicationJSONErrorEnum;
    errorDescription?: Dpcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dpcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Dpcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Dpcer503ApplicationJSON extends SpeakeasyBase {
    error?: Dpcer503ApplicationJSONErrorEnum;
    errorDescription?: Dpcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dpcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Dpcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Dpcer502ApplicationJSON extends SpeakeasyBase {
    error?: Dpcer502ApplicationJSONErrorEnum;
    errorDescription?: Dpcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dpcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Dpcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Dpcer500ApplicationJSON extends SpeakeasyBase {
    error?: Dpcer500ApplicationJSONErrorEnum;
    errorDescription?: Dpcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dpcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Dpcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Dpcer404ApplicationJSON extends SpeakeasyBase {
    error?: Dpcer404ApplicationJSONErrorEnum;
    errorDescription?: Dpcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dpcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Dpcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Dpcer401ApplicationJSON extends SpeakeasyBase {
    error?: Dpcer401ApplicationJSONErrorEnum;
    errorDescription?: Dpcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dpcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Dpcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Dpcer400ApplicationJSON extends SpeakeasyBase {
    error?: Dpcer400ApplicationJSONErrorEnum;
    errorDescription?: Dpcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class DpcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    dpcer400ApplicationJSONObject?: Dpcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    dpcer401ApplicationJSONObject?: Dpcer401ApplicationJSON;
    /**
     * No record found
     */
    dpcer404ApplicationJSONObject?: Dpcer404ApplicationJSON;
    /**
     * Internal server error
     */
    dpcer500ApplicationJSONObject?: Dpcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    dpcer502ApplicationJSONObject?: Dpcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    dpcer503ApplicationJSONObject?: Dpcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    dpcer504ApplicationJSONObject?: Dpcer504ApplicationJSON;
}
