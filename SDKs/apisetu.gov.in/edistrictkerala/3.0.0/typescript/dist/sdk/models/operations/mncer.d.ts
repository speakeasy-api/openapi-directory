import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MncerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class MncerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Application Number
     */
    aplno: string;
    /**
     * Certificate Number
     */
    certno: string;
    /**
     * Security Code
     */
    sccd: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum MncerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class MncerRequestBody extends SpeakeasyBase {
    certificateParameters?: MncerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: MncerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Mncer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Mncer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Mncer504ApplicationJSON extends SpeakeasyBase {
    error?: Mncer504ApplicationJSONErrorEnum;
    errorDescription?: Mncer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mncer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Mncer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Mncer503ApplicationJSON extends SpeakeasyBase {
    error?: Mncer503ApplicationJSONErrorEnum;
    errorDescription?: Mncer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mncer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Mncer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Mncer502ApplicationJSON extends SpeakeasyBase {
    error?: Mncer502ApplicationJSONErrorEnum;
    errorDescription?: Mncer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mncer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Mncer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Mncer500ApplicationJSON extends SpeakeasyBase {
    error?: Mncer500ApplicationJSONErrorEnum;
    errorDescription?: Mncer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mncer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Mncer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Mncer404ApplicationJSON extends SpeakeasyBase {
    error?: Mncer404ApplicationJSONErrorEnum;
    errorDescription?: Mncer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mncer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Mncer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Mncer401ApplicationJSON extends SpeakeasyBase {
    error?: Mncer401ApplicationJSONErrorEnum;
    errorDescription?: Mncer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mncer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Mncer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Mncer400ApplicationJSON extends SpeakeasyBase {
    error?: Mncer400ApplicationJSONErrorEnum;
    errorDescription?: Mncer400ApplicationJSONErrorDescriptionEnum;
}
export declare class MncerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    mncer400ApplicationJSONObject?: Mncer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    mncer401ApplicationJSONObject?: Mncer401ApplicationJSON;
    /**
     * No record found
     */
    mncer404ApplicationJSONObject?: Mncer404ApplicationJSON;
    /**
     * Internal server error
     */
    mncer500ApplicationJSONObject?: Mncer500ApplicationJSON;
    /**
     * Bad gateway
     */
    mncer502ApplicationJSONObject?: Mncer502ApplicationJSON;
    /**
     * Service unavailable
     */
    mncer503ApplicationJSONObject?: Mncer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    mncer504ApplicationJSONObject?: Mncer504ApplicationJSON;
}
