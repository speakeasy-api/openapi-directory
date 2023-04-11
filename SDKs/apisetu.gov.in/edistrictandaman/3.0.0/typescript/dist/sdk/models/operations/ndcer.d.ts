import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NdcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class NdcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Certificate Number
     */
    certificateNumber: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum NdcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class NdcerRequestBody extends SpeakeasyBase {
    certificateParameters?: NdcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: NdcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Ndcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ndcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Ndcer504ApplicationJSON extends SpeakeasyBase {
    error?: Ndcer504ApplicationJSONErrorEnum;
    errorDescription?: Ndcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ndcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ndcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Ndcer503ApplicationJSON extends SpeakeasyBase {
    error?: Ndcer503ApplicationJSONErrorEnum;
    errorDescription?: Ndcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ndcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ndcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Ndcer502ApplicationJSON extends SpeakeasyBase {
    error?: Ndcer502ApplicationJSONErrorEnum;
    errorDescription?: Ndcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ndcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ndcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Ndcer500ApplicationJSON extends SpeakeasyBase {
    error?: Ndcer500ApplicationJSONErrorEnum;
    errorDescription?: Ndcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ndcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ndcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Ndcer404ApplicationJSON extends SpeakeasyBase {
    error?: Ndcer404ApplicationJSONErrorEnum;
    errorDescription?: Ndcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ndcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ndcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Ndcer401ApplicationJSON extends SpeakeasyBase {
    error?: Ndcer401ApplicationJSONErrorEnum;
    errorDescription?: Ndcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ndcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ndcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Ndcer400ApplicationJSON extends SpeakeasyBase {
    error?: Ndcer400ApplicationJSONErrorEnum;
    errorDescription?: Ndcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class NdcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    ndcer400ApplicationJSONObject?: Ndcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    ndcer401ApplicationJSONObject?: Ndcer401ApplicationJSON;
    /**
     * No record found
     */
    ndcer404ApplicationJSONObject?: Ndcer404ApplicationJSON;
    /**
     * Internal server error
     */
    ndcer500ApplicationJSONObject?: Ndcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    ndcer502ApplicationJSONObject?: Ndcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    ndcer503ApplicationJSONObject?: Ndcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    ndcer504ApplicationJSONObject?: Ndcer504ApplicationJSON;
}
