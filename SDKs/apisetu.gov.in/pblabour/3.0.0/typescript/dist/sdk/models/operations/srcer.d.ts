import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SrcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class SrcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Aadhaar number
     */
    uid: string;
    /**
     * Licence No
     */
    lino: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum SrcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class SrcerRequestBody extends SpeakeasyBase {
    certificateParameters?: SrcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: SrcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Srcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Srcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Srcer504ApplicationJSON extends SpeakeasyBase {
    error?: Srcer504ApplicationJSONErrorEnum;
    errorDescription?: Srcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Srcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Srcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Srcer503ApplicationJSON extends SpeakeasyBase {
    error?: Srcer503ApplicationJSONErrorEnum;
    errorDescription?: Srcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Srcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Srcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Srcer502ApplicationJSON extends SpeakeasyBase {
    error?: Srcer502ApplicationJSONErrorEnum;
    errorDescription?: Srcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Srcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Srcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Srcer500ApplicationJSON extends SpeakeasyBase {
    error?: Srcer500ApplicationJSONErrorEnum;
    errorDescription?: Srcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Srcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Srcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Srcer404ApplicationJSON extends SpeakeasyBase {
    error?: Srcer404ApplicationJSONErrorEnum;
    errorDescription?: Srcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Srcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Srcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Srcer401ApplicationJSON extends SpeakeasyBase {
    error?: Srcer401ApplicationJSONErrorEnum;
    errorDescription?: Srcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Srcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Srcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Srcer400ApplicationJSON extends SpeakeasyBase {
    error?: Srcer400ApplicationJSONErrorEnum;
    errorDescription?: Srcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class SrcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    srcer400ApplicationJSONObject?: Srcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    srcer401ApplicationJSONObject?: Srcer401ApplicationJSON;
    /**
     * No record found
     */
    srcer404ApplicationJSONObject?: Srcer404ApplicationJSON;
    /**
     * Internal server error
     */
    srcer500ApplicationJSONObject?: Srcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    srcer502ApplicationJSONObject?: Srcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    srcer503ApplicationJSONObject?: Srcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    srcer504ApplicationJSONObject?: Srcer504ApplicationJSON;
}
