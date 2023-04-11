import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UncrdSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class UncrdRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * UAN NUMBER
     */
    uan: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum UncrdRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class UncrdRequestBody extends SpeakeasyBase {
    certificateParameters?: UncrdRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: UncrdRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Uncrd504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Uncrd504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Uncrd504ApplicationJSON extends SpeakeasyBase {
    error?: Uncrd504ApplicationJSONErrorEnum;
    errorDescription?: Uncrd504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Uncrd503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Uncrd503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Uncrd503ApplicationJSON extends SpeakeasyBase {
    error?: Uncrd503ApplicationJSONErrorEnum;
    errorDescription?: Uncrd503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Uncrd502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Uncrd502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Uncrd502ApplicationJSON extends SpeakeasyBase {
    error?: Uncrd502ApplicationJSONErrorEnum;
    errorDescription?: Uncrd502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Uncrd500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Uncrd500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Uncrd500ApplicationJSON extends SpeakeasyBase {
    error?: Uncrd500ApplicationJSONErrorEnum;
    errorDescription?: Uncrd500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Uncrd404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Uncrd404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Uncrd404ApplicationJSON extends SpeakeasyBase {
    error?: Uncrd404ApplicationJSONErrorEnum;
    errorDescription?: Uncrd404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Uncrd401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Uncrd401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Uncrd401ApplicationJSON extends SpeakeasyBase {
    error?: Uncrd401ApplicationJSONErrorEnum;
    errorDescription?: Uncrd401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Uncrd400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Uncrd400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Uncrd400ApplicationJSON extends SpeakeasyBase {
    error?: Uncrd400ApplicationJSONErrorEnum;
    errorDescription?: Uncrd400ApplicationJSONErrorDescriptionEnum;
}
export declare class UncrdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    uncrd400ApplicationJSONObject?: Uncrd400ApplicationJSON;
    /**
     * Unauthorized access
     */
    uncrd401ApplicationJSONObject?: Uncrd401ApplicationJSON;
    /**
     * No record found
     */
    uncrd404ApplicationJSONObject?: Uncrd404ApplicationJSON;
    /**
     * Internal server error
     */
    uncrd500ApplicationJSONObject?: Uncrd500ApplicationJSON;
    /**
     * Bad gateway
     */
    uncrd502ApplicationJSONObject?: Uncrd502ApplicationJSON;
    /**
     * Service unavailable
     */
    uncrd503ApplicationJSONObject?: Uncrd503ApplicationJSON;
    /**
     * Gateway timeout
     */
    uncrd504ApplicationJSONObject?: Uncrd504ApplicationJSON;
}
