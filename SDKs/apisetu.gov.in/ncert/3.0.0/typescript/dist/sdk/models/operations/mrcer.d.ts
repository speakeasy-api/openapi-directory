import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MrcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class MrcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * Roll No.
     */
    rroll: string;
    /**
     * Year
     */
    year: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum MrcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class MrcerRequestBody extends SpeakeasyBase {
    certificateParameters?: MrcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: MrcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Mrcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Mrcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Mrcer504ApplicationJSON extends SpeakeasyBase {
    error?: Mrcer504ApplicationJSONErrorEnum;
    errorDescription?: Mrcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mrcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Mrcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Mrcer503ApplicationJSON extends SpeakeasyBase {
    error?: Mrcer503ApplicationJSONErrorEnum;
    errorDescription?: Mrcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mrcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Mrcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Mrcer502ApplicationJSON extends SpeakeasyBase {
    error?: Mrcer502ApplicationJSONErrorEnum;
    errorDescription?: Mrcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mrcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Mrcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Mrcer500ApplicationJSON extends SpeakeasyBase {
    error?: Mrcer500ApplicationJSONErrorEnum;
    errorDescription?: Mrcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mrcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Mrcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Mrcer404ApplicationJSON extends SpeakeasyBase {
    error?: Mrcer404ApplicationJSONErrorEnum;
    errorDescription?: Mrcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mrcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Mrcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Mrcer401ApplicationJSON extends SpeakeasyBase {
    error?: Mrcer401ApplicationJSONErrorEnum;
    errorDescription?: Mrcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mrcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Mrcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Mrcer400ApplicationJSON extends SpeakeasyBase {
    error?: Mrcer400ApplicationJSONErrorEnum;
    errorDescription?: Mrcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class MrcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    mrcer400ApplicationJSONObject?: Mrcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    mrcer401ApplicationJSONObject?: Mrcer401ApplicationJSON;
    /**
     * No record found
     */
    mrcer404ApplicationJSONObject?: Mrcer404ApplicationJSON;
    /**
     * Internal server error
     */
    mrcer500ApplicationJSONObject?: Mrcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    mrcer502ApplicationJSONObject?: Mrcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    mrcer503ApplicationJSONObject?: Mrcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    mrcer504ApplicationJSONObject?: Mrcer504ApplicationJSON;
}
