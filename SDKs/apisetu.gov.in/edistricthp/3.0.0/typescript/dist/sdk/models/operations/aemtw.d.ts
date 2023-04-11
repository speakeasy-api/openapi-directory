import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AemtwSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class AemtwRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * ApplicationNumber
     */
    udf1: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum AemtwRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class AemtwRequestBody extends SpeakeasyBase {
    certificateParameters?: AemtwRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: AemtwRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Aemtw504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Aemtw504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Aemtw504ApplicationJSON extends SpeakeasyBase {
    error?: Aemtw504ApplicationJSONErrorEnum;
    errorDescription?: Aemtw504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Aemtw503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Aemtw503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Aemtw503ApplicationJSON extends SpeakeasyBase {
    error?: Aemtw503ApplicationJSONErrorEnum;
    errorDescription?: Aemtw503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Aemtw502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Aemtw502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Aemtw502ApplicationJSON extends SpeakeasyBase {
    error?: Aemtw502ApplicationJSONErrorEnum;
    errorDescription?: Aemtw502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Aemtw500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Aemtw500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Aemtw500ApplicationJSON extends SpeakeasyBase {
    error?: Aemtw500ApplicationJSONErrorEnum;
    errorDescription?: Aemtw500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Aemtw404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Aemtw404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Aemtw404ApplicationJSON extends SpeakeasyBase {
    error?: Aemtw404ApplicationJSONErrorEnum;
    errorDescription?: Aemtw404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Aemtw401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Aemtw401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Aemtw401ApplicationJSON extends SpeakeasyBase {
    error?: Aemtw401ApplicationJSONErrorEnum;
    errorDescription?: Aemtw401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Aemtw400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Aemtw400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Aemtw400ApplicationJSON extends SpeakeasyBase {
    error?: Aemtw400ApplicationJSONErrorEnum;
    errorDescription?: Aemtw400ApplicationJSONErrorDescriptionEnum;
}
export declare class AemtwResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    aemtw400ApplicationJSONObject?: Aemtw400ApplicationJSON;
    /**
     * Unauthorized access
     */
    aemtw401ApplicationJSONObject?: Aemtw401ApplicationJSON;
    /**
     * No record found
     */
    aemtw404ApplicationJSONObject?: Aemtw404ApplicationJSON;
    /**
     * Internal server error
     */
    aemtw500ApplicationJSONObject?: Aemtw500ApplicationJSON;
    /**
     * Bad gateway
     */
    aemtw502ApplicationJSONObject?: Aemtw502ApplicationJSON;
    /**
     * Service unavailable
     */
    aemtw503ApplicationJSONObject?: Aemtw503ApplicationJSON;
    /**
     * Gateway timeout
     */
    aemtw504ApplicationJSONObject?: Aemtw504ApplicationJSON;
}
