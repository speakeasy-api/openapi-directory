import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CripcSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class CripcRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * Gender - M for male, F for female and O for other
     */
    gender: string;
    /**
     * PolicyNo
     */
    policyNo: string;
    /**
     * PolicyType
     */
    policyType: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum CripcRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class CripcRequestBody extends SpeakeasyBase {
    certificateParameters?: CripcRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: CripcRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Cripc504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Cripc504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Cripc504ApplicationJSON extends SpeakeasyBase {
    error?: Cripc504ApplicationJSONErrorEnum;
    errorDescription?: Cripc504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cripc503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Cripc503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Cripc503ApplicationJSON extends SpeakeasyBase {
    error?: Cripc503ApplicationJSONErrorEnum;
    errorDescription?: Cripc503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cripc502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Cripc502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Cripc502ApplicationJSON extends SpeakeasyBase {
    error?: Cripc502ApplicationJSONErrorEnum;
    errorDescription?: Cripc502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cripc500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Cripc500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Cripc500ApplicationJSON extends SpeakeasyBase {
    error?: Cripc500ApplicationJSONErrorEnum;
    errorDescription?: Cripc500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cripc404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Cripc404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Cripc404ApplicationJSON extends SpeakeasyBase {
    error?: Cripc404ApplicationJSONErrorEnum;
    errorDescription?: Cripc404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cripc401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Cripc401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Cripc401ApplicationJSON extends SpeakeasyBase {
    error?: Cripc401ApplicationJSONErrorEnum;
    errorDescription?: Cripc401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Cripc400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Cripc400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Cripc400ApplicationJSON extends SpeakeasyBase {
    error?: Cripc400ApplicationJSONErrorEnum;
    errorDescription?: Cripc400ApplicationJSONErrorDescriptionEnum;
}
export declare class CripcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    cripc400ApplicationJSONObject?: Cripc400ApplicationJSON;
    /**
     * Unauthorized access
     */
    cripc401ApplicationJSONObject?: Cripc401ApplicationJSON;
    /**
     * No record found
     */
    cripc404ApplicationJSONObject?: Cripc404ApplicationJSON;
    /**
     * Internal server error
     */
    cripc500ApplicationJSONObject?: Cripc500ApplicationJSON;
    /**
     * Bad gateway
     */
    cripc502ApplicationJSONObject?: Cripc502ApplicationJSON;
    /**
     * Service unavailable
     */
    cripc503ApplicationJSONObject?: Cripc503ApplicationJSON;
    /**
     * Gateway timeout
     */
    cripc504ApplicationJSONObject?: Cripc504ApplicationJSON;
}
