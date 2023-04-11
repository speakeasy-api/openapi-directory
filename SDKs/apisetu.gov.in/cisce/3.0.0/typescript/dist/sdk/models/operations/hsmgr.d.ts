import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class HsmgrSecurity extends SpeakeasyBase {
    apiKey: string;
    clientId: string;
}
export declare class HsmgrRequestBodyCertificateParameters extends SpeakeasyBase {
    /**
     * Candidate ID
     */
    cuid: string;
    /**
     * Date of birth in DD-MM-YYYY format
     */
    dob: string;
    /**
     * Full name
     */
    fullName: string;
    /**
     * Index Number
     */
    idxn: string;
    /**
     * Aadhaar number
     */
    uid: string;
    /**
     * Year Of Examination -YYYY
     */
    yoe: string;
}
/**
 * The format of the certificate in response.
 */
export declare enum HsmgrRequestBodyFormatEnum {
    Pdf = "pdf"
}
/**
 * Request format
 */
export declare class HsmgrRequestBody extends SpeakeasyBase {
    certificateParameters?: HsmgrRequestBodyCertificateParameters;
    consentArtifact?: shared.ConsentArtifactSchema;
    /**
     * The format of the certificate in response.
     */
    format: HsmgrRequestBodyFormatEnum;
    /**
     * A unique transaction id for this request in UUID format. It is used for tracking the request.
     */
    txnId: string;
}
export declare enum Hsmgr504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Hsmgr504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway timeout
 */
export declare class Hsmgr504ApplicationJSON extends SpeakeasyBase {
    error?: Hsmgr504ApplicationJSONErrorEnum;
    errorDescription?: Hsmgr504ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hsmgr503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Hsmgr503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service unavailable
 */
export declare class Hsmgr503ApplicationJSON extends SpeakeasyBase {
    error?: Hsmgr503ApplicationJSONErrorEnum;
    errorDescription?: Hsmgr503ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hsmgr502ApplicationJSONErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Hsmgr502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
/**
 * Bad gateway
 */
export declare class Hsmgr502ApplicationJSON extends SpeakeasyBase {
    error?: Hsmgr502ApplicationJSONErrorEnum;
    errorDescription?: Hsmgr502ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hsmgr500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Hsmgr500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal server error
 */
export declare class Hsmgr500ApplicationJSON extends SpeakeasyBase {
    error?: Hsmgr500ApplicationJSONErrorEnum;
    errorDescription?: Hsmgr500ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hsmgr404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Hsmgr404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
/**
 * No record found
 */
export declare class Hsmgr404ApplicationJSON extends SpeakeasyBase {
    error?: Hsmgr404ApplicationJSONErrorEnum;
    errorDescription?: Hsmgr404ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hsmgr401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Hsmgr401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Unauthorized access
 */
export declare class Hsmgr401ApplicationJSON extends SpeakeasyBase {
    error?: Hsmgr401ApplicationJSONErrorEnum;
    errorDescription?: Hsmgr401ApplicationJSONErrorDescriptionEnum;
}
export declare enum Hsmgr400ApplicationJSONErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Hsmgr400ApplicationJSONErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUUIDFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUUIDFormat = "The consentId parameter must be in UUID format"
}
/**
 * Bad request
 */
export declare class Hsmgr400ApplicationJSON extends SpeakeasyBase {
    error?: Hsmgr400ApplicationJSONErrorEnum;
    errorDescription?: Hsmgr400ApplicationJSONErrorDescriptionEnum;
}
export declare class HsmgrResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad request
     */
    hsmgr400ApplicationJSONObject?: Hsmgr400ApplicationJSON;
    /**
     * Unauthorized access
     */
    hsmgr401ApplicationJSONObject?: Hsmgr401ApplicationJSON;
    /**
     * No record found
     */
    hsmgr404ApplicationJSONObject?: Hsmgr404ApplicationJSON;
    /**
     * Internal server error
     */
    hsmgr500ApplicationJSONObject?: Hsmgr500ApplicationJSON;
    /**
     * Bad gateway
     */
    hsmgr502ApplicationJSONObject?: Hsmgr502ApplicationJSON;
    /**
     * Service unavailable
     */
    hsmgr503ApplicationJSONObject?: Hsmgr503ApplicationJSON;
    /**
     * Gateway timeout
     */
    hsmgr504ApplicationJSONObject?: Hsmgr504ApplicationJSON;
}
