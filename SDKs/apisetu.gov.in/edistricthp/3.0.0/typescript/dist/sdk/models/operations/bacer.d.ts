import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BacerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class BacerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * ApplicationNumber
     */
    udf1: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum BacerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class BacerRequestBody extends SpeakeasyBase {
    certificateParameters?: BacerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: BacerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Bacer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Bacer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Bacer504ApplicationJSON extends SpeakeasyBase {
    error?: Bacer504ApplicationJSONErrorEnum;
    errorDescription?: Bacer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bacer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Bacer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Bacer503ApplicationJSON extends SpeakeasyBase {
    error?: Bacer503ApplicationJSONErrorEnum;
    errorDescription?: Bacer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bacer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Bacer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Bacer502ApplicationJSON extends SpeakeasyBase {
    error?: Bacer502ApplicationJSONErrorEnum;
    errorDescription?: Bacer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bacer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Bacer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Bacer500ApplicationJSON extends SpeakeasyBase {
    error?: Bacer500ApplicationJSONErrorEnum;
    errorDescription?: Bacer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bacer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Bacer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Bacer404ApplicationJSON extends SpeakeasyBase {
    error?: Bacer404ApplicationJSONErrorEnum;
    errorDescription?: Bacer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bacer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Bacer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Bacer401ApplicationJSON extends SpeakeasyBase {
    error?: Bacer401ApplicationJSONErrorEnum;
    errorDescription?: Bacer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bacer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Bacer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Bacer400ApplicationJSON extends SpeakeasyBase {
    error?: Bacer400ApplicationJSONErrorEnum;
    errorDescription?: Bacer400ApplicationJSONErrorDescriptionEnum;
}
export declare class BacerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    bacer400ApplicationJSONObject?: Bacer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    bacer401ApplicationJSONObject?: Bacer401ApplicationJSON;
    /**
     * No record found
     */
    bacer404ApplicationJSONObject?: Bacer404ApplicationJSON;
    /**
     * Internal server error
     */
    bacer500ApplicationJSONObject?: Bacer500ApplicationJSON;
    /**
     * Bad gateway
     */
    bacer502ApplicationJSONObject?: Bacer502ApplicationJSON;
    /**
     * Service unavailable
     */
    bacer503ApplicationJSONObject?: Bacer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    bacer504ApplicationJSONObject?: Bacer504ApplicationJSON;
}
