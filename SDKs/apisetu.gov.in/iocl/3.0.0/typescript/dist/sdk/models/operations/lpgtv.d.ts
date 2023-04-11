import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LpgtvSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class LpgtvRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Aadhaar number
     */
    uid: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum LpgtvRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class LpgtvRequestBody extends SpeakeasyBase {
    certificateParameters?: LpgtvRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: LpgtvRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Lpgtv504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Lpgtv504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Lpgtv504ApplicationJSON extends SpeakeasyBase {
    error?: Lpgtv504ApplicationJSONErrorEnum;
    errorDescription?: Lpgtv504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lpgtv503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Lpgtv503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Lpgtv503ApplicationJSON extends SpeakeasyBase {
    error?: Lpgtv503ApplicationJSONErrorEnum;
    errorDescription?: Lpgtv503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lpgtv502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Lpgtv502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Lpgtv502ApplicationJSON extends SpeakeasyBase {
    error?: Lpgtv502ApplicationJSONErrorEnum;
    errorDescription?: Lpgtv502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lpgtv500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Lpgtv500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Lpgtv500ApplicationJSON extends SpeakeasyBase {
    error?: Lpgtv500ApplicationJSONErrorEnum;
    errorDescription?: Lpgtv500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lpgtv404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Lpgtv404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Lpgtv404ApplicationJSON extends SpeakeasyBase {
    error?: Lpgtv404ApplicationJSONErrorEnum;
    errorDescription?: Lpgtv404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lpgtv401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Lpgtv401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Lpgtv401ApplicationJSON extends SpeakeasyBase {
    error?: Lpgtv401ApplicationJSONErrorEnum;
    errorDescription?: Lpgtv401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lpgtv400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Lpgtv400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Lpgtv400ApplicationJSON extends SpeakeasyBase {
    error?: Lpgtv400ApplicationJSONErrorEnum;
    errorDescription?: Lpgtv400ApplicationJSONErrorDescriptionEnum;
}
export declare class LpgtvResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    lpgtv400ApplicationJSONObject?: Lpgtv400ApplicationJSON;
    /**
     * Unauthorized access
     */
    lpgtv401ApplicationJSONObject?: Lpgtv401ApplicationJSON;
    /**
     * No record found
     */
    lpgtv404ApplicationJSONObject?: Lpgtv404ApplicationJSON;
    /**
     * Internal server error
     */
    lpgtv500ApplicationJSONObject?: Lpgtv500ApplicationJSON;
    /**
     * Bad gateway
     */
    lpgtv502ApplicationJSONObject?: Lpgtv502ApplicationJSON;
    /**
     * Service unavailable
     */
    lpgtv503ApplicationJSONObject?: Lpgtv503ApplicationJSON;
    /**
     * Gateway timeout
     */
    lpgtv504ApplicationJSONObject?: Lpgtv504ApplicationJSON;
}
