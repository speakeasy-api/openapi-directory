import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RpcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class RpcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Registration No
     */
    registrationNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum RpcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class RpcerRequestBody extends SpeakeasyBase {
    certificateParameters?: RpcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: RpcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Rpcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Rpcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Rpcer504ApplicationJSON extends SpeakeasyBase {
    error?: Rpcer504ApplicationJSONErrorEnum;
    errorDescription?: Rpcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rpcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Rpcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Rpcer503ApplicationJSON extends SpeakeasyBase {
    error?: Rpcer503ApplicationJSONErrorEnum;
    errorDescription?: Rpcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rpcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Rpcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Rpcer502ApplicationJSON extends SpeakeasyBase {
    error?: Rpcer502ApplicationJSONErrorEnum;
    errorDescription?: Rpcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rpcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Rpcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Rpcer500ApplicationJSON extends SpeakeasyBase {
    error?: Rpcer500ApplicationJSONErrorEnum;
    errorDescription?: Rpcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rpcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Rpcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Rpcer404ApplicationJSON extends SpeakeasyBase {
    error?: Rpcer404ApplicationJSONErrorEnum;
    errorDescription?: Rpcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rpcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Rpcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Rpcer401ApplicationJSON extends SpeakeasyBase {
    error?: Rpcer401ApplicationJSONErrorEnum;
    errorDescription?: Rpcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rpcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Rpcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Rpcer400ApplicationJSON extends SpeakeasyBase {
    error?: Rpcer400ApplicationJSONErrorEnum;
    errorDescription?: Rpcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class RpcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    rpcer400ApplicationJSONObject?: Rpcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    rpcer401ApplicationJSONObject?: Rpcer401ApplicationJSON;
    /**
     * No record found
     */
    rpcer404ApplicationJSONObject?: Rpcer404ApplicationJSON;
    /**
     * Internal server error
     */
    rpcer500ApplicationJSONObject?: Rpcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    rpcer502ApplicationJSONObject?: Rpcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    rpcer503ApplicationJSONObject?: Rpcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    rpcer504ApplicationJSONObject?: Rpcer504ApplicationJSON;
}
