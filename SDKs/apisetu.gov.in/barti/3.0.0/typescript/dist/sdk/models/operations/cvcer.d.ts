import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CvcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class CvcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * VC No
     */
    vcNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum CvcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class CvcerRequestBody extends SpeakeasyBase {
    certificateParameters?: CvcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: CvcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Cvcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Cvcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Cvcer504ApplicationJSON extends SpeakeasyBase {
    error?: Cvcer504ApplicationJSONErrorEnum;
    errorDescription?: Cvcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cvcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Cvcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Cvcer503ApplicationJSON extends SpeakeasyBase {
    error?: Cvcer503ApplicationJSONErrorEnum;
    errorDescription?: Cvcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cvcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Cvcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Cvcer502ApplicationJSON extends SpeakeasyBase {
    error?: Cvcer502ApplicationJSONErrorEnum;
    errorDescription?: Cvcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cvcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Cvcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Cvcer500ApplicationJSON extends SpeakeasyBase {
    error?: Cvcer500ApplicationJSONErrorEnum;
    errorDescription?: Cvcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cvcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Cvcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Cvcer404ApplicationJSON extends SpeakeasyBase {
    error?: Cvcer404ApplicationJSONErrorEnum;
    errorDescription?: Cvcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cvcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Cvcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Cvcer401ApplicationJSON extends SpeakeasyBase {
    error?: Cvcer401ApplicationJSONErrorEnum;
    errorDescription?: Cvcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cvcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Cvcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Cvcer400ApplicationJSON extends SpeakeasyBase {
    error?: Cvcer400ApplicationJSONErrorEnum;
    errorDescription?: Cvcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class CvcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    cvcer400ApplicationJSONObject?: Cvcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    cvcer401ApplicationJSONObject?: Cvcer401ApplicationJSON;
    /**
     * No record found
     */
    cvcer404ApplicationJSONObject?: Cvcer404ApplicationJSON;
    /**
     * Internal server error
     */
    cvcer500ApplicationJSONObject?: Cvcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    cvcer502ApplicationJSONObject?: Cvcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    cvcer503ApplicationJSONObject?: Cvcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    cvcer504ApplicationJSONObject?: Cvcer504ApplicationJSON;
}
