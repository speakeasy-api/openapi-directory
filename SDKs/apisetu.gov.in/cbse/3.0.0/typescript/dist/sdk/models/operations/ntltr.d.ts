import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NtltrSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class NtltrRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum NtltrRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class NtltrRequestBody extends SpeakeasyBase {
    certificateParameters?: NtltrRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: NtltrRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Ntltr504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ntltr504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Ntltr504ApplicationJSON extends SpeakeasyBase {
    error?: Ntltr504ApplicationJSONErrorEnum;
    errorDescription?: Ntltr504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ntltr503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ntltr503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Ntltr503ApplicationJSON extends SpeakeasyBase {
    error?: Ntltr503ApplicationJSONErrorEnum;
    errorDescription?: Ntltr503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ntltr502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ntltr502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Ntltr502ApplicationJSON extends SpeakeasyBase {
    error?: Ntltr502ApplicationJSONErrorEnum;
    errorDescription?: Ntltr502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ntltr500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ntltr500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Ntltr500ApplicationJSON extends SpeakeasyBase {
    error?: Ntltr500ApplicationJSONErrorEnum;
    errorDescription?: Ntltr500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ntltr404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ntltr404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Ntltr404ApplicationJSON extends SpeakeasyBase {
    error?: Ntltr404ApplicationJSONErrorEnum;
    errorDescription?: Ntltr404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ntltr401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ntltr401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Ntltr401ApplicationJSON extends SpeakeasyBase {
    error?: Ntltr401ApplicationJSONErrorEnum;
    errorDescription?: Ntltr401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ntltr400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ntltr400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Ntltr400ApplicationJSON extends SpeakeasyBase {
    error?: Ntltr400ApplicationJSONErrorEnum;
    errorDescription?: Ntltr400ApplicationJSONErrorDescriptionEnum;
}
export declare class NtltrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    ntltr400ApplicationJSONObject?: Ntltr400ApplicationJSON;
    /**
     * Unauthorized access
     */
    ntltr401ApplicationJSONObject?: Ntltr401ApplicationJSON;
    /**
     * No record found
     */
    ntltr404ApplicationJSONObject?: Ntltr404ApplicationJSON;
    /**
     * Internal server error
     */
    ntltr500ApplicationJSONObject?: Ntltr500ApplicationJSON;
    /**
     * Bad gateway
     */
    ntltr502ApplicationJSONObject?: Ntltr502ApplicationJSON;
    /**
     * Service unavailable
     */
    ntltr503ApplicationJSONObject?: Ntltr503ApplicationJSON;
    /**
     * Gateway timeout
     */
    ntltr504ApplicationJSONObject?: Ntltr504ApplicationJSON;
}
