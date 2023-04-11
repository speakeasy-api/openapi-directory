import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TdlcsSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class TdlcsRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Document Number
     */
    documentNumber: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum TdlcsRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class TdlcsRequestBody extends SpeakeasyBase {
    certificateParameters?: TdlcsRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: TdlcsRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Tdlcs504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Tdlcs504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Tdlcs504ApplicationJSON extends SpeakeasyBase {
    error?: Tdlcs504ApplicationJSONErrorEnum;
    errorDescription?: Tdlcs504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tdlcs503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Tdlcs503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Tdlcs503ApplicationJSON extends SpeakeasyBase {
    error?: Tdlcs503ApplicationJSONErrorEnum;
    errorDescription?: Tdlcs503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tdlcs502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Tdlcs502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Tdlcs502ApplicationJSON extends SpeakeasyBase {
    error?: Tdlcs502ApplicationJSONErrorEnum;
    errorDescription?: Tdlcs502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tdlcs500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Tdlcs500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Tdlcs500ApplicationJSON extends SpeakeasyBase {
    error?: Tdlcs500ApplicationJSONErrorEnum;
    errorDescription?: Tdlcs500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tdlcs404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Tdlcs404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Tdlcs404ApplicationJSON extends SpeakeasyBase {
    error?: Tdlcs404ApplicationJSONErrorEnum;
    errorDescription?: Tdlcs404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tdlcs401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Tdlcs401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Tdlcs401ApplicationJSON extends SpeakeasyBase {
    error?: Tdlcs401ApplicationJSONErrorEnum;
    errorDescription?: Tdlcs401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tdlcs400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Tdlcs400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Tdlcs400ApplicationJSON extends SpeakeasyBase {
    error?: Tdlcs400ApplicationJSONErrorEnum;
    errorDescription?: Tdlcs400ApplicationJSONErrorDescriptionEnum;
}
export declare class TdlcsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    tdlcs400ApplicationJSONObject?: Tdlcs400ApplicationJSON;
    /**
     * Unauthorized access
     */
    tdlcs401ApplicationJSONObject?: Tdlcs401ApplicationJSON;
    /**
     * No record found
     */
    tdlcs404ApplicationJSONObject?: Tdlcs404ApplicationJSON;
    /**
     * Internal server error
     */
    tdlcs500ApplicationJSONObject?: Tdlcs500ApplicationJSON;
    /**
     * Bad gateway
     */
    tdlcs502ApplicationJSONObject?: Tdlcs502ApplicationJSON;
    /**
     * Service unavailable
     */
    tdlcs503ApplicationJSONObject?: Tdlcs503ApplicationJSON;
    /**
     * Gateway timeout
     */
    tdlcs504ApplicationJSONObject?: Tdlcs504ApplicationJSON;
}
