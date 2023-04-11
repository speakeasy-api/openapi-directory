import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PsnocSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class PsnocRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum PsnocRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class PsnocRequestBody extends SpeakeasyBase {
    certificateParameters?: PsnocRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: PsnocRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Psnoc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Psnoc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Psnoc504ApplicationJSON extends SpeakeasyBase {
    error?: Psnoc504ApplicationJSONErrorEnum;
    errorDescription?: Psnoc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Psnoc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Psnoc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Psnoc503ApplicationJSON extends SpeakeasyBase {
    error?: Psnoc503ApplicationJSONErrorEnum;
    errorDescription?: Psnoc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Psnoc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Psnoc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Psnoc502ApplicationJSON extends SpeakeasyBase {
    error?: Psnoc502ApplicationJSONErrorEnum;
    errorDescription?: Psnoc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Psnoc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Psnoc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Psnoc500ApplicationJSON extends SpeakeasyBase {
    error?: Psnoc500ApplicationJSONErrorEnum;
    errorDescription?: Psnoc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Psnoc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Psnoc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Psnoc404ApplicationJSON extends SpeakeasyBase {
    error?: Psnoc404ApplicationJSONErrorEnum;
    errorDescription?: Psnoc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Psnoc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Psnoc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Psnoc401ApplicationJSON extends SpeakeasyBase {
    error?: Psnoc401ApplicationJSONErrorEnum;
    errorDescription?: Psnoc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Psnoc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Psnoc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Psnoc400ApplicationJSON extends SpeakeasyBase {
    error?: Psnoc400ApplicationJSONErrorEnum;
    errorDescription?: Psnoc400ApplicationJSONErrorDescriptionEnum;
}
export declare class PsnocResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    psnoc400ApplicationJSONObject?: Psnoc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    psnoc401ApplicationJSONObject?: Psnoc401ApplicationJSON;
    /**
     * No record found
     */
    psnoc404ApplicationJSONObject?: Psnoc404ApplicationJSON;
    /**
     * Internal server error
     */
    psnoc500ApplicationJSONObject?: Psnoc500ApplicationJSON;
    /**
     * Bad gateway
     */
    psnoc502ApplicationJSONObject?: Psnoc502ApplicationJSON;
    /**
     * Service unavailable
     */
    psnoc503ApplicationJSONObject?: Psnoc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    psnoc504ApplicationJSONObject?: Psnoc504ApplicationJSON;
}
