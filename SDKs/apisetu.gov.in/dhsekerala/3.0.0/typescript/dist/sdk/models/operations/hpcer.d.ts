import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class HpcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class HpcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * Enter Regno
     */
    regno: string;
    /**
     * Enter Exam Type
     */
    type: string;
    /**
     * Enter Year
     */
    year: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum HpcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class HpcerRequestBody extends SpeakeasyBase {
    certificateParameters?: HpcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: HpcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Hpcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Hpcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Hpcer504ApplicationJSON extends SpeakeasyBase {
    error?: Hpcer504ApplicationJSONErrorEnum;
    errorDescription?: Hpcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hpcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Hpcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Hpcer503ApplicationJSON extends SpeakeasyBase {
    error?: Hpcer503ApplicationJSONErrorEnum;
    errorDescription?: Hpcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hpcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Hpcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Hpcer502ApplicationJSON extends SpeakeasyBase {
    error?: Hpcer502ApplicationJSONErrorEnum;
    errorDescription?: Hpcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hpcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Hpcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Hpcer500ApplicationJSON extends SpeakeasyBase {
    error?: Hpcer500ApplicationJSONErrorEnum;
    errorDescription?: Hpcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hpcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Hpcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Hpcer404ApplicationJSON extends SpeakeasyBase {
    error?: Hpcer404ApplicationJSONErrorEnum;
    errorDescription?: Hpcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hpcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Hpcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Hpcer401ApplicationJSON extends SpeakeasyBase {
    error?: Hpcer401ApplicationJSONErrorEnum;
    errorDescription?: Hpcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hpcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Hpcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Hpcer400ApplicationJSON extends SpeakeasyBase {
    error?: Hpcer400ApplicationJSONErrorEnum;
    errorDescription?: Hpcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class HpcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    hpcer400ApplicationJSONObject?: Hpcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    hpcer401ApplicationJSONObject?: Hpcer401ApplicationJSON;
    /**
     * No record found
     */
    hpcer404ApplicationJSONObject?: Hpcer404ApplicationJSON;
    /**
     * Internal server error
     */
    hpcer500ApplicationJSONObject?: Hpcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    hpcer502ApplicationJSONObject?: Hpcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    hpcer503ApplicationJSONObject?: Hpcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    hpcer504ApplicationJSONObject?: Hpcer504ApplicationJSON;
}
