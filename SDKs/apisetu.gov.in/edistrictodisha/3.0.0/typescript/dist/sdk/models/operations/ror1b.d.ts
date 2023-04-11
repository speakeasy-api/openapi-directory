import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class Ror1bSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class Ror1bRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Aadhaar number
     */
    uid: string;
    /**
     * ApplicationReferenceNo
     */
    refno: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum Ror1bRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class Ror1bRequestBody extends SpeakeasyBase {
    certificateParameters?: Ror1bRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: Ror1bRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Ror1b504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ror1b504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Ror1b504ApplicationJSON extends SpeakeasyBase {
    error?: Ror1b504ApplicationJSONErrorEnum;
    errorDescription?: Ror1b504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ror1b503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ror1b503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Ror1b503ApplicationJSON extends SpeakeasyBase {
    error?: Ror1b503ApplicationJSONErrorEnum;
    errorDescription?: Ror1b503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ror1b502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ror1b502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Ror1b502ApplicationJSON extends SpeakeasyBase {
    error?: Ror1b502ApplicationJSONErrorEnum;
    errorDescription?: Ror1b502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ror1b500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ror1b500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Ror1b500ApplicationJSON extends SpeakeasyBase {
    error?: Ror1b500ApplicationJSONErrorEnum;
    errorDescription?: Ror1b500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ror1b404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ror1b404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Ror1b404ApplicationJSON extends SpeakeasyBase {
    error?: Ror1b404ApplicationJSONErrorEnum;
    errorDescription?: Ror1b404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ror1b401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ror1b401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Ror1b401ApplicationJSON extends SpeakeasyBase {
    error?: Ror1b401ApplicationJSONErrorEnum;
    errorDescription?: Ror1b401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ror1b400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ror1b400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Ror1b400ApplicationJSON extends SpeakeasyBase {
    error?: Ror1b400ApplicationJSONErrorEnum;
    errorDescription?: Ror1b400ApplicationJSONErrorDescriptionEnum;
}
export declare class Ror1bResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    ror1b400ApplicationJSONObject?: Ror1b400ApplicationJSON;
    /**
     * Unauthorized access
     */
    ror1b401ApplicationJSONObject?: Ror1b401ApplicationJSON;
    /**
     * No record found
     */
    ror1b404ApplicationJSONObject?: Ror1b404ApplicationJSON;
    /**
     * Internal server error
     */
    ror1b500ApplicationJSONObject?: Ror1b500ApplicationJSON;
    /**
     * Bad gateway
     */
    ror1b502ApplicationJSONObject?: Ror1b502ApplicationJSON;
    /**
     * Service unavailable
     */
    ror1b503ApplicationJSONObject?: Ror1b503ApplicationJSON;
    /**
     * Gateway timeout
     */
    ror1b504ApplicationJSONObject?: Ror1b504ApplicationJSON;
}
