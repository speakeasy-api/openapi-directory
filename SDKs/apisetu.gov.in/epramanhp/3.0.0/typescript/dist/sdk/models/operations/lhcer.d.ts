import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LhcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class LhcerRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum LhcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class LhcerRequestBody extends SpeakeasyBase {
    certificateParameters?: LhcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: LhcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Lhcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Lhcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Lhcer504ApplicationJSON extends SpeakeasyBase {
    error?: Lhcer504ApplicationJSONErrorEnum;
    errorDescription?: Lhcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lhcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Lhcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Lhcer503ApplicationJSON extends SpeakeasyBase {
    error?: Lhcer503ApplicationJSONErrorEnum;
    errorDescription?: Lhcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lhcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Lhcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Lhcer502ApplicationJSON extends SpeakeasyBase {
    error?: Lhcer502ApplicationJSONErrorEnum;
    errorDescription?: Lhcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lhcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Lhcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Lhcer500ApplicationJSON extends SpeakeasyBase {
    error?: Lhcer500ApplicationJSONErrorEnum;
    errorDescription?: Lhcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lhcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Lhcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Lhcer404ApplicationJSON extends SpeakeasyBase {
    error?: Lhcer404ApplicationJSONErrorEnum;
    errorDescription?: Lhcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lhcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Lhcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Lhcer401ApplicationJSON extends SpeakeasyBase {
    error?: Lhcer401ApplicationJSONErrorEnum;
    errorDescription?: Lhcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lhcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Lhcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Lhcer400ApplicationJSON extends SpeakeasyBase {
    error?: Lhcer400ApplicationJSONErrorEnum;
    errorDescription?: Lhcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class LhcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    lhcer400ApplicationJSONObject?: Lhcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    lhcer401ApplicationJSONObject?: Lhcer401ApplicationJSON;
    /**
     * No record found
     */
    lhcer404ApplicationJSONObject?: Lhcer404ApplicationJSON;
    /**
     * Internal server error
     */
    lhcer500ApplicationJSONObject?: Lhcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    lhcer502ApplicationJSONObject?: Lhcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    lhcer503ApplicationJSONObject?: Lhcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    lhcer504ApplicationJSONObject?: Lhcer504ApplicationJSON;
}
