import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PecerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class PecerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * Gender - M for male, F for female and O for other
     */
    gender: string;
    /**
     * PAN No
     */
    pan: string;
    /**
     * PPO No
     */
    ppo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum PecerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class PecerRequestBody extends SpeakeasyBase {
    certificateParameters?: PecerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: PecerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Pecer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Pecer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Pecer504ApplicationJSON extends SpeakeasyBase {
    error?: Pecer504ApplicationJSONErrorEnum;
    errorDescription?: Pecer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pecer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Pecer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Pecer503ApplicationJSON extends SpeakeasyBase {
    error?: Pecer503ApplicationJSONErrorEnum;
    errorDescription?: Pecer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pecer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Pecer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Pecer502ApplicationJSON extends SpeakeasyBase {
    error?: Pecer502ApplicationJSONErrorEnum;
    errorDescription?: Pecer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pecer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Pecer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Pecer500ApplicationJSON extends SpeakeasyBase {
    error?: Pecer500ApplicationJSONErrorEnum;
    errorDescription?: Pecer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pecer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Pecer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Pecer404ApplicationJSON extends SpeakeasyBase {
    error?: Pecer404ApplicationJSONErrorEnum;
    errorDescription?: Pecer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pecer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Pecer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Pecer401ApplicationJSON extends SpeakeasyBase {
    error?: Pecer401ApplicationJSONErrorEnum;
    errorDescription?: Pecer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pecer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Pecer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Pecer400ApplicationJSON extends SpeakeasyBase {
    error?: Pecer400ApplicationJSONErrorEnum;
    errorDescription?: Pecer400ApplicationJSONErrorDescriptionEnum;
}
export declare class PecerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    pecer400ApplicationJSONObject?: Pecer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    pecer401ApplicationJSONObject?: Pecer401ApplicationJSON;
    /**
     * No record found
     */
    pecer404ApplicationJSONObject?: Pecer404ApplicationJSON;
    /**
     * Internal server error
     */
    pecer500ApplicationJSONObject?: Pecer500ApplicationJSON;
    /**
     * Bad gateway
     */
    pecer502ApplicationJSONObject?: Pecer502ApplicationJSON;
    /**
     * Service unavailable
     */
    pecer503ApplicationJSONObject?: Pecer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    pecer504ApplicationJSONObject?: Pecer504ApplicationJSON;
}
