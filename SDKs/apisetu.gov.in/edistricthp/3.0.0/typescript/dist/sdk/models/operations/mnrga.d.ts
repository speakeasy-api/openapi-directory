import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MnrgaSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class MnrgaRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * ApplicationNumber
     */
    udf1: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum MnrgaRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class MnrgaRequestBody extends SpeakeasyBase {
    certificateParameters?: MnrgaRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: MnrgaRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Mnrga504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Mnrga504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Mnrga504ApplicationJSON extends SpeakeasyBase {
    error?: Mnrga504ApplicationJSONErrorEnum;
    errorDescription?: Mnrga504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mnrga503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Mnrga503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Mnrga503ApplicationJSON extends SpeakeasyBase {
    error?: Mnrga503ApplicationJSONErrorEnum;
    errorDescription?: Mnrga503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mnrga502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Mnrga502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Mnrga502ApplicationJSON extends SpeakeasyBase {
    error?: Mnrga502ApplicationJSONErrorEnum;
    errorDescription?: Mnrga502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mnrga500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Mnrga500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Mnrga500ApplicationJSON extends SpeakeasyBase {
    error?: Mnrga500ApplicationJSONErrorEnum;
    errorDescription?: Mnrga500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mnrga404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Mnrga404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Mnrga404ApplicationJSON extends SpeakeasyBase {
    error?: Mnrga404ApplicationJSONErrorEnum;
    errorDescription?: Mnrga404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mnrga401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Mnrga401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Mnrga401ApplicationJSON extends SpeakeasyBase {
    error?: Mnrga401ApplicationJSONErrorEnum;
    errorDescription?: Mnrga401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Mnrga400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Mnrga400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Mnrga400ApplicationJSON extends SpeakeasyBase {
    error?: Mnrga400ApplicationJSONErrorEnum;
    errorDescription?: Mnrga400ApplicationJSONErrorDescriptionEnum;
}
export declare class MnrgaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    mnrga400ApplicationJSONObject?: Mnrga400ApplicationJSON;
    /**
     * Unauthorized access
     */
    mnrga401ApplicationJSONObject?: Mnrga401ApplicationJSON;
    /**
     * No record found
     */
    mnrga404ApplicationJSONObject?: Mnrga404ApplicationJSON;
    /**
     * Internal server error
     */
    mnrga500ApplicationJSONObject?: Mnrga500ApplicationJSON;
    /**
     * Bad gateway
     */
    mnrga502ApplicationJSONObject?: Mnrga502ApplicationJSON;
    /**
     * Service unavailable
     */
    mnrga503ApplicationJSONObject?: Mnrga503ApplicationJSON;
    /**
     * Gateway timeout
     */
    mnrga504ApplicationJSONObject?: Mnrga504ApplicationJSON;
}
