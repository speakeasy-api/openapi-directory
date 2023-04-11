import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class AdcrdSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class AdcrdRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * PRN No.
     */
    prnNo: string;
    /**
     * Request ID
     */
    requestId: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum AdcrdRequestBodyFormatEnum {
    Xml = "xml",
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class AdcrdRequestBody extends SpeakeasyBase {
    certificateParameters?: AdcrdRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: AdcrdRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Adcrd504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Adcrd504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Adcrd504ApplicationJSON extends SpeakeasyBase {
    error?: Adcrd504ApplicationJSONErrorEnum;
    errorDescription?: Adcrd504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Adcrd503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Adcrd503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Adcrd503ApplicationJSON extends SpeakeasyBase {
    error?: Adcrd503ApplicationJSONErrorEnum;
    errorDescription?: Adcrd503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Adcrd502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Adcrd502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Adcrd502ApplicationJSON extends SpeakeasyBase {
    error?: Adcrd502ApplicationJSONErrorEnum;
    errorDescription?: Adcrd502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Adcrd500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Adcrd500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Adcrd500ApplicationJSON extends SpeakeasyBase {
    error?: Adcrd500ApplicationJSONErrorEnum;
    errorDescription?: Adcrd500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Adcrd404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Adcrd404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Adcrd404ApplicationJSON extends SpeakeasyBase {
    error?: Adcrd404ApplicationJSONErrorEnum;
    errorDescription?: Adcrd404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Adcrd401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Adcrd401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Adcrd401ApplicationJSON extends SpeakeasyBase {
    error?: Adcrd401ApplicationJSONErrorEnum;
    errorDescription?: Adcrd401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Adcrd400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Adcrd400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Adcrd400ApplicationJSON extends SpeakeasyBase {
    error?: Adcrd400ApplicationJSONErrorEnum;
    errorDescription?: Adcrd400ApplicationJSONErrorDescriptionEnum;
}
export declare class AdcrdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    adcrd400ApplicationJSONObject?: Adcrd400ApplicationJSON;
    /**
     * Unauthorized access
     */
    adcrd401ApplicationJSONObject?: Adcrd401ApplicationJSON;
    /**
     * No record found
     */
    adcrd404ApplicationJSONObject?: Adcrd404ApplicationJSON;
    /**
     * Internal server error
     */
    adcrd500ApplicationJSONObject?: Adcrd500ApplicationJSON;
    /**
     * Bad gateway
     */
    adcrd502ApplicationJSONObject?: Adcrd502ApplicationJSON;
    /**
     * Service unavailable
     */
    adcrd503ApplicationJSONObject?: Adcrd503ApplicationJSON;
    /**
     * Gateway timeout
     */
    adcrd504ApplicationJSONObject?: Adcrd504ApplicationJSON;
}
