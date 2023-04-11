import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CocerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class CocerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * cert_type
     */
    certType: string;
    /**
     * company_name
     */
    companyName: string;
    /**
     * reg_no
     */
    regNo: string;
    /**
     * sector
     */
    sector: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum CocerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class CocerRequestBody extends SpeakeasyBase {
    certificateParameters?: CocerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: CocerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Cocer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Cocer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Cocer504ApplicationJSON extends SpeakeasyBase {
    error?: Cocer504ApplicationJSONErrorEnum;
    errorDescription?: Cocer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cocer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Cocer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Cocer503ApplicationJSON extends SpeakeasyBase {
    error?: Cocer503ApplicationJSONErrorEnum;
    errorDescription?: Cocer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cocer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Cocer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Cocer502ApplicationJSON extends SpeakeasyBase {
    error?: Cocer502ApplicationJSONErrorEnum;
    errorDescription?: Cocer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cocer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Cocer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Cocer500ApplicationJSON extends SpeakeasyBase {
    error?: Cocer500ApplicationJSONErrorEnum;
    errorDescription?: Cocer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cocer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Cocer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Cocer404ApplicationJSON extends SpeakeasyBase {
    error?: Cocer404ApplicationJSONErrorEnum;
    errorDescription?: Cocer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cocer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Cocer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Cocer401ApplicationJSON extends SpeakeasyBase {
    error?: Cocer401ApplicationJSONErrorEnum;
    errorDescription?: Cocer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cocer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Cocer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Cocer400ApplicationJSON extends SpeakeasyBase {
    error?: Cocer400ApplicationJSONErrorEnum;
    errorDescription?: Cocer400ApplicationJSONErrorDescriptionEnum;
}
export declare class CocerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    cocer400ApplicationJSONObject?: Cocer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    cocer401ApplicationJSONObject?: Cocer401ApplicationJSON;
    /**
     * No record found
     */
    cocer404ApplicationJSONObject?: Cocer404ApplicationJSON;
    /**
     * Internal server error
     */
    cocer500ApplicationJSONObject?: Cocer500ApplicationJSON;
    /**
     * Bad gateway
     */
    cocer502ApplicationJSONObject?: Cocer502ApplicationJSON;
    /**
     * Service unavailable
     */
    cocer503ApplicationJSONObject?: Cocer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    cocer504ApplicationJSONObject?: Cocer504ApplicationJSON;
}
