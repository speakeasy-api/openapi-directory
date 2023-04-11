import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LpgsvSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class LpgsvRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * LPG ID
     */
    lpgid: string;
    /**
     * SV ID
     */
    svid: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum LpgsvRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class LpgsvRequestBody extends SpeakeasyBase {
    certificateParameters?: LpgsvRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: LpgsvRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Lpgsv504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Lpgsv504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Lpgsv504ApplicationJSON extends SpeakeasyBase {
    error?: Lpgsv504ApplicationJSONErrorEnum;
    errorDescription?: Lpgsv504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lpgsv503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Lpgsv503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Lpgsv503ApplicationJSON extends SpeakeasyBase {
    error?: Lpgsv503ApplicationJSONErrorEnum;
    errorDescription?: Lpgsv503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lpgsv502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Lpgsv502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Lpgsv502ApplicationJSON extends SpeakeasyBase {
    error?: Lpgsv502ApplicationJSONErrorEnum;
    errorDescription?: Lpgsv502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lpgsv500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Lpgsv500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Lpgsv500ApplicationJSON extends SpeakeasyBase {
    error?: Lpgsv500ApplicationJSONErrorEnum;
    errorDescription?: Lpgsv500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lpgsv404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Lpgsv404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Lpgsv404ApplicationJSON extends SpeakeasyBase {
    error?: Lpgsv404ApplicationJSONErrorEnum;
    errorDescription?: Lpgsv404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lpgsv401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Lpgsv401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Lpgsv401ApplicationJSON extends SpeakeasyBase {
    error?: Lpgsv401ApplicationJSONErrorEnum;
    errorDescription?: Lpgsv401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lpgsv400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Lpgsv400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Lpgsv400ApplicationJSON extends SpeakeasyBase {
    error?: Lpgsv400ApplicationJSONErrorEnum;
    errorDescription?: Lpgsv400ApplicationJSONErrorDescriptionEnum;
}
export declare class LpgsvResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    lpgsv400ApplicationJSONObject?: Lpgsv400ApplicationJSON;
    /**
     * Unauthorized access
     */
    lpgsv401ApplicationJSONObject?: Lpgsv401ApplicationJSON;
    /**
     * No record found
     */
    lpgsv404ApplicationJSONObject?: Lpgsv404ApplicationJSON;
    /**
     * Internal server error
     */
    lpgsv500ApplicationJSONObject?: Lpgsv500ApplicationJSON;
    /**
     * Bad gateway
     */
    lpgsv502ApplicationJSONObject?: Lpgsv502ApplicationJSON;
    /**
     * Service unavailable
     */
    lpgsv503ApplicationJSONObject?: Lpgsv503ApplicationJSON;
    /**
     * Gateway timeout
     */
    lpgsv504ApplicationJSONObject?: Lpgsv504ApplicationJSON;
}
