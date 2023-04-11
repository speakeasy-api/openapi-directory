import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CvipcSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class CvipcRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Customer No
     */
    customerId: string;
    /**
     * Policy Number
     */
    policyNumber: string;
    /**
     * Policy Start Date
     */
    policyStartDate: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum CvipcRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class CvipcRequestBody extends SpeakeasyBase {
    certificateParameters?: CvipcRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: CvipcRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Cvipc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Cvipc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Cvipc504ApplicationJSON extends SpeakeasyBase {
    error?: Cvipc504ApplicationJSONErrorEnum;
    errorDescription?: Cvipc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cvipc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Cvipc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Cvipc503ApplicationJSON extends SpeakeasyBase {
    error?: Cvipc503ApplicationJSONErrorEnum;
    errorDescription?: Cvipc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cvipc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Cvipc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Cvipc502ApplicationJSON extends SpeakeasyBase {
    error?: Cvipc502ApplicationJSONErrorEnum;
    errorDescription?: Cvipc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cvipc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Cvipc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Cvipc500ApplicationJSON extends SpeakeasyBase {
    error?: Cvipc500ApplicationJSONErrorEnum;
    errorDescription?: Cvipc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cvipc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Cvipc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Cvipc404ApplicationJSON extends SpeakeasyBase {
    error?: Cvipc404ApplicationJSONErrorEnum;
    errorDescription?: Cvipc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cvipc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Cvipc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Cvipc401ApplicationJSON extends SpeakeasyBase {
    error?: Cvipc401ApplicationJSONErrorEnum;
    errorDescription?: Cvipc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cvipc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Cvipc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Cvipc400ApplicationJSON extends SpeakeasyBase {
    error?: Cvipc400ApplicationJSONErrorEnum;
    errorDescription?: Cvipc400ApplicationJSONErrorDescriptionEnum;
}
export declare class CvipcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    cvipc400ApplicationJSONObject?: Cvipc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    cvipc401ApplicationJSONObject?: Cvipc401ApplicationJSON;
    /**
     * No record found
     */
    cvipc404ApplicationJSONObject?: Cvipc404ApplicationJSON;
    /**
     * Internal server error
     */
    cvipc500ApplicationJSONObject?: Cvipc500ApplicationJSON;
    /**
     * Bad gateway
     */
    cvipc502ApplicationJSONObject?: Cvipc502ApplicationJSON;
    /**
     * Service unavailable
     */
    cvipc503ApplicationJSONObject?: Cvipc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    cvipc504ApplicationJSONObject?: Cvipc504ApplicationJSON;
}
