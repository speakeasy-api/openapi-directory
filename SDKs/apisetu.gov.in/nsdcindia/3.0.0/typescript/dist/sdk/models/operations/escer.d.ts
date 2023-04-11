import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EscerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class EscerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * DOCID
     */
    docid: string;
    /**
     * Full name
     */
    fullName: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum EscerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class EscerRequestBody extends SpeakeasyBase {
    certificateParameters?: EscerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: EscerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Escer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Escer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Escer504ApplicationJSON extends SpeakeasyBase {
    error?: Escer504ApplicationJSONErrorEnum;
    errorDescription?: Escer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Escer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Escer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Escer503ApplicationJSON extends SpeakeasyBase {
    error?: Escer503ApplicationJSONErrorEnum;
    errorDescription?: Escer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Escer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Escer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Escer502ApplicationJSON extends SpeakeasyBase {
    error?: Escer502ApplicationJSONErrorEnum;
    errorDescription?: Escer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Escer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Escer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Escer500ApplicationJSON extends SpeakeasyBase {
    error?: Escer500ApplicationJSONErrorEnum;
    errorDescription?: Escer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Escer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Escer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Escer404ApplicationJSON extends SpeakeasyBase {
    error?: Escer404ApplicationJSONErrorEnum;
    errorDescription?: Escer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Escer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Escer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Escer401ApplicationJSON extends SpeakeasyBase {
    error?: Escer401ApplicationJSONErrorEnum;
    errorDescription?: Escer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Escer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Escer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Escer400ApplicationJSON extends SpeakeasyBase {
    error?: Escer400ApplicationJSONErrorEnum;
    errorDescription?: Escer400ApplicationJSONErrorDescriptionEnum;
}
export declare class EscerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    escer400ApplicationJSONObject?: Escer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    escer401ApplicationJSONObject?: Escer401ApplicationJSON;
    /**
     * No record found
     */
    escer404ApplicationJSONObject?: Escer404ApplicationJSON;
    /**
     * Internal server error
     */
    escer500ApplicationJSONObject?: Escer500ApplicationJSON;
    /**
     * Bad gateway
     */
    escer502ApplicationJSONObject?: Escer502ApplicationJSON;
    /**
     * Service unavailable
     */
    escer503ApplicationJSONObject?: Escer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    escer504ApplicationJSONObject?: Escer504ApplicationJSON;
}
