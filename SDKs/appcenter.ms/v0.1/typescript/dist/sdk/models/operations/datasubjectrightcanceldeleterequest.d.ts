import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DataSubjectRightCancelDeleteRequestSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DataSubjectRightCancelDeleteRequestRequestBody extends SpeakeasyBase {
    /**
     * Email used for cancel delete with x-authz-bypass headers
     */
    email: string;
}
export declare class DataSubjectRightCancelDeleteRequestRequest extends SpeakeasyBase {
    requestBody?: DataSubjectRightCancelDeleteRequestRequestBody;
    /**
     * Unique request ID (GUID)
     */
    token: string;
}
export declare enum DataSubjectRightCancelDeleteRequestDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DataSubjectRightCancelDeleteRequestDefaultApplicationJSONError extends SpeakeasyBase {
    code: DataSubjectRightCancelDeleteRequestDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class DataSubjectRightCancelDeleteRequestDefaultApplicationJSON extends SpeakeasyBase {
    error: DataSubjectRightCancelDeleteRequestDefaultApplicationJSONError;
}
export declare enum DataSubjectRightCancelDeleteRequest503ApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DataSubjectRightCancelDeleteRequest503ApplicationJSONError extends SpeakeasyBase {
    code: DataSubjectRightCancelDeleteRequest503ApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Cancel delete request cannot be processed yet.
 */
export declare class DataSubjectRightCancelDeleteRequest503ApplicationJSON extends SpeakeasyBase {
    error: DataSubjectRightCancelDeleteRequest503ApplicationJSONError;
}
/**
 * Data subject right cancel delete request has been accepted.
 */
export declare class DataSubjectRightCancelDeleteRequest202ApplicationJSON extends SpeakeasyBase {
    /**
     * ISO 8601 format timestamp of when request was created.
     */
    createdAt: Date;
    /**
     * Unique request identifier
     */
    token: string;
}
export declare class DataSubjectRightCancelDeleteRequestResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Data subject right cancel delete request has been accepted.
     */
    dataSubjectRightCancelDeleteRequest202ApplicationJSONObject?: DataSubjectRightCancelDeleteRequest202ApplicationJSON;
    /**
     * Cancel delete request cannot be processed yet.
     */
    dataSubjectRightCancelDeleteRequest503ApplicationJSONObject?: DataSubjectRightCancelDeleteRequest503ApplicationJSON;
    /**
     * Error code with reason
     */
    dataSubjectRightCancelDeleteRequestDefaultApplicationJSONObject?: DataSubjectRightCancelDeleteRequestDefaultApplicationJSON;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
