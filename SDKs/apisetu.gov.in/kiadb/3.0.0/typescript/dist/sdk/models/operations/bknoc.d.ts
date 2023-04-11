import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BknocSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class BknocRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum BknocRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class BknocRequestBody extends SpeakeasyBase {
    certificateParameters?: BknocRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: BknocRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Bknoc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Bknoc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Bknoc504ApplicationJSON extends SpeakeasyBase {
    error?: Bknoc504ApplicationJSONErrorEnum;
    errorDescription?: Bknoc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bknoc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Bknoc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Bknoc503ApplicationJSON extends SpeakeasyBase {
    error?: Bknoc503ApplicationJSONErrorEnum;
    errorDescription?: Bknoc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bknoc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Bknoc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Bknoc502ApplicationJSON extends SpeakeasyBase {
    error?: Bknoc502ApplicationJSONErrorEnum;
    errorDescription?: Bknoc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bknoc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Bknoc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Bknoc500ApplicationJSON extends SpeakeasyBase {
    error?: Bknoc500ApplicationJSONErrorEnum;
    errorDescription?: Bknoc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bknoc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Bknoc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Bknoc404ApplicationJSON extends SpeakeasyBase {
    error?: Bknoc404ApplicationJSONErrorEnum;
    errorDescription?: Bknoc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bknoc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Bknoc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Bknoc401ApplicationJSON extends SpeakeasyBase {
    error?: Bknoc401ApplicationJSONErrorEnum;
    errorDescription?: Bknoc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bknoc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Bknoc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Bknoc400ApplicationJSON extends SpeakeasyBase {
    error?: Bknoc400ApplicationJSONErrorEnum;
    errorDescription?: Bknoc400ApplicationJSONErrorDescriptionEnum;
}
export declare class BknocResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    bknoc400ApplicationJSONObject?: Bknoc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    bknoc401ApplicationJSONObject?: Bknoc401ApplicationJSON;
    /**
     * No record found
     */
    bknoc404ApplicationJSONObject?: Bknoc404ApplicationJSON;
    /**
     * Internal server error
     */
    bknoc500ApplicationJSONObject?: Bknoc500ApplicationJSON;
    /**
     * Bad gateway
     */
    bknoc502ApplicationJSONObject?: Bknoc502ApplicationJSON;
    /**
     * Service unavailable
     */
    bknoc503ApplicationJSONObject?: Bknoc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    bknoc504ApplicationJSONObject?: Bknoc504ApplicationJSON;
}
