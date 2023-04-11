import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MicerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class MicerRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum MicerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class MicerRequestBody extends SpeakeasyBase {
    certificateParameters?: MicerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: MicerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Micer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Micer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Micer504ApplicationJSON extends SpeakeasyBase {
    error?: Micer504ApplicationJSONErrorEnum;
    errorDescription?: Micer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Micer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Micer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Micer503ApplicationJSON extends SpeakeasyBase {
    error?: Micer503ApplicationJSONErrorEnum;
    errorDescription?: Micer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Micer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Micer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Micer502ApplicationJSON extends SpeakeasyBase {
    error?: Micer502ApplicationJSONErrorEnum;
    errorDescription?: Micer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Micer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Micer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Micer500ApplicationJSON extends SpeakeasyBase {
    error?: Micer500ApplicationJSONErrorEnum;
    errorDescription?: Micer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Micer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Micer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Micer404ApplicationJSON extends SpeakeasyBase {
    error?: Micer404ApplicationJSONErrorEnum;
    errorDescription?: Micer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Micer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Micer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Micer401ApplicationJSON extends SpeakeasyBase {
    error?: Micer401ApplicationJSONErrorEnum;
    errorDescription?: Micer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Micer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Micer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Micer400ApplicationJSON extends SpeakeasyBase {
    error?: Micer400ApplicationJSONErrorEnum;
    errorDescription?: Micer400ApplicationJSONErrorDescriptionEnum;
}
export declare class MicerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    micer400ApplicationJSONObject?: Micer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    micer401ApplicationJSONObject?: Micer401ApplicationJSON;
    /**
     * No record found
     */
    micer404ApplicationJSONObject?: Micer404ApplicationJSON;
    /**
     * Internal server error
     */
    micer500ApplicationJSONObject?: Micer500ApplicationJSON;
    /**
     * Bad gateway
     */
    micer502ApplicationJSONObject?: Micer502ApplicationJSON;
    /**
     * Service unavailable
     */
    micer503ApplicationJSONObject?: Micer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    micer504ApplicationJSONObject?: Micer504ApplicationJSON;
}
