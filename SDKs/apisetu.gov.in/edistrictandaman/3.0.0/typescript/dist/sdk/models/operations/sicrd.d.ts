import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SicrdSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class SicrdRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Certificate Number
     */
    certificateNumber: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum SicrdRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class SicrdRequestBody extends SpeakeasyBase {
    certificateParameters?: SicrdRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: SicrdRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Sicrd504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Sicrd504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Sicrd504ApplicationJSON extends SpeakeasyBase {
    error?: Sicrd504ApplicationJSONErrorEnum;
    errorDescription?: Sicrd504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sicrd503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Sicrd503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Sicrd503ApplicationJSON extends SpeakeasyBase {
    error?: Sicrd503ApplicationJSONErrorEnum;
    errorDescription?: Sicrd503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sicrd502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Sicrd502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Sicrd502ApplicationJSON extends SpeakeasyBase {
    error?: Sicrd502ApplicationJSONErrorEnum;
    errorDescription?: Sicrd502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sicrd500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Sicrd500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Sicrd500ApplicationJSON extends SpeakeasyBase {
    error?: Sicrd500ApplicationJSONErrorEnum;
    errorDescription?: Sicrd500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sicrd404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Sicrd404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Sicrd404ApplicationJSON extends SpeakeasyBase {
    error?: Sicrd404ApplicationJSONErrorEnum;
    errorDescription?: Sicrd404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sicrd401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Sicrd401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Sicrd401ApplicationJSON extends SpeakeasyBase {
    error?: Sicrd401ApplicationJSONErrorEnum;
    errorDescription?: Sicrd401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Sicrd400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Sicrd400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Sicrd400ApplicationJSON extends SpeakeasyBase {
    error?: Sicrd400ApplicationJSONErrorEnum;
    errorDescription?: Sicrd400ApplicationJSONErrorDescriptionEnum;
}
export declare class SicrdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    sicrd400ApplicationJSONObject?: Sicrd400ApplicationJSON;
    /**
     * Unauthorized access
     */
    sicrd401ApplicationJSONObject?: Sicrd401ApplicationJSON;
    /**
     * No record found
     */
    sicrd404ApplicationJSONObject?: Sicrd404ApplicationJSON;
    /**
     * Internal server error
     */
    sicrd500ApplicationJSONObject?: Sicrd500ApplicationJSON;
    /**
     * Bad gateway
     */
    sicrd502ApplicationJSONObject?: Sicrd502ApplicationJSON;
    /**
     * Service unavailable
     */
    sicrd503ApplicationJSONObject?: Sicrd503ApplicationJSON;
    /**
     * Gateway timeout
     */
    sicrd504ApplicationJSONObject?: Sicrd504ApplicationJSON;
}
