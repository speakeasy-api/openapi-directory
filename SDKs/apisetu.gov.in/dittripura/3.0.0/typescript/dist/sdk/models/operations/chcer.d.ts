import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ChcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class ChcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Reference No.
     */
    refNo: string;
    /**
     * Token No.
     */
    tokenNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum ChcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class ChcerRequestBody extends SpeakeasyBase {
    certificateParameters?: ChcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: ChcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Chcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Chcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Chcer504ApplicationJSON extends SpeakeasyBase {
    error?: Chcer504ApplicationJSONErrorEnum;
    errorDescription?: Chcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Chcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Chcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Chcer503ApplicationJSON extends SpeakeasyBase {
    error?: Chcer503ApplicationJSONErrorEnum;
    errorDescription?: Chcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Chcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Chcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Chcer502ApplicationJSON extends SpeakeasyBase {
    error?: Chcer502ApplicationJSONErrorEnum;
    errorDescription?: Chcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Chcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Chcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Chcer500ApplicationJSON extends SpeakeasyBase {
    error?: Chcer500ApplicationJSONErrorEnum;
    errorDescription?: Chcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Chcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Chcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Chcer404ApplicationJSON extends SpeakeasyBase {
    error?: Chcer404ApplicationJSONErrorEnum;
    errorDescription?: Chcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Chcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Chcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Chcer401ApplicationJSON extends SpeakeasyBase {
    error?: Chcer401ApplicationJSONErrorEnum;
    errorDescription?: Chcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Chcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Chcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Chcer400ApplicationJSON extends SpeakeasyBase {
    error?: Chcer400ApplicationJSONErrorEnum;
    errorDescription?: Chcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class ChcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    chcer400ApplicationJSONObject?: Chcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    chcer401ApplicationJSONObject?: Chcer401ApplicationJSON;
    /**
     * No record found
     */
    chcer404ApplicationJSONObject?: Chcer404ApplicationJSON;
    /**
     * Internal server error
     */
    chcer500ApplicationJSONObject?: Chcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    chcer502ApplicationJSONObject?: Chcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    chcer503ApplicationJSONObject?: Chcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    chcer504ApplicationJSONObject?: Chcer504ApplicationJSON;
}
