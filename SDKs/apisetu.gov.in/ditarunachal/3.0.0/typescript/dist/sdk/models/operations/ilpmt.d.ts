import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IlpmtSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class IlpmtRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Full name
     */
    fullName: string;
    /**
     * Aadhaar number
     */
    uid: string;
    /**
     * Application ID
     */
    eILPAppId: string;
    /**
     * Contact Number
     */
    eILPContactNumber: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum IlpmtRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class IlpmtRequestBody extends SpeakeasyBase {
    certificateParameters?: IlpmtRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: IlpmtRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Ilpmt504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ilpmt504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Ilpmt504ApplicationJSON extends SpeakeasyBase {
    error?: Ilpmt504ApplicationJSONErrorEnum;
    errorDescription?: Ilpmt504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ilpmt503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ilpmt503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Ilpmt503ApplicationJSON extends SpeakeasyBase {
    error?: Ilpmt503ApplicationJSONErrorEnum;
    errorDescription?: Ilpmt503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ilpmt502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ilpmt502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Ilpmt502ApplicationJSON extends SpeakeasyBase {
    error?: Ilpmt502ApplicationJSONErrorEnum;
    errorDescription?: Ilpmt502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ilpmt500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ilpmt500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Ilpmt500ApplicationJSON extends SpeakeasyBase {
    error?: Ilpmt500ApplicationJSONErrorEnum;
    errorDescription?: Ilpmt500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ilpmt404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ilpmt404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Ilpmt404ApplicationJSON extends SpeakeasyBase {
    error?: Ilpmt404ApplicationJSONErrorEnum;
    errorDescription?: Ilpmt404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ilpmt401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ilpmt401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Ilpmt401ApplicationJSON extends SpeakeasyBase {
    error?: Ilpmt401ApplicationJSONErrorEnum;
    errorDescription?: Ilpmt401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Ilpmt400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ilpmt400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Ilpmt400ApplicationJSON extends SpeakeasyBase {
    error?: Ilpmt400ApplicationJSONErrorEnum;
    errorDescription?: Ilpmt400ApplicationJSONErrorDescriptionEnum;
}
export declare class IlpmtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    ilpmt400ApplicationJSONObject?: Ilpmt400ApplicationJSON;
    /**
     * Unauthorized access
     */
    ilpmt401ApplicationJSONObject?: Ilpmt401ApplicationJSON;
    /**
     * No record found
     */
    ilpmt404ApplicationJSONObject?: Ilpmt404ApplicationJSON;
    /**
     * Internal server error
     */
    ilpmt500ApplicationJSONObject?: Ilpmt500ApplicationJSON;
    /**
     * Bad gateway
     */
    ilpmt502ApplicationJSONObject?: Ilpmt502ApplicationJSON;
    /**
     * Service unavailable
     */
    ilpmt503ApplicationJSONObject?: Ilpmt503ApplicationJSON;
    /**
     * Gateway timeout
     */
    ilpmt504ApplicationJSONObject?: Ilpmt504ApplicationJSON;
}
