import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DncerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class DncerRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum DncerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class DncerRequestBody extends SpeakeasyBase {
    certificateParameters?: DncerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: DncerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Dncer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Dncer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Dncer504ApplicationJSON extends SpeakeasyBase {
    error?: Dncer504ApplicationJSONErrorEnum;
    errorDescription?: Dncer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dncer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Dncer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Dncer503ApplicationJSON extends SpeakeasyBase {
    error?: Dncer503ApplicationJSONErrorEnum;
    errorDescription?: Dncer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dncer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Dncer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Dncer502ApplicationJSON extends SpeakeasyBase {
    error?: Dncer502ApplicationJSONErrorEnum;
    errorDescription?: Dncer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dncer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Dncer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Dncer500ApplicationJSON extends SpeakeasyBase {
    error?: Dncer500ApplicationJSONErrorEnum;
    errorDescription?: Dncer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dncer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Dncer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Dncer404ApplicationJSON extends SpeakeasyBase {
    error?: Dncer404ApplicationJSONErrorEnum;
    errorDescription?: Dncer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dncer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Dncer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Dncer401ApplicationJSON extends SpeakeasyBase {
    error?: Dncer401ApplicationJSONErrorEnum;
    errorDescription?: Dncer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dncer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Dncer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Dncer400ApplicationJSON extends SpeakeasyBase {
    error?: Dncer400ApplicationJSONErrorEnum;
    errorDescription?: Dncer400ApplicationJSONErrorDescriptionEnum;
}
export declare class DncerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    dncer400ApplicationJSONObject?: Dncer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    dncer401ApplicationJSONObject?: Dncer401ApplicationJSON;
    /**
     * No record found
     */
    dncer404ApplicationJSONObject?: Dncer404ApplicationJSON;
    /**
     * Internal server error
     */
    dncer500ApplicationJSONObject?: Dncer500ApplicationJSON;
    /**
     * Bad gateway
     */
    dncer502ApplicationJSONObject?: Dncer502ApplicationJSON;
    /**
     * Service unavailable
     */
    dncer503ApplicationJSONObject?: Dncer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    dncer504ApplicationJSONObject?: Dncer504ApplicationJSON;
}
