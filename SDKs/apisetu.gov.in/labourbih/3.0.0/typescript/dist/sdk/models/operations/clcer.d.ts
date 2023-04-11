import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ClcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class ClcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Reference No.
     */
    refNo: string;
    /**
     * Token ID
     */
    tokenNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum ClcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class ClcerRequestBody extends SpeakeasyBase {
    certificateParameters?: ClcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: ClcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Clcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Clcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Clcer504ApplicationJSON extends SpeakeasyBase {
    error?: Clcer504ApplicationJSONErrorEnum;
    errorDescription?: Clcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Clcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Clcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Clcer503ApplicationJSON extends SpeakeasyBase {
    error?: Clcer503ApplicationJSONErrorEnum;
    errorDescription?: Clcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Clcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Clcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Clcer502ApplicationJSON extends SpeakeasyBase {
    error?: Clcer502ApplicationJSONErrorEnum;
    errorDescription?: Clcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Clcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Clcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Clcer500ApplicationJSON extends SpeakeasyBase {
    error?: Clcer500ApplicationJSONErrorEnum;
    errorDescription?: Clcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Clcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Clcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Clcer404ApplicationJSON extends SpeakeasyBase {
    error?: Clcer404ApplicationJSONErrorEnum;
    errorDescription?: Clcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Clcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Clcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Clcer401ApplicationJSON extends SpeakeasyBase {
    error?: Clcer401ApplicationJSONErrorEnum;
    errorDescription?: Clcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Clcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Clcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Clcer400ApplicationJSON extends SpeakeasyBase {
    error?: Clcer400ApplicationJSONErrorEnum;
    errorDescription?: Clcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class ClcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    clcer400ApplicationJSONObject?: Clcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    clcer401ApplicationJSONObject?: Clcer401ApplicationJSON;
    /**
     * No record found
     */
    clcer404ApplicationJSONObject?: Clcer404ApplicationJSON;
    /**
     * Internal server error
     */
    clcer500ApplicationJSONObject?: Clcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    clcer502ApplicationJSONObject?: Clcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    clcer503ApplicationJSONObject?: Clcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    clcer504ApplicationJSONObject?: Clcer504ApplicationJSON;
}
