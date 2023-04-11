import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NtmksSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class NtmksRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Roll No
     */
    rollno: string;
    /**
     * Year
     */
    year: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum NtmksRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class NtmksRequestBody extends SpeakeasyBase {
    certificateParameters?: NtmksRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: NtmksRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Ntmks504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ntmks504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Ntmks504ApplicationJSON extends SpeakeasyBase {
    error?: Ntmks504ApplicationJSONErrorEnum;
    errorDescription?: Ntmks504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ntmks503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ntmks503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Ntmks503ApplicationJSON extends SpeakeasyBase {
    error?: Ntmks503ApplicationJSONErrorEnum;
    errorDescription?: Ntmks503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ntmks502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ntmks502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Ntmks502ApplicationJSON extends SpeakeasyBase {
    error?: Ntmks502ApplicationJSONErrorEnum;
    errorDescription?: Ntmks502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ntmks500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ntmks500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Ntmks500ApplicationJSON extends SpeakeasyBase {
    error?: Ntmks500ApplicationJSONErrorEnum;
    errorDescription?: Ntmks500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ntmks404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ntmks404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Ntmks404ApplicationJSON extends SpeakeasyBase {
    error?: Ntmks404ApplicationJSONErrorEnum;
    errorDescription?: Ntmks404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ntmks401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ntmks401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Ntmks401ApplicationJSON extends SpeakeasyBase {
    error?: Ntmks401ApplicationJSONErrorEnum;
    errorDescription?: Ntmks401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ntmks400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ntmks400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Ntmks400ApplicationJSON extends SpeakeasyBase {
    error?: Ntmks400ApplicationJSONErrorEnum;
    errorDescription?: Ntmks400ApplicationJSONErrorDescriptionEnum;
}
export declare class NtmksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    ntmks400ApplicationJSONObject?: Ntmks400ApplicationJSON;
    /**
     * Unauthorized access
     */
    ntmks401ApplicationJSONObject?: Ntmks401ApplicationJSON;
    /**
     * No record found
     */
    ntmks404ApplicationJSONObject?: Ntmks404ApplicationJSON;
    /**
     * Internal server error
     */
    ntmks500ApplicationJSONObject?: Ntmks500ApplicationJSON;
    /**
     * Bad gateway
     */
    ntmks502ApplicationJSONObject?: Ntmks502ApplicationJSON;
    /**
     * Service unavailable
     */
    ntmks503ApplicationJSONObject?: Ntmks503ApplicationJSON;
    /**
     * Gateway timeout
     */
    ntmks504ApplicationJSONObject?: Ntmks504ApplicationJSON;
}
