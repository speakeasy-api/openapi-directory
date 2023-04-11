import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DtcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class DtcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of Death
     */
    dateofEvent: string;
    /**
     * Registration Number
     */
    regisNumber: string;
    /**
     * Year of Registration
     */
    year: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum DtcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class DtcerRequestBody extends SpeakeasyBase {
    certificateParameters?: DtcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: DtcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Dtcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Dtcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Dtcer504ApplicationJSON extends SpeakeasyBase {
    error?: Dtcer504ApplicationJSONErrorEnum;
    errorDescription?: Dtcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dtcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Dtcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Dtcer503ApplicationJSON extends SpeakeasyBase {
    error?: Dtcer503ApplicationJSONErrorEnum;
    errorDescription?: Dtcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dtcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Dtcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Dtcer502ApplicationJSON extends SpeakeasyBase {
    error?: Dtcer502ApplicationJSONErrorEnum;
    errorDescription?: Dtcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dtcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Dtcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Dtcer500ApplicationJSON extends SpeakeasyBase {
    error?: Dtcer500ApplicationJSONErrorEnum;
    errorDescription?: Dtcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dtcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Dtcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Dtcer404ApplicationJSON extends SpeakeasyBase {
    error?: Dtcer404ApplicationJSONErrorEnum;
    errorDescription?: Dtcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dtcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Dtcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Dtcer401ApplicationJSON extends SpeakeasyBase {
    error?: Dtcer401ApplicationJSONErrorEnum;
    errorDescription?: Dtcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dtcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Dtcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Dtcer400ApplicationJSON extends SpeakeasyBase {
    error?: Dtcer400ApplicationJSONErrorEnum;
    errorDescription?: Dtcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class DtcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    dtcer400ApplicationJSONObject?: Dtcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    dtcer401ApplicationJSONObject?: Dtcer401ApplicationJSON;
    /**
     * No record found
     */
    dtcer404ApplicationJSONObject?: Dtcer404ApplicationJSON;
    /**
     * Internal server error
     */
    dtcer500ApplicationJSONObject?: Dtcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    dtcer502ApplicationJSONObject?: Dtcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    dtcer503ApplicationJSONObject?: Dtcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    dtcer504ApplicationJSONObject?: Dtcer504ApplicationJSON;
}
