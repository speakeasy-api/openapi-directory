import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class HlipcSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class HlipcRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * INSCODE
     */
    inscode: string;
    /**
     * POLNO
     */
    polno: string;
    /**
     * STARTDT
     */
    startdt: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum HlipcRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class HlipcRequestBody extends SpeakeasyBase {
    certificateParameters?: HlipcRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: HlipcRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Hlipc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Hlipc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Hlipc504ApplicationJSON extends SpeakeasyBase {
    error?: Hlipc504ApplicationJSONErrorEnum;
    errorDescription?: Hlipc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hlipc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Hlipc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Hlipc503ApplicationJSON extends SpeakeasyBase {
    error?: Hlipc503ApplicationJSONErrorEnum;
    errorDescription?: Hlipc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hlipc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Hlipc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Hlipc502ApplicationJSON extends SpeakeasyBase {
    error?: Hlipc502ApplicationJSONErrorEnum;
    errorDescription?: Hlipc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hlipc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Hlipc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Hlipc500ApplicationJSON extends SpeakeasyBase {
    error?: Hlipc500ApplicationJSONErrorEnum;
    errorDescription?: Hlipc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hlipc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Hlipc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Hlipc404ApplicationJSON extends SpeakeasyBase {
    error?: Hlipc404ApplicationJSONErrorEnum;
    errorDescription?: Hlipc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hlipc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Hlipc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Hlipc401ApplicationJSON extends SpeakeasyBase {
    error?: Hlipc401ApplicationJSONErrorEnum;
    errorDescription?: Hlipc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hlipc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Hlipc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Hlipc400ApplicationJSON extends SpeakeasyBase {
    error?: Hlipc400ApplicationJSONErrorEnum;
    errorDescription?: Hlipc400ApplicationJSONErrorDescriptionEnum;
}
export declare class HlipcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    hlipc400ApplicationJSONObject?: Hlipc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    hlipc401ApplicationJSONObject?: Hlipc401ApplicationJSON;
    /**
     * No record found
     */
    hlipc404ApplicationJSONObject?: Hlipc404ApplicationJSON;
    /**
     * Internal server error
     */
    hlipc500ApplicationJSONObject?: Hlipc500ApplicationJSON;
    /**
     * Bad gateway
     */
    hlipc502ApplicationJSONObject?: Hlipc502ApplicationJSON;
    /**
     * Service unavailable
     */
    hlipc503ApplicationJSONObject?: Hlipc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    hlipc504ApplicationJSONObject?: Hlipc504ApplicationJSON;
}
