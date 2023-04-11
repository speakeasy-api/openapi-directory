import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ApmclSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class ApmclRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Document Number
     */
    documentNumber: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum ApmclRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class ApmclRequestBody extends SpeakeasyBase {
    certificateParameters?: ApmclRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: ApmclRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Apmcl504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Apmcl504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Apmcl504ApplicationJSON extends SpeakeasyBase {
    error?: Apmcl504ApplicationJSONErrorEnum;
    errorDescription?: Apmcl504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Apmcl503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Apmcl503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Apmcl503ApplicationJSON extends SpeakeasyBase {
    error?: Apmcl503ApplicationJSONErrorEnum;
    errorDescription?: Apmcl503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Apmcl502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Apmcl502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Apmcl502ApplicationJSON extends SpeakeasyBase {
    error?: Apmcl502ApplicationJSONErrorEnum;
    errorDescription?: Apmcl502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Apmcl500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Apmcl500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Apmcl500ApplicationJSON extends SpeakeasyBase {
    error?: Apmcl500ApplicationJSONErrorEnum;
    errorDescription?: Apmcl500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Apmcl404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Apmcl404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Apmcl404ApplicationJSON extends SpeakeasyBase {
    error?: Apmcl404ApplicationJSONErrorEnum;
    errorDescription?: Apmcl404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Apmcl401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Apmcl401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Apmcl401ApplicationJSON extends SpeakeasyBase {
    error?: Apmcl401ApplicationJSONErrorEnum;
    errorDescription?: Apmcl401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Apmcl400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Apmcl400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Apmcl400ApplicationJSON extends SpeakeasyBase {
    error?: Apmcl400ApplicationJSONErrorEnum;
    errorDescription?: Apmcl400ApplicationJSONErrorDescriptionEnum;
}
export declare class ApmclResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    apmcl400ApplicationJSONObject?: Apmcl400ApplicationJSON;
    /**
     * Unauthorized access
     */
    apmcl401ApplicationJSONObject?: Apmcl401ApplicationJSON;
    /**
     * No record found
     */
    apmcl404ApplicationJSONObject?: Apmcl404ApplicationJSON;
    /**
     * Internal server error
     */
    apmcl500ApplicationJSONObject?: Apmcl500ApplicationJSON;
    /**
     * Bad gateway
     */
    apmcl502ApplicationJSONObject?: Apmcl502ApplicationJSON;
    /**
     * Service unavailable
     */
    apmcl503ApplicationJSONObject?: Apmcl503ApplicationJSON;
    /**
     * Gateway timeout
     */
    apmcl504ApplicationJSONObject?: Apmcl504ApplicationJSON;
}
