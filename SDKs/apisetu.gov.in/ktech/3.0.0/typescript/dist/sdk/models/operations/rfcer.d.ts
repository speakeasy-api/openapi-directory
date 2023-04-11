import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RfcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class RfcerRequestBodyCertificateParameters extends SpeakeasyBase {
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
export declare enum RfcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class RfcerRequestBody extends SpeakeasyBase {
    certificateParameters?: RfcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: RfcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Rfcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Rfcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Rfcer504ApplicationJSON extends SpeakeasyBase {
    error?: Rfcer504ApplicationJSONErrorEnum;
    errorDescription?: Rfcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rfcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Rfcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Rfcer503ApplicationJSON extends SpeakeasyBase {
    error?: Rfcer503ApplicationJSONErrorEnum;
    errorDescription?: Rfcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rfcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Rfcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Rfcer502ApplicationJSON extends SpeakeasyBase {
    error?: Rfcer502ApplicationJSONErrorEnum;
    errorDescription?: Rfcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rfcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Rfcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Rfcer500ApplicationJSON extends SpeakeasyBase {
    error?: Rfcer500ApplicationJSONErrorEnum;
    errorDescription?: Rfcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rfcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Rfcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Rfcer404ApplicationJSON extends SpeakeasyBase {
    error?: Rfcer404ApplicationJSONErrorEnum;
    errorDescription?: Rfcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rfcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Rfcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Rfcer401ApplicationJSON extends SpeakeasyBase {
    error?: Rfcer401ApplicationJSONErrorEnum;
    errorDescription?: Rfcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Rfcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Rfcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Rfcer400ApplicationJSON extends SpeakeasyBase {
    error?: Rfcer400ApplicationJSONErrorEnum;
    errorDescription?: Rfcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class RfcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    rfcer400ApplicationJSONObject?: Rfcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    rfcer401ApplicationJSONObject?: Rfcer401ApplicationJSON;
    /**
     * No record found
     */
    rfcer404ApplicationJSONObject?: Rfcer404ApplicationJSON;
    /**
     * Internal server error
     */
    rfcer500ApplicationJSONObject?: Rfcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    rfcer502ApplicationJSONObject?: Rfcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    rfcer503ApplicationJSONObject?: Rfcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    rfcer504ApplicationJSONObject?: Rfcer504ApplicationJSON;
}
