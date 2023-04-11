import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NsescSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class NsescRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum NsescRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class NsescRequestBody extends SpeakeasyBase {
    certificateParameters?: NsescRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: NsescRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Nsesc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Nsesc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Nsesc504ApplicationJSON extends SpeakeasyBase {
    error?: Nsesc504ApplicationJSONErrorEnum;
    errorDescription?: Nsesc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nsesc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Nsesc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Nsesc503ApplicationJSON extends SpeakeasyBase {
    error?: Nsesc503ApplicationJSONErrorEnum;
    errorDescription?: Nsesc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nsesc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Nsesc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Nsesc502ApplicationJSON extends SpeakeasyBase {
    error?: Nsesc502ApplicationJSONErrorEnum;
    errorDescription?: Nsesc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nsesc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Nsesc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Nsesc500ApplicationJSON extends SpeakeasyBase {
    error?: Nsesc500ApplicationJSONErrorEnum;
    errorDescription?: Nsesc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nsesc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Nsesc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Nsesc404ApplicationJSON extends SpeakeasyBase {
    error?: Nsesc404ApplicationJSONErrorEnum;
    errorDescription?: Nsesc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nsesc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Nsesc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Nsesc401ApplicationJSON extends SpeakeasyBase {
    error?: Nsesc401ApplicationJSONErrorEnum;
    errorDescription?: Nsesc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nsesc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Nsesc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Nsesc400ApplicationJSON extends SpeakeasyBase {
    error?: Nsesc400ApplicationJSONErrorEnum;
    errorDescription?: Nsesc400ApplicationJSONErrorDescriptionEnum;
}
export declare class NsescResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    nsesc400ApplicationJSONObject?: Nsesc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    nsesc401ApplicationJSONObject?: Nsesc401ApplicationJSON;
    /**
     * No record found
     */
    nsesc404ApplicationJSONObject?: Nsesc404ApplicationJSON;
    /**
     * Internal server error
     */
    nsesc500ApplicationJSONObject?: Nsesc500ApplicationJSON;
    /**
     * Bad gateway
     */
    nsesc502ApplicationJSONObject?: Nsesc502ApplicationJSON;
    /**
     * Service unavailable
     */
    nsesc503ApplicationJSONObject?: Nsesc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    nsesc504ApplicationJSONObject?: Nsesc504ApplicationJSON;
}
