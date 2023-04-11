import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NstscSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class NstscRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum NstscRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class NstscRequestBody extends SpeakeasyBase {
    certificateParameters?: NstscRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: NstscRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Nstsc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Nstsc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Nstsc504ApplicationJSON extends SpeakeasyBase {
    error?: Nstsc504ApplicationJSONErrorEnum;
    errorDescription?: Nstsc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nstsc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Nstsc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Nstsc503ApplicationJSON extends SpeakeasyBase {
    error?: Nstsc503ApplicationJSONErrorEnum;
    errorDescription?: Nstsc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nstsc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Nstsc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Nstsc502ApplicationJSON extends SpeakeasyBase {
    error?: Nstsc502ApplicationJSONErrorEnum;
    errorDescription?: Nstsc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nstsc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Nstsc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Nstsc500ApplicationJSON extends SpeakeasyBase {
    error?: Nstsc500ApplicationJSONErrorEnum;
    errorDescription?: Nstsc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nstsc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Nstsc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Nstsc404ApplicationJSON extends SpeakeasyBase {
    error?: Nstsc404ApplicationJSONErrorEnum;
    errorDescription?: Nstsc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nstsc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Nstsc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Nstsc401ApplicationJSON extends SpeakeasyBase {
    error?: Nstsc401ApplicationJSONErrorEnum;
    errorDescription?: Nstsc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Nstsc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Nstsc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Nstsc400ApplicationJSON extends SpeakeasyBase {
    error?: Nstsc400ApplicationJSONErrorEnum;
    errorDescription?: Nstsc400ApplicationJSONErrorDescriptionEnum;
}
export declare class NstscResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    nstsc400ApplicationJSONObject?: Nstsc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    nstsc401ApplicationJSONObject?: Nstsc401ApplicationJSON;
    /**
     * No record found
     */
    nstsc404ApplicationJSONObject?: Nstsc404ApplicationJSON;
    /**
     * Internal server error
     */
    nstsc500ApplicationJSONObject?: Nstsc500ApplicationJSON;
    /**
     * Bad gateway
     */
    nstsc502ApplicationJSONObject?: Nstsc502ApplicationJSON;
    /**
     * Service unavailable
     */
    nstsc503ApplicationJSONObject?: Nstsc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    nstsc504ApplicationJSONObject?: Nstsc504ApplicationJSON;
}
