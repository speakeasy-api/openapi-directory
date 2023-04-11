import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TripcSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class TripcRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Insured Date of Birth
     */
    insuredDob: string;
    /**
     * Policy Number
     */
    policyNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum TripcRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class TripcRequestBody extends SpeakeasyBase {
    certificateParameters?: TripcRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: TripcRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Tripc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Tripc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Tripc504ApplicationJSON extends SpeakeasyBase {
    error?: Tripc504ApplicationJSONErrorEnum;
    errorDescription?: Tripc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tripc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Tripc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Tripc503ApplicationJSON extends SpeakeasyBase {
    error?: Tripc503ApplicationJSONErrorEnum;
    errorDescription?: Tripc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tripc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Tripc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Tripc502ApplicationJSON extends SpeakeasyBase {
    error?: Tripc502ApplicationJSONErrorEnum;
    errorDescription?: Tripc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tripc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Tripc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Tripc500ApplicationJSON extends SpeakeasyBase {
    error?: Tripc500ApplicationJSONErrorEnum;
    errorDescription?: Tripc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tripc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Tripc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Tripc404ApplicationJSON extends SpeakeasyBase {
    error?: Tripc404ApplicationJSONErrorEnum;
    errorDescription?: Tripc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tripc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Tripc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Tripc401ApplicationJSON extends SpeakeasyBase {
    error?: Tripc401ApplicationJSONErrorEnum;
    errorDescription?: Tripc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Tripc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Tripc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Tripc400ApplicationJSON extends SpeakeasyBase {
    error?: Tripc400ApplicationJSONErrorEnum;
    errorDescription?: Tripc400ApplicationJSONErrorDescriptionEnum;
}
export declare class TripcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    tripc400ApplicationJSONObject?: Tripc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    tripc401ApplicationJSONObject?: Tripc401ApplicationJSON;
    /**
     * No record found
     */
    tripc404ApplicationJSONObject?: Tripc404ApplicationJSON;
    /**
     * Internal server error
     */
    tripc500ApplicationJSONObject?: Tripc500ApplicationJSON;
    /**
     * Bad gateway
     */
    tripc502ApplicationJSONObject?: Tripc502ApplicationJSON;
    /**
     * Service unavailable
     */
    tripc503ApplicationJSONObject?: Tripc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    tripc504ApplicationJSONObject?: Tripc504ApplicationJSON;
}
