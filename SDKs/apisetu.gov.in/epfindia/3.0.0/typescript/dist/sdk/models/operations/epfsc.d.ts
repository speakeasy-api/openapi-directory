import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EpfscSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class EpfscRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * SC_NO
     */
    scno: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum EpfscRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class EpfscRequestBody extends SpeakeasyBase {
    certificateParameters?: EpfscRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: EpfscRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Epfsc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Epfsc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Epfsc504ApplicationJSON extends SpeakeasyBase {
    error?: Epfsc504ApplicationJSONErrorEnum;
    errorDescription?: Epfsc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Epfsc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Epfsc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Epfsc503ApplicationJSON extends SpeakeasyBase {
    error?: Epfsc503ApplicationJSONErrorEnum;
    errorDescription?: Epfsc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Epfsc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Epfsc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Epfsc502ApplicationJSON extends SpeakeasyBase {
    error?: Epfsc502ApplicationJSONErrorEnum;
    errorDescription?: Epfsc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Epfsc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Epfsc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Epfsc500ApplicationJSON extends SpeakeasyBase {
    error?: Epfsc500ApplicationJSONErrorEnum;
    errorDescription?: Epfsc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Epfsc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Epfsc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Epfsc404ApplicationJSON extends SpeakeasyBase {
    error?: Epfsc404ApplicationJSONErrorEnum;
    errorDescription?: Epfsc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Epfsc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Epfsc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Epfsc401ApplicationJSON extends SpeakeasyBase {
    error?: Epfsc401ApplicationJSONErrorEnum;
    errorDescription?: Epfsc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Epfsc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Epfsc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Epfsc400ApplicationJSON extends SpeakeasyBase {
    error?: Epfsc400ApplicationJSONErrorEnum;
    errorDescription?: Epfsc400ApplicationJSONErrorDescriptionEnum;
}
export declare class EpfscResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    epfsc400ApplicationJSONObject?: Epfsc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    epfsc401ApplicationJSONObject?: Epfsc401ApplicationJSON;
    /**
     * No record found
     */
    epfsc404ApplicationJSONObject?: Epfsc404ApplicationJSON;
    /**
     * Internal server error
     */
    epfsc500ApplicationJSONObject?: Epfsc500ApplicationJSON;
    /**
     * Bad gateway
     */
    epfsc502ApplicationJSONObject?: Epfsc502ApplicationJSON;
    /**
     * Service unavailable
     */
    epfsc503ApplicationJSONObject?: Epfsc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    epfsc504ApplicationJSONObject?: Epfsc504ApplicationJSON;
}
