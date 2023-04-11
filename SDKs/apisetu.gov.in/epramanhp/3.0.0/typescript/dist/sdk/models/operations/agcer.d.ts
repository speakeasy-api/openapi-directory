import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AgcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class AgcerRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum AgcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class AgcerRequestBody extends SpeakeasyBase {
    certificateParameters?: AgcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: AgcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Agcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Agcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Agcer504ApplicationJSON extends SpeakeasyBase {
    error?: Agcer504ApplicationJSONErrorEnum;
    errorDescription?: Agcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Agcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Agcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Agcer503ApplicationJSON extends SpeakeasyBase {
    error?: Agcer503ApplicationJSONErrorEnum;
    errorDescription?: Agcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Agcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Agcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Agcer502ApplicationJSON extends SpeakeasyBase {
    error?: Agcer502ApplicationJSONErrorEnum;
    errorDescription?: Agcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Agcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Agcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Agcer500ApplicationJSON extends SpeakeasyBase {
    error?: Agcer500ApplicationJSONErrorEnum;
    errorDescription?: Agcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Agcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Agcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Agcer404ApplicationJSON extends SpeakeasyBase {
    error?: Agcer404ApplicationJSONErrorEnum;
    errorDescription?: Agcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Agcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Agcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Agcer401ApplicationJSON extends SpeakeasyBase {
    error?: Agcer401ApplicationJSONErrorEnum;
    errorDescription?: Agcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Agcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Agcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Agcer400ApplicationJSON extends SpeakeasyBase {
    error?: Agcer400ApplicationJSONErrorEnum;
    errorDescription?: Agcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class AgcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    agcer400ApplicationJSONObject?: Agcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    agcer401ApplicationJSONObject?: Agcer401ApplicationJSON;
    /**
     * No record found
     */
    agcer404ApplicationJSONObject?: Agcer404ApplicationJSON;
    /**
     * Internal server error
     */
    agcer500ApplicationJSONObject?: Agcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    agcer502ApplicationJSONObject?: Agcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    agcer503ApplicationJSONObject?: Agcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    agcer504ApplicationJSONObject?: Agcer504ApplicationJSON;
}
