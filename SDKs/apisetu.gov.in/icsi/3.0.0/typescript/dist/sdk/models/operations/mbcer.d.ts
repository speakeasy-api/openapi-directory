import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MbcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class MbcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Type of Certificate
     */
    certType: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * Membership No.
     */
    membershipNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum MbcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class MbcerRequestBody extends SpeakeasyBase {
    certificateParameters?: MbcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: MbcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Mbcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Mbcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Mbcer504ApplicationJSON extends SpeakeasyBase {
    error?: Mbcer504ApplicationJSONErrorEnum;
    errorDescription?: Mbcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mbcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Mbcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Mbcer503ApplicationJSON extends SpeakeasyBase {
    error?: Mbcer503ApplicationJSONErrorEnum;
    errorDescription?: Mbcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mbcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Mbcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Mbcer502ApplicationJSON extends SpeakeasyBase {
    error?: Mbcer502ApplicationJSONErrorEnum;
    errorDescription?: Mbcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mbcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Mbcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Mbcer500ApplicationJSON extends SpeakeasyBase {
    error?: Mbcer500ApplicationJSONErrorEnum;
    errorDescription?: Mbcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mbcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Mbcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Mbcer404ApplicationJSON extends SpeakeasyBase {
    error?: Mbcer404ApplicationJSONErrorEnum;
    errorDescription?: Mbcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mbcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Mbcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Mbcer401ApplicationJSON extends SpeakeasyBase {
    error?: Mbcer401ApplicationJSONErrorEnum;
    errorDescription?: Mbcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mbcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Mbcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Mbcer400ApplicationJSON extends SpeakeasyBase {
    error?: Mbcer400ApplicationJSONErrorEnum;
    errorDescription?: Mbcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class MbcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    mbcer400ApplicationJSONObject?: Mbcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    mbcer401ApplicationJSONObject?: Mbcer401ApplicationJSON;
    /**
     * No record found
     */
    mbcer404ApplicationJSONObject?: Mbcer404ApplicationJSON;
    /**
     * Internal server error
     */
    mbcer500ApplicationJSONObject?: Mbcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    mbcer502ApplicationJSONObject?: Mbcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    mbcer503ApplicationJSONObject?: Mbcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    mbcer504ApplicationJSONObject?: Mbcer504ApplicationJSON;
}
