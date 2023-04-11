import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class NooclSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class NooclRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Reference No.
     */
    refNo: string;
    /**
     * Token ID
     */
    tokenNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum NooclRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class NooclRequestBody extends SpeakeasyBase {
    certificateParameters?: NooclRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: NooclRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Noocl504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Noocl504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Noocl504ApplicationJSON extends SpeakeasyBase {
    error?: Noocl504ApplicationJSONErrorEnum;
    errorDescription?: Noocl504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Noocl503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Noocl503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Noocl503ApplicationJSON extends SpeakeasyBase {
    error?: Noocl503ApplicationJSONErrorEnum;
    errorDescription?: Noocl503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Noocl502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Noocl502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Noocl502ApplicationJSON extends SpeakeasyBase {
    error?: Noocl502ApplicationJSONErrorEnum;
    errorDescription?: Noocl502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Noocl500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Noocl500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Noocl500ApplicationJSON extends SpeakeasyBase {
    error?: Noocl500ApplicationJSONErrorEnum;
    errorDescription?: Noocl500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Noocl404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Noocl404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Noocl404ApplicationJSON extends SpeakeasyBase {
    error?: Noocl404ApplicationJSONErrorEnum;
    errorDescription?: Noocl404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Noocl401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Noocl401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Noocl401ApplicationJSON extends SpeakeasyBase {
    error?: Noocl401ApplicationJSONErrorEnum;
    errorDescription?: Noocl401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Noocl400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Noocl400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Noocl400ApplicationJSON extends SpeakeasyBase {
    error?: Noocl400ApplicationJSONErrorEnum;
    errorDescription?: Noocl400ApplicationJSONErrorDescriptionEnum;
}
export declare class NooclResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    noocl400ApplicationJSONObject?: Noocl400ApplicationJSON;
    /**
     * Unauthorized access
     */
    noocl401ApplicationJSONObject?: Noocl401ApplicationJSON;
    /**
     * No record found
     */
    noocl404ApplicationJSONObject?: Noocl404ApplicationJSON;
    /**
     * Internal server error
     */
    noocl500ApplicationJSONObject?: Noocl500ApplicationJSON;
    /**
     * Bad gateway
     */
    noocl502ApplicationJSONObject?: Noocl502ApplicationJSON;
    /**
     * Service unavailable
     */
    noocl503ApplicationJSONObject?: Noocl503ApplicationJSON;
    /**
     * Gateway timeout
     */
    noocl504ApplicationJSONObject?: Noocl504ApplicationJSON;
}
