import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VhtaxSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class VhtaxRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Aadhaar number
     */
    uid: string;
    /**
     * Chassis No
     */
    chasisNo: string;
    /**
     * Vehicle Registration No
     */
    regNo: string;
    /**
     * Son / Wife / Daughter of
     */
    swdName: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum VhtaxRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class VhtaxRequestBody extends SpeakeasyBase {
    certificateParameters?: VhtaxRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: VhtaxRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Vhtax504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Vhtax504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Vhtax504ApplicationJSON extends SpeakeasyBase {
    error?: Vhtax504ApplicationJSONErrorEnum;
    errorDescription?: Vhtax504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vhtax503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Vhtax503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Vhtax503ApplicationJSON extends SpeakeasyBase {
    error?: Vhtax503ApplicationJSONErrorEnum;
    errorDescription?: Vhtax503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vhtax502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Vhtax502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Vhtax502ApplicationJSON extends SpeakeasyBase {
    error?: Vhtax502ApplicationJSONErrorEnum;
    errorDescription?: Vhtax502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vhtax500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Vhtax500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Vhtax500ApplicationJSON extends SpeakeasyBase {
    error?: Vhtax500ApplicationJSONErrorEnum;
    errorDescription?: Vhtax500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vhtax404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Vhtax404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Vhtax404ApplicationJSON extends SpeakeasyBase {
    error?: Vhtax404ApplicationJSONErrorEnum;
    errorDescription?: Vhtax404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vhtax401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Vhtax401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Vhtax401ApplicationJSON extends SpeakeasyBase {
    error?: Vhtax401ApplicationJSONErrorEnum;
    errorDescription?: Vhtax401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vhtax400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Vhtax400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Vhtax400ApplicationJSON extends SpeakeasyBase {
    error?: Vhtax400ApplicationJSONErrorEnum;
    errorDescription?: Vhtax400ApplicationJSONErrorDescriptionEnum;
}
export declare class VhtaxResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    vhtax400ApplicationJSONObject?: Vhtax400ApplicationJSON;
    /**
     * Unauthorized access
     */
    vhtax401ApplicationJSONObject?: Vhtax401ApplicationJSON;
    /**
     * No record found
     */
    vhtax404ApplicationJSONObject?: Vhtax404ApplicationJSON;
    /**
     * Internal server error
     */
    vhtax500ApplicationJSONObject?: Vhtax500ApplicationJSON;
    /**
     * Bad gateway
     */
    vhtax502ApplicationJSONObject?: Vhtax502ApplicationJSON;
    /**
     * Service unavailable
     */
    vhtax503ApplicationJSONObject?: Vhtax503ApplicationJSON;
    /**
     * Gateway timeout
     */
    vhtax504ApplicationJSONObject?: Vhtax504ApplicationJSON;
}
