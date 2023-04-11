import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrfndSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class PrfndRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Account No./PPO No.
     */
    acNo: string;
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum PrfndRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class PrfndRequestBody extends SpeakeasyBase {
    certificateParameters?: PrfndRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: PrfndRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Prfnd504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Prfnd504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Prfnd504ApplicationJSON extends SpeakeasyBase {
    error?: Prfnd504ApplicationJSONErrorEnum;
    errorDescription?: Prfnd504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Prfnd503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Prfnd503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Prfnd503ApplicationJSON extends SpeakeasyBase {
    error?: Prfnd503ApplicationJSONErrorEnum;
    errorDescription?: Prfnd503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Prfnd502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Prfnd502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Prfnd502ApplicationJSON extends SpeakeasyBase {
    error?: Prfnd502ApplicationJSONErrorEnum;
    errorDescription?: Prfnd502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Prfnd500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Prfnd500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Prfnd500ApplicationJSON extends SpeakeasyBase {
    error?: Prfnd500ApplicationJSONErrorEnum;
    errorDescription?: Prfnd500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Prfnd404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Prfnd404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Prfnd404ApplicationJSON extends SpeakeasyBase {
    error?: Prfnd404ApplicationJSONErrorEnum;
    errorDescription?: Prfnd404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Prfnd401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Prfnd401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Prfnd401ApplicationJSON extends SpeakeasyBase {
    error?: Prfnd401ApplicationJSONErrorEnum;
    errorDescription?: Prfnd401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Prfnd400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Prfnd400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Prfnd400ApplicationJSON extends SpeakeasyBase {
    error?: Prfnd400ApplicationJSONErrorEnum;
    errorDescription?: Prfnd400ApplicationJSONErrorDescriptionEnum;
}
export declare class PrfndResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    prfnd400ApplicationJSONObject?: Prfnd400ApplicationJSON;
    /**
     * Unauthorized access
     */
    prfnd401ApplicationJSONObject?: Prfnd401ApplicationJSON;
    /**
     * No record found
     */
    prfnd404ApplicationJSONObject?: Prfnd404ApplicationJSON;
    /**
     * Internal server error
     */
    prfnd500ApplicationJSONObject?: Prfnd500ApplicationJSON;
    /**
     * Bad gateway
     */
    prfnd502ApplicationJSONObject?: Prfnd502ApplicationJSON;
    /**
     * Service unavailable
     */
    prfnd503ApplicationJSONObject?: Prfnd503ApplicationJSON;
    /**
     * Gateway timeout
     */
    prfnd504ApplicationJSONObject?: Prfnd504ApplicationJSON;
}
