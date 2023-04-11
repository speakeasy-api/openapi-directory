import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IsoalSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class IsoalRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Reference No.
     */
    refNo: string;
    /**
     * Token No.
     */
    tokenNo: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum IsoalRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class IsoalRequestBody extends SpeakeasyBase {
    certificateParameters?: IsoalRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: IsoalRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Isoal504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Isoal504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Isoal504ApplicationJSON extends SpeakeasyBase {
    error?: Isoal504ApplicationJSONErrorEnum;
    errorDescription?: Isoal504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Isoal503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Isoal503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Isoal503ApplicationJSON extends SpeakeasyBase {
    error?: Isoal503ApplicationJSONErrorEnum;
    errorDescription?: Isoal503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Isoal502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Isoal502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Isoal502ApplicationJSON extends SpeakeasyBase {
    error?: Isoal502ApplicationJSONErrorEnum;
    errorDescription?: Isoal502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Isoal500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Isoal500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Isoal500ApplicationJSON extends SpeakeasyBase {
    error?: Isoal500ApplicationJSONErrorEnum;
    errorDescription?: Isoal500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Isoal404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Isoal404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Isoal404ApplicationJSON extends SpeakeasyBase {
    error?: Isoal404ApplicationJSONErrorEnum;
    errorDescription?: Isoal404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Isoal401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Isoal401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Isoal401ApplicationJSON extends SpeakeasyBase {
    error?: Isoal401ApplicationJSONErrorEnum;
    errorDescription?: Isoal401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Isoal400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Isoal400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Isoal400ApplicationJSON extends SpeakeasyBase {
    error?: Isoal400ApplicationJSONErrorEnum;
    errorDescription?: Isoal400ApplicationJSONErrorDescriptionEnum;
}
export declare class IsoalResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    isoal400ApplicationJSONObject?: Isoal400ApplicationJSON;
    /**
     * Unauthorized access
     */
    isoal401ApplicationJSONObject?: Isoal401ApplicationJSON;
    /**
     * No record found
     */
    isoal404ApplicationJSONObject?: Isoal404ApplicationJSON;
    /**
     * Internal server error
     */
    isoal500ApplicationJSONObject?: Isoal500ApplicationJSON;
    /**
     * Bad gateway
     */
    isoal502ApplicationJSONObject?: Isoal502ApplicationJSON;
    /**
     * Service unavailable
     */
    isoal503ApplicationJSONObject?: Isoal503ApplicationJSON;
    /**
     * Gateway timeout
     */
    isoal504ApplicationJSONObject?: Isoal504ApplicationJSON;
}
