import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class HvcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class HvcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of Birth
     */
    dob: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * Roll No.
     */
    roll: string;
    /**
     * Year of Passing
     */
    yop: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum HvcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class HvcerRequestBody extends SpeakeasyBase {
    certificateParameters?: HvcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: HvcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Hvcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Hvcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Hvcer504ApplicationJSON extends SpeakeasyBase {
    error?: Hvcer504ApplicationJSONErrorEnum;
    errorDescription?: Hvcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hvcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Hvcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Hvcer503ApplicationJSON extends SpeakeasyBase {
    error?: Hvcer503ApplicationJSONErrorEnum;
    errorDescription?: Hvcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hvcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Hvcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Hvcer502ApplicationJSON extends SpeakeasyBase {
    error?: Hvcer502ApplicationJSONErrorEnum;
    errorDescription?: Hvcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hvcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Hvcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Hvcer500ApplicationJSON extends SpeakeasyBase {
    error?: Hvcer500ApplicationJSONErrorEnum;
    errorDescription?: Hvcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hvcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Hvcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Hvcer404ApplicationJSON extends SpeakeasyBase {
    error?: Hvcer404ApplicationJSONErrorEnum;
    errorDescription?: Hvcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hvcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Hvcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Hvcer401ApplicationJSON extends SpeakeasyBase {
    error?: Hvcer401ApplicationJSONErrorEnum;
    errorDescription?: Hvcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hvcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Hvcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Hvcer400ApplicationJSON extends SpeakeasyBase {
    error?: Hvcer400ApplicationJSONErrorEnum;
    errorDescription?: Hvcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class HvcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    hvcer400ApplicationJSONObject?: Hvcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    hvcer401ApplicationJSONObject?: Hvcer401ApplicationJSON;
    /**
     * No record found
     */
    hvcer404ApplicationJSONObject?: Hvcer404ApplicationJSON;
    /**
     * Internal server error
     */
    hvcer500ApplicationJSONObject?: Hvcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    hvcer502ApplicationJSONObject?: Hvcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    hvcer503ApplicationJSONObject?: Hvcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    hvcer504ApplicationJSONObject?: Hvcer504ApplicationJSON;
}
