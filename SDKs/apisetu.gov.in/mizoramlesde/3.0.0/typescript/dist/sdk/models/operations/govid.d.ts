import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GovidSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class GovidRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * Registration No
     */
    regno: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum GovidRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class GovidRequestBody extends SpeakeasyBase {
    certificateParameters?: GovidRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: GovidRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Govid504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Govid504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Govid504ApplicationJSON extends SpeakeasyBase {
    error?: Govid504ApplicationJSONErrorEnum;
    errorDescription?: Govid504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Govid503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Govid503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Govid503ApplicationJSON extends SpeakeasyBase {
    error?: Govid503ApplicationJSONErrorEnum;
    errorDescription?: Govid503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Govid502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Govid502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Govid502ApplicationJSON extends SpeakeasyBase {
    error?: Govid502ApplicationJSONErrorEnum;
    errorDescription?: Govid502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Govid500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Govid500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Govid500ApplicationJSON extends SpeakeasyBase {
    error?: Govid500ApplicationJSONErrorEnum;
    errorDescription?: Govid500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Govid404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Govid404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Govid404ApplicationJSON extends SpeakeasyBase {
    error?: Govid404ApplicationJSONErrorEnum;
    errorDescription?: Govid404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Govid401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Govid401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Govid401ApplicationJSON extends SpeakeasyBase {
    error?: Govid401ApplicationJSONErrorEnum;
    errorDescription?: Govid401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Govid400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Govid400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Govid400ApplicationJSON extends SpeakeasyBase {
    error?: Govid400ApplicationJSONErrorEnum;
    errorDescription?: Govid400ApplicationJSONErrorDescriptionEnum;
}
export declare class GovidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    govid400ApplicationJSONObject?: Govid400ApplicationJSON;
    /**
     * Unauthorized access
     */
    govid401ApplicationJSONObject?: Govid401ApplicationJSON;
    /**
     * No record found
     */
    govid404ApplicationJSONObject?: Govid404ApplicationJSON;
    /**
     * Internal server error
     */
    govid500ApplicationJSONObject?: Govid500ApplicationJSON;
    /**
     * Bad gateway
     */
    govid502ApplicationJSONObject?: Govid502ApplicationJSON;
    /**
     * Service unavailable
     */
    govid503ApplicationJSONObject?: Govid503ApplicationJSON;
    /**
     * Gateway timeout
     */
    govid504ApplicationJSONObject?: Govid504ApplicationJSON;
}
