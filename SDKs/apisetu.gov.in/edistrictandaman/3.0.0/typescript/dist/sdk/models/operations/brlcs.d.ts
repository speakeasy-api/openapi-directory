import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BrlcsSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class BrlcsRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Certificate Number
     */
    certificateNumber: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum BrlcsRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class BrlcsRequestBody extends SpeakeasyBase {
    certificateParameters?: BrlcsRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: BrlcsRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Brlcs504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Brlcs504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Brlcs504ApplicationJSON extends SpeakeasyBase {
    error?: Brlcs504ApplicationJSONErrorEnum;
    errorDescription?: Brlcs504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Brlcs503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Brlcs503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Brlcs503ApplicationJSON extends SpeakeasyBase {
    error?: Brlcs503ApplicationJSONErrorEnum;
    errorDescription?: Brlcs503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Brlcs502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Brlcs502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Brlcs502ApplicationJSON extends SpeakeasyBase {
    error?: Brlcs502ApplicationJSONErrorEnum;
    errorDescription?: Brlcs502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Brlcs500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Brlcs500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Brlcs500ApplicationJSON extends SpeakeasyBase {
    error?: Brlcs500ApplicationJSONErrorEnum;
    errorDescription?: Brlcs500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Brlcs404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Brlcs404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Brlcs404ApplicationJSON extends SpeakeasyBase {
    error?: Brlcs404ApplicationJSONErrorEnum;
    errorDescription?: Brlcs404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Brlcs401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Brlcs401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Brlcs401ApplicationJSON extends SpeakeasyBase {
    error?: Brlcs401ApplicationJSONErrorEnum;
    errorDescription?: Brlcs401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Brlcs400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Brlcs400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Brlcs400ApplicationJSON extends SpeakeasyBase {
    error?: Brlcs400ApplicationJSONErrorEnum;
    errorDescription?: Brlcs400ApplicationJSONErrorDescriptionEnum;
}
export declare class BrlcsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    brlcs400ApplicationJSONObject?: Brlcs400ApplicationJSON;
    /**
     * Unauthorized access
     */
    brlcs401ApplicationJSONObject?: Brlcs401ApplicationJSON;
    /**
     * No record found
     */
    brlcs404ApplicationJSONObject?: Brlcs404ApplicationJSON;
    /**
     * Internal server error
     */
    brlcs500ApplicationJSONObject?: Brlcs500ApplicationJSON;
    /**
     * Bad gateway
     */
    brlcs502ApplicationJSONObject?: Brlcs502ApplicationJSON;
    /**
     * Service unavailable
     */
    brlcs503ApplicationJSONObject?: Brlcs503ApplicationJSON;
    /**
     * Gateway timeout
     */
    brlcs504ApplicationJSONObject?: Brlcs504ApplicationJSON;
}
