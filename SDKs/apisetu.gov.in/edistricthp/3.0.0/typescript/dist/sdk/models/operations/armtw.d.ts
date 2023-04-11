import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ArmtwSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class ArmtwRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * ApplicationNumber
     */
    udf1: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum ArmtwRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class ArmtwRequestBody extends SpeakeasyBase {
    certificateParameters?: ArmtwRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: ArmtwRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Armtw504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Armtw504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Armtw504ApplicationJSON extends SpeakeasyBase {
    error?: Armtw504ApplicationJSONErrorEnum;
    errorDescription?: Armtw504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Armtw503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Armtw503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Armtw503ApplicationJSON extends SpeakeasyBase {
    error?: Armtw503ApplicationJSONErrorEnum;
    errorDescription?: Armtw503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Armtw502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Armtw502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Armtw502ApplicationJSON extends SpeakeasyBase {
    error?: Armtw502ApplicationJSONErrorEnum;
    errorDescription?: Armtw502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Armtw500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Armtw500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Armtw500ApplicationJSON extends SpeakeasyBase {
    error?: Armtw500ApplicationJSONErrorEnum;
    errorDescription?: Armtw500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Armtw404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Armtw404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Armtw404ApplicationJSON extends SpeakeasyBase {
    error?: Armtw404ApplicationJSONErrorEnum;
    errorDescription?: Armtw404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Armtw401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Armtw401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Armtw401ApplicationJSON extends SpeakeasyBase {
    error?: Armtw401ApplicationJSONErrorEnum;
    errorDescription?: Armtw401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Armtw400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Armtw400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Armtw400ApplicationJSON extends SpeakeasyBase {
    error?: Armtw400ApplicationJSONErrorEnum;
    errorDescription?: Armtw400ApplicationJSONErrorDescriptionEnum;
}
export declare class ArmtwResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    armtw400ApplicationJSONObject?: Armtw400ApplicationJSON;
    /**
     * Unauthorized access
     */
    armtw401ApplicationJSONObject?: Armtw401ApplicationJSON;
    /**
     * No record found
     */
    armtw404ApplicationJSONObject?: Armtw404ApplicationJSON;
    /**
     * Internal server error
     */
    armtw500ApplicationJSONObject?: Armtw500ApplicationJSON;
    /**
     * Bad gateway
     */
    armtw502ApplicationJSONObject?: Armtw502ApplicationJSON;
    /**
     * Service unavailable
     */
    armtw503ApplicationJSONObject?: Armtw503ApplicationJSON;
    /**
     * Gateway timeout
     */
    armtw504ApplicationJSONObject?: Armtw504ApplicationJSON;
}
