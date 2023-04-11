import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CfmstSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class CfmstRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Aadhaar number
     */
    uid: string;
    /**
     * Roll No
     */
    rollno: string;
    /**
     * Year
     */
    year: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum CfmstRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class CfmstRequestBody extends SpeakeasyBase {
    certificateParameters?: CfmstRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: CfmstRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Cfmst504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Cfmst504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Cfmst504ApplicationJSON extends SpeakeasyBase {
    error?: Cfmst504ApplicationJSONErrorEnum;
    errorDescription?: Cfmst504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cfmst503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Cfmst503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Cfmst503ApplicationJSON extends SpeakeasyBase {
    error?: Cfmst503ApplicationJSONErrorEnum;
    errorDescription?: Cfmst503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cfmst502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Cfmst502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Cfmst502ApplicationJSON extends SpeakeasyBase {
    error?: Cfmst502ApplicationJSONErrorEnum;
    errorDescription?: Cfmst502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cfmst500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Cfmst500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Cfmst500ApplicationJSON extends SpeakeasyBase {
    error?: Cfmst500ApplicationJSONErrorEnum;
    errorDescription?: Cfmst500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cfmst404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Cfmst404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Cfmst404ApplicationJSON extends SpeakeasyBase {
    error?: Cfmst404ApplicationJSONErrorEnum;
    errorDescription?: Cfmst404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cfmst401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Cfmst401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Cfmst401ApplicationJSON extends SpeakeasyBase {
    error?: Cfmst401ApplicationJSONErrorEnum;
    errorDescription?: Cfmst401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cfmst400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Cfmst400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Cfmst400ApplicationJSON extends SpeakeasyBase {
    error?: Cfmst400ApplicationJSONErrorEnum;
    errorDescription?: Cfmst400ApplicationJSONErrorDescriptionEnum;
}
export declare class CfmstResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    cfmst400ApplicationJSONObject?: Cfmst400ApplicationJSON;
    /**
     * Unauthorized access
     */
    cfmst401ApplicationJSONObject?: Cfmst401ApplicationJSON;
    /**
     * No record found
     */
    cfmst404ApplicationJSONObject?: Cfmst404ApplicationJSON;
    /**
     * Internal server error
     */
    cfmst500ApplicationJSONObject?: Cfmst500ApplicationJSON;
    /**
     * Bad gateway
     */
    cfmst502ApplicationJSONObject?: Cfmst502ApplicationJSON;
    /**
     * Service unavailable
     */
    cfmst503ApplicationJSONObject?: Cfmst503ApplicationJSON;
    /**
     * Gateway timeout
     */
    cfmst504ApplicationJSONObject?: Cfmst504ApplicationJSON;
}
