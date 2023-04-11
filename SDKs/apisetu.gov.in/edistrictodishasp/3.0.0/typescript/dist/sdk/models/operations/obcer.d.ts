import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ObcerSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class ObcerRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Reference No
     */
    refNo: string;
    /**
     * Token No
     */
    tokenNo: string;
    /**
     * Aadhaar number
     */
    uid: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum ObcerRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class ObcerRequestBody extends SpeakeasyBase {
    certificateParameters?: ObcerRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: ObcerRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Obcer504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Obcer504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Obcer504ApplicationJSON extends SpeakeasyBase {
    error?: Obcer504ApplicationJSONErrorEnum;
    errorDescription?: Obcer504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Obcer503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Obcer503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Obcer503ApplicationJSON extends SpeakeasyBase {
    error?: Obcer503ApplicationJSONErrorEnum;
    errorDescription?: Obcer503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Obcer502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Obcer502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Obcer502ApplicationJSON extends SpeakeasyBase {
    error?: Obcer502ApplicationJSONErrorEnum;
    errorDescription?: Obcer502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Obcer500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Obcer500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Obcer500ApplicationJSON extends SpeakeasyBase {
    error?: Obcer500ApplicationJSONErrorEnum;
    errorDescription?: Obcer500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Obcer404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Obcer404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Obcer404ApplicationJSON extends SpeakeasyBase {
    error?: Obcer404ApplicationJSONErrorEnum;
    errorDescription?: Obcer404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Obcer401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Obcer401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Obcer401ApplicationJSON extends SpeakeasyBase {
    error?: Obcer401ApplicationJSONErrorEnum;
    errorDescription?: Obcer401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Obcer400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Obcer400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Obcer400ApplicationJSON extends SpeakeasyBase {
    error?: Obcer400ApplicationJSONErrorEnum;
    errorDescription?: Obcer400ApplicationJSONErrorDescriptionEnum;
}
export declare class ObcerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    obcer400ApplicationJSONObject?: Obcer400ApplicationJSON;
    /**
     * Unauthorized access
     */
    obcer401ApplicationJSONObject?: Obcer401ApplicationJSON;
    /**
     * No record found
     */
    obcer404ApplicationJSONObject?: Obcer404ApplicationJSON;
    /**
     * Internal server error
     */
    obcer500ApplicationJSONObject?: Obcer500ApplicationJSON;
    /**
     * Bad gateway
     */
    obcer502ApplicationJSONObject?: Obcer502ApplicationJSON;
    /**
     * Service unavailable
     */
    obcer503ApplicationJSONObject?: Obcer503ApplicationJSON;
    /**
     * Gateway timeout
     */
    obcer504ApplicationJSONObject?: Obcer504ApplicationJSON;
}
