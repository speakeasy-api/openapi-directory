import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrcptSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class PrcptRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Date of Birth
     */
    piDob: string;
    /**
     * Financial Year
     */
    piFinYear: string;
    /**
     * Policy No
     */
    piPolicynbr: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum PrcptRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class PrcptRequestBody extends SpeakeasyBase {
    certificateParameters?: PrcptRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: PrcptRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Prcpt504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Prcpt504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Prcpt504ApplicationJSON extends SpeakeasyBase {
    error?: Prcpt504ApplicationJSONErrorEnum;
    errorDescription?: Prcpt504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Prcpt503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Prcpt503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Prcpt503ApplicationJSON extends SpeakeasyBase {
    error?: Prcpt503ApplicationJSONErrorEnum;
    errorDescription?: Prcpt503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Prcpt502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Prcpt502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Prcpt502ApplicationJSON extends SpeakeasyBase {
    error?: Prcpt502ApplicationJSONErrorEnum;
    errorDescription?: Prcpt502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Prcpt500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Prcpt500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Prcpt500ApplicationJSON extends SpeakeasyBase {
    error?: Prcpt500ApplicationJSONErrorEnum;
    errorDescription?: Prcpt500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Prcpt404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Prcpt404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Prcpt404ApplicationJSON extends SpeakeasyBase {
    error?: Prcpt404ApplicationJSONErrorEnum;
    errorDescription?: Prcpt404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Prcpt401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Prcpt401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Prcpt401ApplicationJSON extends SpeakeasyBase {
    error?: Prcpt401ApplicationJSONErrorEnum;
    errorDescription?: Prcpt401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Prcpt400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Prcpt400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Prcpt400ApplicationJSON extends SpeakeasyBase {
    error?: Prcpt400ApplicationJSONErrorEnum;
    errorDescription?: Prcpt400ApplicationJSONErrorDescriptionEnum;
}
export declare class PrcptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    prcpt400ApplicationJSONObject?: Prcpt400ApplicationJSON;
    /**
     * Unauthorized access
     */
    prcpt401ApplicationJSONObject?: Prcpt401ApplicationJSON;
    /**
     * No record found
     */
    prcpt404ApplicationJSONObject?: Prcpt404ApplicationJSON;
    /**
     * Internal server error
     */
    prcpt500ApplicationJSONObject?: Prcpt500ApplicationJSON;
    /**
     * Bad gateway
     */
    prcpt502ApplicationJSONObject?: Prcpt502ApplicationJSON;
    /**
     * Service unavailable
     */
    prcpt503ApplicationJSONObject?: Prcpt503ApplicationJSON;
    /**
     * Gateway timeout
     */
    prcpt504ApplicationJSONObject?: Prcpt504ApplicationJSON;
}
