import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MalcsSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class MalcsRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum MalcsRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class MalcsRequestBody extends SpeakeasyBase {
    certificateParameters?: MalcsRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: MalcsRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Malcs504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Malcs504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Malcs504ApplicationJSON extends SpeakeasyBase {
    error?: Malcs504ApplicationJSONErrorEnum;
    errorDescription?: Malcs504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Malcs503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Malcs503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Malcs503ApplicationJSON extends SpeakeasyBase {
    error?: Malcs503ApplicationJSONErrorEnum;
    errorDescription?: Malcs503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Malcs502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Malcs502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Malcs502ApplicationJSON extends SpeakeasyBase {
    error?: Malcs502ApplicationJSONErrorEnum;
    errorDescription?: Malcs502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Malcs500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Malcs500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Malcs500ApplicationJSON extends SpeakeasyBase {
    error?: Malcs500ApplicationJSONErrorEnum;
    errorDescription?: Malcs500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Malcs404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Malcs404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Malcs404ApplicationJSON extends SpeakeasyBase {
    error?: Malcs404ApplicationJSONErrorEnum;
    errorDescription?: Malcs404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Malcs401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Malcs401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Malcs401ApplicationJSON extends SpeakeasyBase {
    error?: Malcs401ApplicationJSONErrorEnum;
    errorDescription?: Malcs401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Malcs400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Malcs400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Malcs400ApplicationJSON extends SpeakeasyBase {
    error?: Malcs400ApplicationJSONErrorEnum;
    errorDescription?: Malcs400ApplicationJSONErrorDescriptionEnum;
}
export declare class MalcsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    malcs400ApplicationJSONObject?: Malcs400ApplicationJSON;
    /**
     * Unauthorized access
     */
    malcs401ApplicationJSONObject?: Malcs401ApplicationJSON;
    /**
     * No record found
     */
    malcs404ApplicationJSONObject?: Malcs404ApplicationJSON;
    /**
     * Internal server error
     */
    malcs500ApplicationJSONObject?: Malcs500ApplicationJSON;
    /**
     * Bad gateway
     */
    malcs502ApplicationJSONObject?: Malcs502ApplicationJSON;
    /**
     * Service unavailable
     */
    malcs503ApplicationJSONObject?: Malcs503ApplicationJSON;
    /**
     * Gateway timeout
     */
    malcs504ApplicationJSONObject?: Malcs504ApplicationJSON;
}
