import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ImporterExporterCodeVerificationAPISecurity extends SpeakeasyBase {
    apiKey?: string;
    clientId?: string;
}
export declare class ImporterExporterCodeVerificationAPIRequest extends SpeakeasyBase {
    /**
     * Importer-Exporter code
     */
    iec: string;
}
export declare enum ImporterExporterCodeVerificationApi504ApplicationJSONErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum ImporterExporterCodeVerificationApi504ApplicationJSONErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
/**
 * Gateway Timeout
 */
export declare class ImporterExporterCodeVerificationApi504ApplicationJSON extends SpeakeasyBase {
    error?: ImporterExporterCodeVerificationApi504ApplicationJSONErrorEnum;
    errorDescription?: ImporterExporterCodeVerificationApi504ApplicationJSONErrorDescriptionEnum;
}
export declare enum ImporterExporterCodeVerificationApi503ApplicationJSONErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum ImporterExporterCodeVerificationApi503ApplicationJSONErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
/**
 * Service Unavailable
 */
export declare class ImporterExporterCodeVerificationApi503ApplicationJSON extends SpeakeasyBase {
    error?: ImporterExporterCodeVerificationApi503ApplicationJSONErrorEnum;
    errorDescription?: ImporterExporterCodeVerificationApi503ApplicationJSONErrorDescriptionEnum;
}
export declare enum ImporterExporterCodeVerificationApi502ApplicationJSONErrorEnum {
    BadGateway = "bad gateway"
}
export declare enum ImporterExporterCodeVerificationApi502ApplicationJSONErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response."
}
/**
 * Bad Gateway
 */
export declare class ImporterExporterCodeVerificationApi502ApplicationJSON extends SpeakeasyBase {
    error?: ImporterExporterCodeVerificationApi502ApplicationJSONErrorEnum;
    errorDescription?: ImporterExporterCodeVerificationApi502ApplicationJSONErrorDescriptionEnum;
}
export declare enum ImporterExporterCodeVerificationApi500ApplicationJSONErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum ImporterExporterCodeVerificationApi500ApplicationJSONErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
/**
 * Internal Server Error
 */
export declare class ImporterExporterCodeVerificationApi500ApplicationJSON extends SpeakeasyBase {
    error?: ImporterExporterCodeVerificationApi500ApplicationJSONErrorEnum;
    errorDescription?: ImporterExporterCodeVerificationApi500ApplicationJSONErrorDescriptionEnum;
}
export declare enum ImporterExporterCodeVerificationApi404ApplicationJSONErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "Url not found"
}
export declare enum ImporterExporterCodeVerificationApi404ApplicationJSONErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourAPIUrlOrPathIsIncorrect = "Your API url or path is incorrect."
}
/**
 * Not Found
 */
export declare class ImporterExporterCodeVerificationApi404ApplicationJSON extends SpeakeasyBase {
    error?: ImporterExporterCodeVerificationApi404ApplicationJSONErrorEnum;
    errorDescription?: ImporterExporterCodeVerificationApi404ApplicationJSONErrorDescriptionEnum;
}
export declare enum ImporterExporterCodeVerificationApi401ApplicationJSONErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum ImporterExporterCodeVerificationApi401ApplicationJSONErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisAPI = "You are not authorized to use this API"
}
/**
 * Authentication failed
 */
export declare class ImporterExporterCodeVerificationApi401ApplicationJSON extends SpeakeasyBase {
    error?: ImporterExporterCodeVerificationApi401ApplicationJSONErrorEnum;
    errorDescription?: ImporterExporterCodeVerificationApi401ApplicationJSONErrorDescriptionEnum;
}
export declare enum ImporterExporterCodeVerificationApi400ApplicationJSONErrorEnum {
    InvalidParameter = "invalid parameter",
    MissingParameter = "missing parameter"
}
export declare enum ImporterExporterCodeVerificationApi400ApplicationJSONErrorDescriptionEnum {
    BadRequest = "Bad request",
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters."
}
/**
 * Bad Request
 */
export declare class ImporterExporterCodeVerificationApi400ApplicationJSON extends SpeakeasyBase {
    error?: ImporterExporterCodeVerificationApi400ApplicationJSONErrorEnum;
    errorDescription?: ImporterExporterCodeVerificationApi400ApplicationJSONErrorDescriptionEnum;
}
export declare class ImporterExporterCodeVerificationApi200ApplicationJSONBranch extends SpeakeasyBase {
    badd1: string;
    badd2: string;
    branchCode: string;
    city: string;
    pin: string;
    state: string;
}
export declare class ImporterExporterCodeVerificationApi200ApplicationJSONDirectors extends SpeakeasyBase {
    name: string;
}
/**
 * successful operation
 */
export declare class ImporterExporterCodeVerificationApi200ApplicationJSON extends SpeakeasyBase {
    addressLine1: string;
    addressLine2: string;
    branch: ImporterExporterCodeVerificationApi200ApplicationJSONBranch[];
    city: string;
    dataAsOn: Date;
    directors: ImporterExporterCodeVerificationApi200ApplicationJSONDirectors[];
    entityName: string;
    exporterType: string;
    iec: string;
    iecIssueDate: string;
    iecModificationDate: string;
    iecStatus: string;
    natureOfConcern: string;
    pan: string;
    pin: string;
    state: string;
}
export declare class ImporterExporterCodeVerificationAPIResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * successful operation
     */
    importerExporterCodeVerificationAPI200ApplicationJSONObject?: ImporterExporterCodeVerificationApi200ApplicationJSON;
    /**
     * Bad Request
     */
    importerExporterCodeVerificationAPI400ApplicationJSONObject?: ImporterExporterCodeVerificationApi400ApplicationJSON;
    /**
     * Authentication failed
     */
    importerExporterCodeVerificationAPI401ApplicationJSONObject?: ImporterExporterCodeVerificationApi401ApplicationJSON;
    /**
     * Not Found
     */
    importerExporterCodeVerificationAPI404ApplicationJSONObject?: ImporterExporterCodeVerificationApi404ApplicationJSON;
    /**
     * Internal Server Error
     */
    importerExporterCodeVerificationAPI500ApplicationJSONObject?: ImporterExporterCodeVerificationApi500ApplicationJSON;
    /**
     * Bad Gateway
     */
    importerExporterCodeVerificationAPI502ApplicationJSONObject?: ImporterExporterCodeVerificationApi502ApplicationJSON;
    /**
     * Service Unavailable
     */
    importerExporterCodeVerificationAPI503ApplicationJSONObject?: ImporterExporterCodeVerificationApi503ApplicationJSON;
    /**
     * Gateway Timeout
     */
    importerExporterCodeVerificationAPI504ApplicationJSONObject?: ImporterExporterCodeVerificationApi504ApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
