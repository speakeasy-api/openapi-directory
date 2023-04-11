import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BpcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class BpcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * Registration Number
     */
    regNum: string;
    /**
     * Aadhaar number
     */
    uid: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum BpcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class BpcerRequestBody extends SpeakeasyBase {
    certificateParameters?: BpcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: BpcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Bpcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Bpcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Bpcer504ApplicationJSON extends SpeakeasyBase {
    error?: Bpcer504ApplicationJSONErrorEnum;
    errorDescription?: Bpcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bpcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Bpcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Bpcer503ApplicationJSON extends SpeakeasyBase {
    error?: Bpcer503ApplicationJSONErrorEnum;
    errorDescription?: Bpcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bpcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Bpcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Bpcer502ApplicationJSON extends SpeakeasyBase {
    error?: Bpcer502ApplicationJSONErrorEnum;
    errorDescription?: Bpcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bpcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Bpcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Bpcer500ApplicationJSON extends SpeakeasyBase {
    error?: Bpcer500ApplicationJSONErrorEnum;
    errorDescription?: Bpcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bpcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Bpcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Bpcer404ApplicationJSON extends SpeakeasyBase {
    error?: Bpcer404ApplicationJSONErrorEnum;
    errorDescription?: Bpcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bpcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Bpcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Bpcer401ApplicationJSON extends SpeakeasyBase {
    error?: Bpcer401ApplicationJSONErrorEnum;
    errorDescription?: Bpcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bpcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Bpcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Bpcer400ApplicationJSON extends SpeakeasyBase {
    error?: Bpcer400ApplicationJSONErrorEnum;
    errorDescription?: Bpcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class BpcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    bpcer400ApplicationJSONObject?: Bpcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    bpcer401ApplicationJSONObject?: Bpcer401ApplicationJSON;
    /**
     * No record found
     */
    bpcer404ApplicationJSONObject?: Bpcer404ApplicationJSON;
    /**
     * Internal server error
     */
    bpcer500ApplicationJSONObject?: Bpcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    bpcer502ApplicationJSONObject?: Bpcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    bpcer503ApplicationJSONObject?: Bpcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    bpcer504ApplicationJSONObject?: Bpcer504ApplicationJSON;
}
