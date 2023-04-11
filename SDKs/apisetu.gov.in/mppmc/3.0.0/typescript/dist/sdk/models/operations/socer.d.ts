import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SocerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class SocerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Registration Application No
     */
    appno: string;
    /**
     * Date Of Birth
     */
    dateOfBirth: string;
    /**
     * Enrollment No.
     */
    enrolno: string;
    /**
     * Type Of Service
     */
    typOfCert: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum SocerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class SocerRequestBody extends SpeakeasyBase {
    certificateParameters?: SocerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: SocerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Socer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Socer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Socer504ApplicationJSON extends SpeakeasyBase {
    error?: Socer504ApplicationJSONErrorEnum;
    errorDescription?: Socer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Socer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Socer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Socer503ApplicationJSON extends SpeakeasyBase {
    error?: Socer503ApplicationJSONErrorEnum;
    errorDescription?: Socer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Socer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Socer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Socer502ApplicationJSON extends SpeakeasyBase {
    error?: Socer502ApplicationJSONErrorEnum;
    errorDescription?: Socer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Socer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Socer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Socer500ApplicationJSON extends SpeakeasyBase {
    error?: Socer500ApplicationJSONErrorEnum;
    errorDescription?: Socer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Socer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Socer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Socer404ApplicationJSON extends SpeakeasyBase {
    error?: Socer404ApplicationJSONErrorEnum;
    errorDescription?: Socer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Socer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Socer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Socer401ApplicationJSON extends SpeakeasyBase {
    error?: Socer401ApplicationJSONErrorEnum;
    errorDescription?: Socer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Socer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Socer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Socer400ApplicationJSON extends SpeakeasyBase {
    error?: Socer400ApplicationJSONErrorEnum;
    errorDescription?: Socer400ApplicationJSONErrorDescriptionEnum;
}
export declare class SocerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    socer400ApplicationJSONObject?: Socer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    socer401ApplicationJSONObject?: Socer401ApplicationJSON;
    /**
     * No record found
     */
    socer404ApplicationJSONObject?: Socer404ApplicationJSON;
    /**
     * Internal server error
     */
    socer500ApplicationJSONObject?: Socer500ApplicationJSON;
    /**
     * Bad gateway
     */
    socer502ApplicationJSONObject?: Socer502ApplicationJSON;
    /**
     * Service unavailable
     */
    socer503ApplicationJSONObject?: Socer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    socer504ApplicationJSONObject?: Socer504ApplicationJSON;
}
