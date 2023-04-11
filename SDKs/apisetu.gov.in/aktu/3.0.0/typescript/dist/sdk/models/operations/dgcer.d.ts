import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DgcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class DgcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Enrollment No
     */
    enrollmentNo: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * Roll No
     */
    rollNo: string;
    /**
     * Aadhaar number
     */
    uid: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum DgcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class DgcerRequestBody extends SpeakeasyBase {
    certificateParameters?: DgcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: DgcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Dgcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Dgcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Dgcer504ApplicationJSON extends SpeakeasyBase {
    error?: Dgcer504ApplicationJSONErrorEnum;
    errorDescription?: Dgcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dgcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Dgcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Dgcer503ApplicationJSON extends SpeakeasyBase {
    error?: Dgcer503ApplicationJSONErrorEnum;
    errorDescription?: Dgcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dgcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Dgcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Dgcer502ApplicationJSON extends SpeakeasyBase {
    error?: Dgcer502ApplicationJSONErrorEnum;
    errorDescription?: Dgcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dgcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Dgcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Dgcer500ApplicationJSON extends SpeakeasyBase {
    error?: Dgcer500ApplicationJSONErrorEnum;
    errorDescription?: Dgcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dgcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Dgcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Dgcer404ApplicationJSON extends SpeakeasyBase {
    error?: Dgcer404ApplicationJSONErrorEnum;
    errorDescription?: Dgcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dgcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Dgcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Dgcer401ApplicationJSON extends SpeakeasyBase {
    error?: Dgcer401ApplicationJSONErrorEnum;
    errorDescription?: Dgcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Dgcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Dgcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Dgcer400ApplicationJSON extends SpeakeasyBase {
    error?: Dgcer400ApplicationJSONErrorEnum;
    errorDescription?: Dgcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class DgcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    dgcer400ApplicationJSONObject?: Dgcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    dgcer401ApplicationJSONObject?: Dgcer401ApplicationJSON;
    /**
     * No record found
     */
    dgcer404ApplicationJSONObject?: Dgcer404ApplicationJSON;
    /**
     * Internal server error
     */
    dgcer500ApplicationJSONObject?: Dgcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    dgcer502ApplicationJSONObject?: Dgcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    dgcer503ApplicationJSONObject?: Dgcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    dgcer504ApplicationJSONObject?: Dgcer504ApplicationJSON;
}
