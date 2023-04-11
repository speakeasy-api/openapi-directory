import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CyipcSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class CyipcRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Policy Number
     */
    policyNumber: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum CyipcRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class CyipcRequestBody extends SpeakeasyBase {
    certificateParameters?: CyipcRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: CyipcRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Cyipc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Cyipc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Cyipc504ApplicationJSON extends SpeakeasyBase {
    error?: Cyipc504ApplicationJSONErrorEnum;
    errorDescription?: Cyipc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cyipc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Cyipc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Cyipc503ApplicationJSON extends SpeakeasyBase {
    error?: Cyipc503ApplicationJSONErrorEnum;
    errorDescription?: Cyipc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cyipc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Cyipc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Cyipc502ApplicationJSON extends SpeakeasyBase {
    error?: Cyipc502ApplicationJSONErrorEnum;
    errorDescription?: Cyipc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cyipc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Cyipc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Cyipc500ApplicationJSON extends SpeakeasyBase {
    error?: Cyipc500ApplicationJSONErrorEnum;
    errorDescription?: Cyipc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cyipc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Cyipc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Cyipc404ApplicationJSON extends SpeakeasyBase {
    error?: Cyipc404ApplicationJSONErrorEnum;
    errorDescription?: Cyipc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cyipc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Cyipc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Cyipc401ApplicationJSON extends SpeakeasyBase {
    error?: Cyipc401ApplicationJSONErrorEnum;
    errorDescription?: Cyipc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cyipc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Cyipc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Cyipc400ApplicationJSON extends SpeakeasyBase {
    error?: Cyipc400ApplicationJSONErrorEnum;
    errorDescription?: Cyipc400ApplicationJSONErrorDescriptionEnum;
}
export declare class CyipcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    cyipc400ApplicationJSONObject?: Cyipc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    cyipc401ApplicationJSONObject?: Cyipc401ApplicationJSON;
    /**
     * No record found
     */
    cyipc404ApplicationJSONObject?: Cyipc404ApplicationJSON;
    /**
     * Internal server error
     */
    cyipc500ApplicationJSONObject?: Cyipc500ApplicationJSON;
    /**
     * Bad gateway
     */
    cyipc502ApplicationJSONObject?: Cyipc502ApplicationJSON;
    /**
     * Service unavailable
     */
    cyipc503ApplicationJSONObject?: Cyipc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    cyipc504ApplicationJSONObject?: Cyipc504ApplicationJSON;
}
