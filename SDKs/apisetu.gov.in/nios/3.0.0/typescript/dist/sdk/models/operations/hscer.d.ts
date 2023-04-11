import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class HscerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class HscerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * ROLL NO
     */
    rroll: string;
    /**
     * YEAR
     */
    year: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum HscerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class HscerRequestBody extends SpeakeasyBase {
    certificateParameters?: HscerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: HscerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Hscer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Hscer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Hscer504ApplicationJSON extends SpeakeasyBase {
    error?: Hscer504ApplicationJSONErrorEnum;
    errorDescription?: Hscer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hscer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Hscer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Hscer503ApplicationJSON extends SpeakeasyBase {
    error?: Hscer503ApplicationJSONErrorEnum;
    errorDescription?: Hscer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hscer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Hscer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Hscer502ApplicationJSON extends SpeakeasyBase {
    error?: Hscer502ApplicationJSONErrorEnum;
    errorDescription?: Hscer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hscer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Hscer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Hscer500ApplicationJSON extends SpeakeasyBase {
    error?: Hscer500ApplicationJSONErrorEnum;
    errorDescription?: Hscer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hscer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Hscer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Hscer404ApplicationJSON extends SpeakeasyBase {
    error?: Hscer404ApplicationJSONErrorEnum;
    errorDescription?: Hscer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hscer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Hscer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Hscer401ApplicationJSON extends SpeakeasyBase {
    error?: Hscer401ApplicationJSONErrorEnum;
    errorDescription?: Hscer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hscer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Hscer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Hscer400ApplicationJSON extends SpeakeasyBase {
    error?: Hscer400ApplicationJSONErrorEnum;
    errorDescription?: Hscer400ApplicationJSONErrorDescriptionEnum;
}
export declare class HscerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    hscer400ApplicationJSONObject?: Hscer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    hscer401ApplicationJSONObject?: Hscer401ApplicationJSON;
    /**
     * No record found
     */
    hscer404ApplicationJSONObject?: Hscer404ApplicationJSON;
    /**
     * Internal server error
     */
    hscer500ApplicationJSONObject?: Hscer500ApplicationJSON;
    /**
     * Bad gateway
     */
    hscer502ApplicationJSONObject?: Hscer502ApplicationJSON;
    /**
     * Service unavailable
     */
    hscer503ApplicationJSONObject?: Hscer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    hscer504ApplicationJSONObject?: Hscer504ApplicationJSON;
}
