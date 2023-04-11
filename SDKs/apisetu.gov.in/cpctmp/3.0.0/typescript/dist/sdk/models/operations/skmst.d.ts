import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SkmstSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class SkmstRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * 10thRollNumber
     */
    txt10thRollNo: string;
    /**
     * Registration Number
     */
    txtCandidateAppSeq: string;
    /**
     * ExamDate
     */
    txtExamDate: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum SkmstRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class SkmstRequestBody extends SpeakeasyBase {
    certificateParameters?: SkmstRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: SkmstRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Skmst504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Skmst504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Skmst504ApplicationJSON extends SpeakeasyBase {
    error?: Skmst504ApplicationJSONErrorEnum;
    errorDescription?: Skmst504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Skmst503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Skmst503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Skmst503ApplicationJSON extends SpeakeasyBase {
    error?: Skmst503ApplicationJSONErrorEnum;
    errorDescription?: Skmst503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Skmst502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Skmst502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Skmst502ApplicationJSON extends SpeakeasyBase {
    error?: Skmst502ApplicationJSONErrorEnum;
    errorDescription?: Skmst502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Skmst500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Skmst500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Skmst500ApplicationJSON extends SpeakeasyBase {
    error?: Skmst500ApplicationJSONErrorEnum;
    errorDescription?: Skmst500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Skmst404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Skmst404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Skmst404ApplicationJSON extends SpeakeasyBase {
    error?: Skmst404ApplicationJSONErrorEnum;
    errorDescription?: Skmst404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Skmst401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Skmst401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Skmst401ApplicationJSON extends SpeakeasyBase {
    error?: Skmst401ApplicationJSONErrorEnum;
    errorDescription?: Skmst401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Skmst400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Skmst400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Skmst400ApplicationJSON extends SpeakeasyBase {
    error?: Skmst400ApplicationJSONErrorEnum;
    errorDescription?: Skmst400ApplicationJSONErrorDescriptionEnum;
}
export declare class SkmstResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    skmst400ApplicationJSONObject?: Skmst400ApplicationJSON;
    /**
     * Unauthorized access
     */
    skmst401ApplicationJSONObject?: Skmst401ApplicationJSON;
    /**
     * No record found
     */
    skmst404ApplicationJSONObject?: Skmst404ApplicationJSON;
    /**
     * Internal server error
     */
    skmst500ApplicationJSONObject?: Skmst500ApplicationJSON;
    /**
     * Bad gateway
     */
    skmst502ApplicationJSONObject?: Skmst502ApplicationJSON;
    /**
     * Service unavailable
     */
    skmst503ApplicationJSONObject?: Skmst503ApplicationJSON;
    /**
     * Gateway timeout
     */
    skmst504ApplicationJSONObject?: Skmst504ApplicationJSON;
}
