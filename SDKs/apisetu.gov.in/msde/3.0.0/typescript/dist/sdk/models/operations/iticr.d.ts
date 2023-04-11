import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IticrSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class IticrRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Certificate No.
     */
    certno: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum IticrRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class IticrRequestBody extends SpeakeasyBase {
    certificateParameters?: IticrRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: IticrRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Iticr504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Iticr504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Iticr504ApplicationJSON extends SpeakeasyBase {
    error?: Iticr504ApplicationJSONErrorEnum;
    errorDescription?: Iticr504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Iticr503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Iticr503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Iticr503ApplicationJSON extends SpeakeasyBase {
    error?: Iticr503ApplicationJSONErrorEnum;
    errorDescription?: Iticr503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Iticr502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Iticr502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Iticr502ApplicationJSON extends SpeakeasyBase {
    error?: Iticr502ApplicationJSONErrorEnum;
    errorDescription?: Iticr502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Iticr500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Iticr500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Iticr500ApplicationJSON extends SpeakeasyBase {
    error?: Iticr500ApplicationJSONErrorEnum;
    errorDescription?: Iticr500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Iticr404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Iticr404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Iticr404ApplicationJSON extends SpeakeasyBase {
    error?: Iticr404ApplicationJSONErrorEnum;
    errorDescription?: Iticr404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Iticr401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Iticr401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Iticr401ApplicationJSON extends SpeakeasyBase {
    error?: Iticr401ApplicationJSONErrorEnum;
    errorDescription?: Iticr401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Iticr400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Iticr400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Iticr400ApplicationJSON extends SpeakeasyBase {
    error?: Iticr400ApplicationJSONErrorEnum;
    errorDescription?: Iticr400ApplicationJSONErrorDescriptionEnum;
}
export declare class IticrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    iticr400ApplicationJSONObject?: Iticr400ApplicationJSON;
    /**
     * Unauthorized access
     */
    iticr401ApplicationJSONObject?: Iticr401ApplicationJSON;
    /**
     * No record found
     */
    iticr404ApplicationJSONObject?: Iticr404ApplicationJSON;
    /**
     * Internal server error
     */
    iticr500ApplicationJSONObject?: Iticr500ApplicationJSON;
    /**
     * Bad gateway
     */
    iticr502ApplicationJSONObject?: Iticr502ApplicationJSON;
    /**
     * Service unavailable
     */
    iticr503ApplicationJSONObject?: Iticr503ApplicationJSON;
    /**
     * Gateway timeout
     */
    iticr504ApplicationJSONObject?: Iticr504ApplicationJSON;
}
