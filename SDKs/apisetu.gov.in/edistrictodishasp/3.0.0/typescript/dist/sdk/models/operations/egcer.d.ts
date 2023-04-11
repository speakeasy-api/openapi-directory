import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EgcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class EgcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Reference No
     */
    refNo: string;
    /**
     * Token No
     */
    tokenNo: string;
    /**
     * Aadhaar number
     */
    uid: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum EgcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class EgcerRequestBody extends SpeakeasyBase {
    certificateParameters?: EgcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: EgcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Egcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Egcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Egcer504ApplicationJSON extends SpeakeasyBase {
    error?: Egcer504ApplicationJSONErrorEnum;
    errorDescription?: Egcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Egcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Egcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Egcer503ApplicationJSON extends SpeakeasyBase {
    error?: Egcer503ApplicationJSONErrorEnum;
    errorDescription?: Egcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Egcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Egcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Egcer502ApplicationJSON extends SpeakeasyBase {
    error?: Egcer502ApplicationJSONErrorEnum;
    errorDescription?: Egcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Egcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Egcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Egcer500ApplicationJSON extends SpeakeasyBase {
    error?: Egcer500ApplicationJSONErrorEnum;
    errorDescription?: Egcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Egcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Egcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Egcer404ApplicationJSON extends SpeakeasyBase {
    error?: Egcer404ApplicationJSONErrorEnum;
    errorDescription?: Egcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Egcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Egcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Egcer401ApplicationJSON extends SpeakeasyBase {
    error?: Egcer401ApplicationJSONErrorEnum;
    errorDescription?: Egcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Egcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Egcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Egcer400ApplicationJSON extends SpeakeasyBase {
    error?: Egcer400ApplicationJSONErrorEnum;
    errorDescription?: Egcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class EgcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    egcer400ApplicationJSONObject?: Egcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    egcer401ApplicationJSONObject?: Egcer401ApplicationJSON;
    /**
     * No record found
     */
    egcer404ApplicationJSONObject?: Egcer404ApplicationJSON;
    /**
     * Internal server error
     */
    egcer500ApplicationJSONObject?: Egcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    egcer502ApplicationJSONObject?: Egcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    egcer503ApplicationJSONObject?: Egcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    egcer504ApplicationJSONObject?: Egcer504ApplicationJSON;
}
