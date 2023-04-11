import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SvcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class SvcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * Roll No.
     */
    rroll: string;
    /**
     * Roll Code
     */
    rrollCode: string;
    /**
     * Year
     */
    year: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum SvcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class SvcerRequestBody extends SpeakeasyBase {
    certificateParameters?: SvcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: SvcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Svcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Svcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Svcer504ApplicationJSON extends SpeakeasyBase {
    error?: Svcer504ApplicationJSONErrorEnum;
    errorDescription?: Svcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Svcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Svcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Svcer503ApplicationJSON extends SpeakeasyBase {
    error?: Svcer503ApplicationJSONErrorEnum;
    errorDescription?: Svcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Svcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Svcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Svcer502ApplicationJSON extends SpeakeasyBase {
    error?: Svcer502ApplicationJSONErrorEnum;
    errorDescription?: Svcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Svcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Svcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Svcer500ApplicationJSON extends SpeakeasyBase {
    error?: Svcer500ApplicationJSONErrorEnum;
    errorDescription?: Svcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Svcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Svcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Svcer404ApplicationJSON extends SpeakeasyBase {
    error?: Svcer404ApplicationJSONErrorEnum;
    errorDescription?: Svcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Svcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Svcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Svcer401ApplicationJSON extends SpeakeasyBase {
    error?: Svcer401ApplicationJSONErrorEnum;
    errorDescription?: Svcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Svcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Svcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Svcer400ApplicationJSON extends SpeakeasyBase {
    error?: Svcer400ApplicationJSONErrorEnum;
    errorDescription?: Svcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class SvcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    svcer400ApplicationJSONObject?: Svcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    svcer401ApplicationJSONObject?: Svcer401ApplicationJSON;
    /**
     * No record found
     */
    svcer404ApplicationJSONObject?: Svcer404ApplicationJSON;
    /**
     * Internal server error
     */
    svcer500ApplicationJSONObject?: Svcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    svcer502ApplicationJSONObject?: Svcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    svcer503ApplicationJSONObject?: Svcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    svcer504ApplicationJSONObject?: Svcer504ApplicationJSON;
}
