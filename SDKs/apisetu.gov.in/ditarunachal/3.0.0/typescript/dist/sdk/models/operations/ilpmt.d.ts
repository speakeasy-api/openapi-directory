import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IlpmtRequestBodyCertificateParameters extends SpeakeasyBase {
    fullName: string;
    uid: string;
    eILPAppId: string;
    eILPContactNumber: string;
}
export declare enum IlpmtRequestBodyFormatEnum {
    Pdf = "pdf"
}
export declare class IlpmtRequestBody extends SpeakeasyBase {
    certificateParameters?: IlpmtRequestBodyCertificateParameters;
    consentArtifact?: any;
    format: IlpmtRequestBodyFormatEnum;
    txnId: string;
}
export declare class IlpmtSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    clientId: shared.SchemeClientId;
}
export declare enum Ilpmt400ApplicationJsonErrorEnum {
    MissingParameter = "missing_parameter",
    InvalidParameter = "invalid_parameter",
    InvalidFormat = "invalid_format",
    InvalidTxnid = "invalid_txnid",
    InvalidConsentid = "invalid_consentid"
}
export declare enum Ilpmt400ApplicationJsonErrorDescriptionEnum {
    PleaseProvideAllMandatoryParameters = "Please provide all mandatory parameters",
    BadRequest = "Bad request",
    TheFormatParameterIsInvalid = "The format parameter is invalid",
    TheTxnIdParameterMustBeInUuidFormat = "The txnId parameter must be in UUID format",
    TheConsentIdParameterMustBeInUuidFormat = "The consentId parameter must be in UUID format"
}
export declare class Ilpmt400ApplicationJson extends SpeakeasyBase {
    error?: Ilpmt400ApplicationJsonErrorEnum;
    errorDescription?: Ilpmt400ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ilpmt401ApplicationJsonErrorEnum {
    InvalidAuthentication = "invalid_authentication",
    InvalidAuthorization = "invalid_authorization"
}
export declare enum Ilpmt401ApplicationJsonErrorDescriptionEnum {
    AuthenticationFailed = "Authentication failed",
    YouAreNotAuthorizedToUseThisApi = "You are not authorized to use this API"
}
export declare class Ilpmt401ApplicationJson extends SpeakeasyBase {
    error?: Ilpmt401ApplicationJsonErrorEnum;
    errorDescription?: Ilpmt401ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ilpmt404ApplicationJsonErrorEnum {
    RecordNotFound = "record_not_found",
    UrlNotFound = "url_not_found"
}
export declare enum Ilpmt404ApplicationJsonErrorDescriptionEnum {
    NoRecordFound = "No record found",
    YourApiUrlOrPathIsIncorrect = "Your API url or path is incorrect"
}
export declare class Ilpmt404ApplicationJson extends SpeakeasyBase {
    error?: Ilpmt404ApplicationJsonErrorEnum;
    errorDescription?: Ilpmt404ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ilpmt500ApplicationJsonErrorEnum {
    InternalServerError = "internal_server_error"
}
export declare enum Ilpmt500ApplicationJsonErrorDescriptionEnum {
    InternalServerError = "Internal server error"
}
export declare class Ilpmt500ApplicationJson extends SpeakeasyBase {
    error?: Ilpmt500ApplicationJsonErrorEnum;
    errorDescription?: Ilpmt500ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ilpmt502ApplicationJsonErrorEnum {
    BadGatewy = "bad_gatewy"
}
export declare enum Ilpmt502ApplicationJsonErrorDescriptionEnum {
    PublisherServiceReturnedAnInvalidResponse = "Publisher service returned an invalid response"
}
export declare class Ilpmt502ApplicationJson extends SpeakeasyBase {
    error?: Ilpmt502ApplicationJsonErrorEnum;
    errorDescription?: Ilpmt502ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ilpmt503ApplicationJsonErrorEnum {
    ServiceUnavailable = "service_unavailable"
}
export declare enum Ilpmt503ApplicationJsonErrorDescriptionEnum {
    PublisherServiceIsTemporarilyUnavailable = "Publisher service is temporarily unavailable"
}
export declare class Ilpmt503ApplicationJson extends SpeakeasyBase {
    error?: Ilpmt503ApplicationJsonErrorEnum;
    errorDescription?: Ilpmt503ApplicationJsonErrorDescriptionEnum;
}
export declare enum Ilpmt504ApplicationJsonErrorEnum {
    GatewayTimeout = "gateway_timeout"
}
export declare enum Ilpmt504ApplicationJsonErrorDescriptionEnum {
    PublisherServiceDidNotRespondInTime = "Publisher service did not respond in time"
}
export declare class Ilpmt504ApplicationJson extends SpeakeasyBase {
    error?: Ilpmt504ApplicationJsonErrorEnum;
    errorDescription?: Ilpmt504ApplicationJsonErrorDescriptionEnum;
}
export declare class IlpmtRequest extends SpeakeasyBase {
    request?: IlpmtRequestBody;
    security: IlpmtSecurity;
}
export declare class IlpmtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    ilpmt400ApplicationJSONObject?: Ilpmt400ApplicationJson;
    ilpmt401ApplicationJSONObject?: Ilpmt401ApplicationJson;
    ilpmt404ApplicationJSONObject?: Ilpmt404ApplicationJson;
    ilpmt500ApplicationJSONObject?: Ilpmt500ApplicationJson;
    ilpmt502ApplicationJSONObject?: Ilpmt502ApplicationJson;
    ilpmt503ApplicationJSONObject?: Ilpmt503ApplicationJson;
    ilpmt504ApplicationJSONObject?: Ilpmt504ApplicationJson;
}
