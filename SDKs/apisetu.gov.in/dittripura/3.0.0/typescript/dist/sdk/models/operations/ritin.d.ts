import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RitinSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class RitinRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Reference No.
     */
    refNo: string;
    /**
     * Token No.
     */
    tokenNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum RitinRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class RitinRequestBody extends SpeakeasyBase {
    certificateParameters?: RitinRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: RitinRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Ritin504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ritin504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Ritin504ApplicationJSON extends SpeakeasyBase {
    error?: Ritin504ApplicationJSONErrorEnum;
    errorDescription?: Ritin504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ritin503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ritin503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Ritin503ApplicationJSON extends SpeakeasyBase {
    error?: Ritin503ApplicationJSONErrorEnum;
    errorDescription?: Ritin503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ritin502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ritin502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Ritin502ApplicationJSON extends SpeakeasyBase {
    error?: Ritin502ApplicationJSONErrorEnum;
    errorDescription?: Ritin502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ritin500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ritin500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Ritin500ApplicationJSON extends SpeakeasyBase {
    error?: Ritin500ApplicationJSONErrorEnum;
    errorDescription?: Ritin500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ritin404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ritin404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Ritin404ApplicationJSON extends SpeakeasyBase {
    error?: Ritin404ApplicationJSONErrorEnum;
    errorDescription?: Ritin404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ritin401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ritin401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Ritin401ApplicationJSON extends SpeakeasyBase {
    error?: Ritin401ApplicationJSONErrorEnum;
    errorDescription?: Ritin401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ritin400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ritin400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Ritin400ApplicationJSON extends SpeakeasyBase {
    error?: Ritin400ApplicationJSONErrorEnum;
    errorDescription?: Ritin400ApplicationJSONErrorDescriptionEnum;
}
export declare class RitinResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    ritin400ApplicationJSONObject?: Ritin400ApplicationJSON;
    /**
     * Unauthorized access
     */
    ritin401ApplicationJSONObject?: Ritin401ApplicationJSON;
    /**
     * No record found
     */
    ritin404ApplicationJSONObject?: Ritin404ApplicationJSON;
    /**
     * Internal server error
     */
    ritin500ApplicationJSONObject?: Ritin500ApplicationJSON;
    /**
     * Bad gateway
     */
    ritin502ApplicationJSONObject?: Ritin502ApplicationJSON;
    /**
     * Service unavailable
     */
    ritin503ApplicationJSONObject?: Ritin503ApplicationJSON;
    /**
     * Gateway timeout
     */
    ritin504ApplicationJSONObject?: Ritin504ApplicationJSON;
}
