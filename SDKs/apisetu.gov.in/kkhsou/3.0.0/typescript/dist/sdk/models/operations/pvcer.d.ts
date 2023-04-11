import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PvcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class PvcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Enrollment No
     */
    enrolNo: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * Year
     */
    year: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum PvcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class PvcerRequestBody extends SpeakeasyBase {
    certificateParameters?: PvcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: PvcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Pvcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Pvcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Pvcer504ApplicationJSON extends SpeakeasyBase {
    error?: Pvcer504ApplicationJSONErrorEnum;
    errorDescription?: Pvcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pvcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Pvcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Pvcer503ApplicationJSON extends SpeakeasyBase {
    error?: Pvcer503ApplicationJSONErrorEnum;
    errorDescription?: Pvcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pvcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Pvcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Pvcer502ApplicationJSON extends SpeakeasyBase {
    error?: Pvcer502ApplicationJSONErrorEnum;
    errorDescription?: Pvcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pvcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Pvcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Pvcer500ApplicationJSON extends SpeakeasyBase {
    error?: Pvcer500ApplicationJSONErrorEnum;
    errorDescription?: Pvcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pvcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Pvcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Pvcer404ApplicationJSON extends SpeakeasyBase {
    error?: Pvcer404ApplicationJSONErrorEnum;
    errorDescription?: Pvcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pvcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Pvcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Pvcer401ApplicationJSON extends SpeakeasyBase {
    error?: Pvcer401ApplicationJSONErrorEnum;
    errorDescription?: Pvcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Pvcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Pvcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Pvcer400ApplicationJSON extends SpeakeasyBase {
    error?: Pvcer400ApplicationJSONErrorEnum;
    errorDescription?: Pvcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class PvcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    pvcer400ApplicationJSONObject?: Pvcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    pvcer401ApplicationJSONObject?: Pvcer401ApplicationJSON;
    /**
     * No record found
     */
    pvcer404ApplicationJSONObject?: Pvcer404ApplicationJSON;
    /**
     * Internal server error
     */
    pvcer500ApplicationJSONObject?: Pvcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    pvcer502ApplicationJSONObject?: Pvcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    pvcer503ApplicationJSONObject?: Pvcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    pvcer504ApplicationJSONObject?: Pvcer504ApplicationJSON;
}
