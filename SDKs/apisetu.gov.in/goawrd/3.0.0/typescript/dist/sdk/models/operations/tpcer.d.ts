import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TpcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class TpcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Registration No
     */
    registration: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum TpcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class TpcerRequestBody extends SpeakeasyBase {
    certificateParameters?: TpcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: TpcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Tpcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Tpcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Tpcer504ApplicationJSON extends SpeakeasyBase {
    error?: Tpcer504ApplicationJSONErrorEnum;
    errorDescription?: Tpcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tpcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Tpcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Tpcer503ApplicationJSON extends SpeakeasyBase {
    error?: Tpcer503ApplicationJSONErrorEnum;
    errorDescription?: Tpcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tpcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Tpcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Tpcer502ApplicationJSON extends SpeakeasyBase {
    error?: Tpcer502ApplicationJSONErrorEnum;
    errorDescription?: Tpcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tpcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Tpcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Tpcer500ApplicationJSON extends SpeakeasyBase {
    error?: Tpcer500ApplicationJSONErrorEnum;
    errorDescription?: Tpcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tpcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Tpcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Tpcer404ApplicationJSON extends SpeakeasyBase {
    error?: Tpcer404ApplicationJSONErrorEnum;
    errorDescription?: Tpcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tpcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Tpcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Tpcer401ApplicationJSON extends SpeakeasyBase {
    error?: Tpcer401ApplicationJSONErrorEnum;
    errorDescription?: Tpcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tpcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Tpcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Tpcer400ApplicationJSON extends SpeakeasyBase {
    error?: Tpcer400ApplicationJSONErrorEnum;
    errorDescription?: Tpcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class TpcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    tpcer400ApplicationJSONObject?: Tpcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    tpcer401ApplicationJSONObject?: Tpcer401ApplicationJSON;
    /**
     * No record found
     */
    tpcer404ApplicationJSONObject?: Tpcer404ApplicationJSON;
    /**
     * Internal server error
     */
    tpcer500ApplicationJSONObject?: Tpcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    tpcer502ApplicationJSONObject?: Tpcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    tpcer503ApplicationJSONObject?: Tpcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    tpcer504ApplicationJSONObject?: Tpcer504ApplicationJSON;
}
