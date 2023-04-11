import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SicerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class SicerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Name
     */
    name: string;
    /**
     * Consumer ID
     */
    consumerId: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum SicerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class SicerRequestBody extends SpeakeasyBase {
    certificateParameters?: SicerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: SicerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Sicer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Sicer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Sicer504ApplicationJSON extends SpeakeasyBase {
    error?: Sicer504ApplicationJSONErrorEnum;
    errorDescription?: Sicer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sicer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Sicer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Sicer503ApplicationJSON extends SpeakeasyBase {
    error?: Sicer503ApplicationJSONErrorEnum;
    errorDescription?: Sicer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sicer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Sicer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Sicer502ApplicationJSON extends SpeakeasyBase {
    error?: Sicer502ApplicationJSONErrorEnum;
    errorDescription?: Sicer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sicer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Sicer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Sicer500ApplicationJSON extends SpeakeasyBase {
    error?: Sicer500ApplicationJSONErrorEnum;
    errorDescription?: Sicer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sicer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Sicer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Sicer404ApplicationJSON extends SpeakeasyBase {
    error?: Sicer404ApplicationJSONErrorEnum;
    errorDescription?: Sicer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sicer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Sicer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Sicer401ApplicationJSON extends SpeakeasyBase {
    error?: Sicer401ApplicationJSONErrorEnum;
    errorDescription?: Sicer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sicer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Sicer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Sicer400ApplicationJSON extends SpeakeasyBase {
    error?: Sicer400ApplicationJSONErrorEnum;
    errorDescription?: Sicer400ApplicationJSONErrorDescriptionEnum;
}
export declare class SicerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    sicer400ApplicationJSONObject?: Sicer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    sicer401ApplicationJSONObject?: Sicer401ApplicationJSON;
    /**
     * No record found
     */
    sicer404ApplicationJSONObject?: Sicer404ApplicationJSON;
    /**
     * Internal server error
     */
    sicer500ApplicationJSONObject?: Sicer500ApplicationJSON;
    /**
     * Bad gateway
     */
    sicer502ApplicationJSONObject?: Sicer502ApplicationJSON;
    /**
     * Service unavailable
     */
    sicer503ApplicationJSONObject?: Sicer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    sicer504ApplicationJSONObject?: Sicer504ApplicationJSON;
}
