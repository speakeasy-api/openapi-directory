import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class FslcsSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class FslcsRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum FslcsRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class FslcsRequestBody extends SpeakeasyBase {
    certificateParameters?: FslcsRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: FslcsRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Fslcs504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Fslcs504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Fslcs504ApplicationJSON extends SpeakeasyBase {
    error?: Fslcs504ApplicationJSONErrorEnum;
    errorDescription?: Fslcs504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Fslcs503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Fslcs503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Fslcs503ApplicationJSON extends SpeakeasyBase {
    error?: Fslcs503ApplicationJSONErrorEnum;
    errorDescription?: Fslcs503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Fslcs502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Fslcs502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Fslcs502ApplicationJSON extends SpeakeasyBase {
    error?: Fslcs502ApplicationJSONErrorEnum;
    errorDescription?: Fslcs502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Fslcs500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Fslcs500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Fslcs500ApplicationJSON extends SpeakeasyBase {
    error?: Fslcs500ApplicationJSONErrorEnum;
    errorDescription?: Fslcs500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Fslcs404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Fslcs404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Fslcs404ApplicationJSON extends SpeakeasyBase {
    error?: Fslcs404ApplicationJSONErrorEnum;
    errorDescription?: Fslcs404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Fslcs401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Fslcs401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Fslcs401ApplicationJSON extends SpeakeasyBase {
    error?: Fslcs401ApplicationJSONErrorEnum;
    errorDescription?: Fslcs401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Fslcs400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Fslcs400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Fslcs400ApplicationJSON extends SpeakeasyBase {
    error?: Fslcs400ApplicationJSONErrorEnum;
    errorDescription?: Fslcs400ApplicationJSONErrorDescriptionEnum;
}
export declare class FslcsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    fslcs400ApplicationJSONObject?: Fslcs400ApplicationJSON;
    /**
     * Unauthorized access
     */
    fslcs401ApplicationJSONObject?: Fslcs401ApplicationJSON;
    /**
     * No record found
     */
    fslcs404ApplicationJSONObject?: Fslcs404ApplicationJSON;
    /**
     * Internal server error
     */
    fslcs500ApplicationJSONObject?: Fslcs500ApplicationJSON;
    /**
     * Bad gateway
     */
    fslcs502ApplicationJSONObject?: Fslcs502ApplicationJSON;
    /**
     * Service unavailable
     */
    fslcs503ApplicationJSONObject?: Fslcs503ApplicationJSON;
    /**
     * Gateway timeout
     */
    fslcs504ApplicationJSONObject?: Fslcs504ApplicationJSON;
}
