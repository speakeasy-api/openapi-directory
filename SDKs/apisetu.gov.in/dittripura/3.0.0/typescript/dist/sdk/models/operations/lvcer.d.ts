import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class LvcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class LvcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Reference No.
     */
    refNo: string;
    /**
     * Token No.
     */
    tokenNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum LvcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class LvcerRequestBody extends SpeakeasyBase {
    certificateParameters?: LvcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: LvcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Lvcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Lvcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Lvcer504ApplicationJSON extends SpeakeasyBase {
    error?: Lvcer504ApplicationJSONErrorEnum;
    errorDescription?: Lvcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lvcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Lvcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Lvcer503ApplicationJSON extends SpeakeasyBase {
    error?: Lvcer503ApplicationJSONErrorEnum;
    errorDescription?: Lvcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lvcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Lvcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Lvcer502ApplicationJSON extends SpeakeasyBase {
    error?: Lvcer502ApplicationJSONErrorEnum;
    errorDescription?: Lvcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lvcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Lvcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Lvcer500ApplicationJSON extends SpeakeasyBase {
    error?: Lvcer500ApplicationJSONErrorEnum;
    errorDescription?: Lvcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lvcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Lvcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Lvcer404ApplicationJSON extends SpeakeasyBase {
    error?: Lvcer404ApplicationJSONErrorEnum;
    errorDescription?: Lvcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lvcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Lvcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Lvcer401ApplicationJSON extends SpeakeasyBase {
    error?: Lvcer401ApplicationJSONErrorEnum;
    errorDescription?: Lvcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Lvcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Lvcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Lvcer400ApplicationJSON extends SpeakeasyBase {
    error?: Lvcer400ApplicationJSONErrorEnum;
    errorDescription?: Lvcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class LvcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    lvcer400ApplicationJSONObject?: Lvcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    lvcer401ApplicationJSONObject?: Lvcer401ApplicationJSON;
    /**
     * No record found
     */
    lvcer404ApplicationJSONObject?: Lvcer404ApplicationJSON;
    /**
     * Internal server error
     */
    lvcer500ApplicationJSONObject?: Lvcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    lvcer502ApplicationJSONObject?: Lvcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    lvcer503ApplicationJSONObject?: Lvcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    lvcer504ApplicationJSONObject?: Lvcer504ApplicationJSON;
}
