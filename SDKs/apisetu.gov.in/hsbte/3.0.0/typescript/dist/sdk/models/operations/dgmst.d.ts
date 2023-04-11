import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DgmstSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class DgmstRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Student Roll Number
     */
    rroll: string;
    /**
     * Semester / Year
     */
    sem: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum DgmstRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class DgmstRequestBody extends SpeakeasyBase {
    certificateParameters?: DgmstRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: DgmstRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Dgmst504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Dgmst504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Dgmst504ApplicationJSON extends SpeakeasyBase {
    error?: Dgmst504ApplicationJSONErrorEnum;
    errorDescription?: Dgmst504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dgmst503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Dgmst503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Dgmst503ApplicationJSON extends SpeakeasyBase {
    error?: Dgmst503ApplicationJSONErrorEnum;
    errorDescription?: Dgmst503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dgmst502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Dgmst502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Dgmst502ApplicationJSON extends SpeakeasyBase {
    error?: Dgmst502ApplicationJSONErrorEnum;
    errorDescription?: Dgmst502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dgmst500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Dgmst500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Dgmst500ApplicationJSON extends SpeakeasyBase {
    error?: Dgmst500ApplicationJSONErrorEnum;
    errorDescription?: Dgmst500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dgmst404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Dgmst404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Dgmst404ApplicationJSON extends SpeakeasyBase {
    error?: Dgmst404ApplicationJSONErrorEnum;
    errorDescription?: Dgmst404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dgmst401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Dgmst401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Dgmst401ApplicationJSON extends SpeakeasyBase {
    error?: Dgmst401ApplicationJSONErrorEnum;
    errorDescription?: Dgmst401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dgmst400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Dgmst400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Dgmst400ApplicationJSON extends SpeakeasyBase {
    error?: Dgmst400ApplicationJSONErrorEnum;
    errorDescription?: Dgmst400ApplicationJSONErrorDescriptionEnum;
}
export declare class DgmstResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    dgmst400ApplicationJSONObject?: Dgmst400ApplicationJSON;
    /**
     * Unauthorized access
     */
    dgmst401ApplicationJSONObject?: Dgmst401ApplicationJSON;
    /**
     * No record found
     */
    dgmst404ApplicationJSONObject?: Dgmst404ApplicationJSON;
    /**
     * Internal server error
     */
    dgmst500ApplicationJSONObject?: Dgmst500ApplicationJSON;
    /**
     * Bad gateway
     */
    dgmst502ApplicationJSONObject?: Dgmst502ApplicationJSON;
    /**
     * Service unavailable
     */
    dgmst503ApplicationJSONObject?: Dgmst503ApplicationJSON;
    /**
     * Gateway timeout
     */
    dgmst504ApplicationJSONObject?: Dgmst504ApplicationJSON;
}
