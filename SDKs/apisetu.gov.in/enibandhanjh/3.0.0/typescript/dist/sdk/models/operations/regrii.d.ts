import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RegriiSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class RegriiRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Regitration No
     */
    regno: string;
    /**
     * SRO Name
     */
    sroId: string;
    /**
     * Year
     */
    yr: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum RegriiRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class RegriiRequestBody extends SpeakeasyBase {
    certificateParameters?: RegriiRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: RegriiRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Regrii504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Regrii504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Regrii504ApplicationJSON extends SpeakeasyBase {
    error?: Regrii504ApplicationJSONErrorEnum;
    errorDescription?: Regrii504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Regrii503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Regrii503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Regrii503ApplicationJSON extends SpeakeasyBase {
    error?: Regrii503ApplicationJSONErrorEnum;
    errorDescription?: Regrii503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Regrii502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Regrii502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Regrii502ApplicationJSON extends SpeakeasyBase {
    error?: Regrii502ApplicationJSONErrorEnum;
    errorDescription?: Regrii502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Regrii500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Regrii500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Regrii500ApplicationJSON extends SpeakeasyBase {
    error?: Regrii500ApplicationJSONErrorEnum;
    errorDescription?: Regrii500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Regrii404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Regrii404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Regrii404ApplicationJSON extends SpeakeasyBase {
    error?: Regrii404ApplicationJSONErrorEnum;
    errorDescription?: Regrii404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Regrii401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Regrii401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Regrii401ApplicationJSON extends SpeakeasyBase {
    error?: Regrii401ApplicationJSONErrorEnum;
    errorDescription?: Regrii401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Regrii400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Regrii400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Regrii400ApplicationJSON extends SpeakeasyBase {
    error?: Regrii400ApplicationJSONErrorEnum;
    errorDescription?: Regrii400ApplicationJSONErrorDescriptionEnum;
}
export declare class RegriiResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    regrii400ApplicationJSONObject?: Regrii400ApplicationJSON;
    /**
     * Unauthorized access
     */
    regrii401ApplicationJSONObject?: Regrii401ApplicationJSON;
    /**
     * No record found
     */
    regrii404ApplicationJSONObject?: Regrii404ApplicationJSON;
    /**
     * Internal server error
     */
    regrii500ApplicationJSONObject?: Regrii500ApplicationJSON;
    /**
     * Bad gateway
     */
    regrii502ApplicationJSONObject?: Regrii502ApplicationJSON;
    /**
     * Service unavailable
     */
    regrii503ApplicationJSONObject?: Regrii503ApplicationJSON;
    /**
     * Gateway timeout
     */
    regrii504ApplicationJSONObject?: Regrii504ApplicationJSON;
}
