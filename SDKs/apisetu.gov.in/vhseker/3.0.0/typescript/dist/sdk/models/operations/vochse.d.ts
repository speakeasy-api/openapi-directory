import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class VochseSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class VochseRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * Enter Regno
     */
    regno: string;
    /**
     * Enter Year
     */
    year: string;
    /**
     * Enter Exam Type
     */
    type: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum VochseRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class VochseRequestBody extends SpeakeasyBase {
    certificateParameters?: VochseRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: VochseRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Vochse504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Vochse504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Vochse504ApplicationJSON extends SpeakeasyBase {
    error?: Vochse504ApplicationJSONErrorEnum;
    errorDescription?: Vochse504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vochse503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Vochse503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Vochse503ApplicationJSON extends SpeakeasyBase {
    error?: Vochse503ApplicationJSONErrorEnum;
    errorDescription?: Vochse503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vochse502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Vochse502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Vochse502ApplicationJSON extends SpeakeasyBase {
    error?: Vochse502ApplicationJSONErrorEnum;
    errorDescription?: Vochse502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vochse500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Vochse500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Vochse500ApplicationJSON extends SpeakeasyBase {
    error?: Vochse500ApplicationJSONErrorEnum;
    errorDescription?: Vochse500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vochse404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Vochse404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Vochse404ApplicationJSON extends SpeakeasyBase {
    error?: Vochse404ApplicationJSONErrorEnum;
    errorDescription?: Vochse404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vochse401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Vochse401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Vochse401ApplicationJSON extends SpeakeasyBase {
    error?: Vochse401ApplicationJSONErrorEnum;
    errorDescription?: Vochse401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Vochse400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Vochse400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Vochse400ApplicationJSON extends SpeakeasyBase {
    error?: Vochse400ApplicationJSONErrorEnum;
    errorDescription?: Vochse400ApplicationJSONErrorDescriptionEnum;
}
export declare class VochseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    vochse400ApplicationJSONObject?: Vochse400ApplicationJSON;
    /**
     * Unauthorized access
     */
    vochse401ApplicationJSONObject?: Vochse401ApplicationJSON;
    /**
     * No record found
     */
    vochse404ApplicationJSONObject?: Vochse404ApplicationJSON;
    /**
     * Internal server error
     */
    vochse500ApplicationJSONObject?: Vochse500ApplicationJSON;
    /**
     * Bad gateway
     */
    vochse502ApplicationJSONObject?: Vochse502ApplicationJSON;
    /**
     * Service unavailable
     */
    vochse503ApplicationJSONObject?: Vochse503ApplicationJSON;
    /**
     * Gateway timeout
     */
    vochse504ApplicationJSONObject?: Vochse504ApplicationJSON;
}
