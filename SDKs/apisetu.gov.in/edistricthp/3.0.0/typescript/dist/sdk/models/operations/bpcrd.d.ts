import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class BpcrdSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class BpcrdRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * ApplicationNumber
     */
    udf1: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum BpcrdRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class BpcrdRequestBody extends SpeakeasyBase {
    certificateParameters?: BpcrdRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: BpcrdRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Bpcrd504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Bpcrd504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Bpcrd504ApplicationJSON extends SpeakeasyBase {
    error?: Bpcrd504ApplicationJSONErrorEnum;
    errorDescription?: Bpcrd504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bpcrd503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Bpcrd503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Bpcrd503ApplicationJSON extends SpeakeasyBase {
    error?: Bpcrd503ApplicationJSONErrorEnum;
    errorDescription?: Bpcrd503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bpcrd502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Bpcrd502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Bpcrd502ApplicationJSON extends SpeakeasyBase {
    error?: Bpcrd502ApplicationJSONErrorEnum;
    errorDescription?: Bpcrd502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bpcrd500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Bpcrd500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Bpcrd500ApplicationJSON extends SpeakeasyBase {
    error?: Bpcrd500ApplicationJSONErrorEnum;
    errorDescription?: Bpcrd500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bpcrd404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Bpcrd404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Bpcrd404ApplicationJSON extends SpeakeasyBase {
    error?: Bpcrd404ApplicationJSONErrorEnum;
    errorDescription?: Bpcrd404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bpcrd401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Bpcrd401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Bpcrd401ApplicationJSON extends SpeakeasyBase {
    error?: Bpcrd401ApplicationJSONErrorEnum;
    errorDescription?: Bpcrd401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Bpcrd400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Bpcrd400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Bpcrd400ApplicationJSON extends SpeakeasyBase {
    error?: Bpcrd400ApplicationJSONErrorEnum;
    errorDescription?: Bpcrd400ApplicationJSONErrorDescriptionEnum;
}
export declare class BpcrdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    bpcrd400ApplicationJSONObject?: Bpcrd400ApplicationJSON;
    /**
     * Unauthorized access
     */
    bpcrd401ApplicationJSONObject?: Bpcrd401ApplicationJSON;
    /**
     * No record found
     */
    bpcrd404ApplicationJSONObject?: Bpcrd404ApplicationJSON;
    /**
     * Internal server error
     */
    bpcrd500ApplicationJSONObject?: Bpcrd500ApplicationJSON;
    /**
     * Bad gateway
     */
    bpcrd502ApplicationJSONObject?: Bpcrd502ApplicationJSON;
    /**
     * Service unavailable
     */
    bpcrd503ApplicationJSONObject?: Bpcrd503ApplicationJSON;
    /**
     * Gateway timeout
     */
    bpcrd504ApplicationJSONObject?: Bpcrd504ApplicationJSON;
}
