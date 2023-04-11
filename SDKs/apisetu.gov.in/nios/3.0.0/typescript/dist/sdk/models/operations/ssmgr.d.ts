import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SsmgrSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class SsmgrRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * ROLL NO
     */
    rroll: string;
    /**
     * YEAR
     */
    year: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum SsmgrRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class SsmgrRequestBody extends SpeakeasyBase {
    certificateParameters?: SsmgrRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: SsmgrRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Ssmgr504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ssmgr504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Ssmgr504ApplicationJSON extends SpeakeasyBase {
    error?: Ssmgr504ApplicationJSONErrorEnum;
    errorDescription?: Ssmgr504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ssmgr503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ssmgr503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Ssmgr503ApplicationJSON extends SpeakeasyBase {
    error?: Ssmgr503ApplicationJSONErrorEnum;
    errorDescription?: Ssmgr503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ssmgr502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ssmgr502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Ssmgr502ApplicationJSON extends SpeakeasyBase {
    error?: Ssmgr502ApplicationJSONErrorEnum;
    errorDescription?: Ssmgr502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ssmgr500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ssmgr500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Ssmgr500ApplicationJSON extends SpeakeasyBase {
    error?: Ssmgr500ApplicationJSONErrorEnum;
    errorDescription?: Ssmgr500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ssmgr404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ssmgr404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Ssmgr404ApplicationJSON extends SpeakeasyBase {
    error?: Ssmgr404ApplicationJSONErrorEnum;
    errorDescription?: Ssmgr404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ssmgr401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ssmgr401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Ssmgr401ApplicationJSON extends SpeakeasyBase {
    error?: Ssmgr401ApplicationJSONErrorEnum;
    errorDescription?: Ssmgr401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ssmgr400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ssmgr400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Ssmgr400ApplicationJSON extends SpeakeasyBase {
    error?: Ssmgr400ApplicationJSONErrorEnum;
    errorDescription?: Ssmgr400ApplicationJSONErrorDescriptionEnum;
}
export declare class SsmgrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    ssmgr400ApplicationJSONObject?: Ssmgr400ApplicationJSON;
    /**
     * Unauthorized access
     */
    ssmgr401ApplicationJSONObject?: Ssmgr401ApplicationJSON;
    /**
     * No record found
     */
    ssmgr404ApplicationJSONObject?: Ssmgr404ApplicationJSON;
    /**
     * Internal server error
     */
    ssmgr500ApplicationJSONObject?: Ssmgr500ApplicationJSON;
    /**
     * Bad gateway
     */
    ssmgr502ApplicationJSONObject?: Ssmgr502ApplicationJSON;
    /**
     * Service unavailable
     */
    ssmgr503ApplicationJSONObject?: Ssmgr503ApplicationJSON;
    /**
     * Gateway timeout
     */
    ssmgr504ApplicationJSONObject?: Ssmgr504ApplicationJSON;
}
