import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LcsagSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class LcsagRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * Registration Number
     */
    regNum: string;
    /**
     * Aadhaar number
     */
    uid: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum LcsagRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class LcsagRequestBody extends SpeakeasyBase {
    certificateParameters?: LcsagRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: LcsagRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Lcsag504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Lcsag504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Lcsag504ApplicationJSON extends SpeakeasyBase {
    error?: Lcsag504ApplicationJSONErrorEnum;
    errorDescription?: Lcsag504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lcsag503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Lcsag503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Lcsag503ApplicationJSON extends SpeakeasyBase {
    error?: Lcsag503ApplicationJSONErrorEnum;
    errorDescription?: Lcsag503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lcsag502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Lcsag502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Lcsag502ApplicationJSON extends SpeakeasyBase {
    error?: Lcsag502ApplicationJSONErrorEnum;
    errorDescription?: Lcsag502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lcsag500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Lcsag500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Lcsag500ApplicationJSON extends SpeakeasyBase {
    error?: Lcsag500ApplicationJSONErrorEnum;
    errorDescription?: Lcsag500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lcsag404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Lcsag404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Lcsag404ApplicationJSON extends SpeakeasyBase {
    error?: Lcsag404ApplicationJSONErrorEnum;
    errorDescription?: Lcsag404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lcsag401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Lcsag401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Lcsag401ApplicationJSON extends SpeakeasyBase {
    error?: Lcsag401ApplicationJSONErrorEnum;
    errorDescription?: Lcsag401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lcsag400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Lcsag400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Lcsag400ApplicationJSON extends SpeakeasyBase {
    error?: Lcsag400ApplicationJSONErrorEnum;
    errorDescription?: Lcsag400ApplicationJSONErrorDescriptionEnum;
}
export declare class LcsagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    lcsag400ApplicationJSONObject?: Lcsag400ApplicationJSON;
    /**
     * Unauthorized access
     */
    lcsag401ApplicationJSONObject?: Lcsag401ApplicationJSON;
    /**
     * No record found
     */
    lcsag404ApplicationJSONObject?: Lcsag404ApplicationJSON;
    /**
     * Internal server error
     */
    lcsag500ApplicationJSONObject?: Lcsag500ApplicationJSON;
    /**
     * Bad gateway
     */
    lcsag502ApplicationJSONObject?: Lcsag502ApplicationJSON;
    /**
     * Service unavailable
     */
    lcsag503ApplicationJSONObject?: Lcsag503ApplicationJSON;
    /**
     * Gateway timeout
     */
    lcsag504ApplicationJSONObject?: Lcsag504ApplicationJSON;
}
