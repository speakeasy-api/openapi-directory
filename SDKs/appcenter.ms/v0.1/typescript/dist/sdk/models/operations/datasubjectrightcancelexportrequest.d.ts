import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DataSubjectRightCancelExportRequestSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DataSubjectRightCancelExportRequestRequest extends SpeakeasyBase {
    /**
     * Unique request ID (GUID)
     */
    token: string;
}
export declare enum DataSubjectRightCancelExportRequestDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DataSubjectRightCancelExportRequestDefaultApplicationJSONError extends SpeakeasyBase {
    code: DataSubjectRightCancelExportRequestDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class DataSubjectRightCancelExportRequestDefaultApplicationJSON extends SpeakeasyBase {
    error: DataSubjectRightCancelExportRequestDefaultApplicationJSONError;
}
export declare enum DataSubjectRightCancelExportRequest503ApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DataSubjectRightCancelExportRequest503ApplicationJSONError extends SpeakeasyBase {
    code: DataSubjectRightCancelExportRequest503ApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Cancel export request cannot be processed yet.
 */
export declare class DataSubjectRightCancelExportRequest503ApplicationJSON extends SpeakeasyBase {
    error: DataSubjectRightCancelExportRequest503ApplicationJSONError;
}
/**
 * Data subject right cancel export request has been accepted.
 */
export declare class DataSubjectRightCancelExportRequest202ApplicationJSON extends SpeakeasyBase {
    /**
     * ISO 8601 format timestamp of when request was created.
     */
    createdAt: Date;
    /**
     * Unique request identifier
     */
    token: string;
}
export declare class DataSubjectRightCancelExportRequestResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Data subject right cancel export request has been accepted.
     */
    dataSubjectRightCancelExportRequest202ApplicationJSONObject?: DataSubjectRightCancelExportRequest202ApplicationJSON;
    /**
     * Cancel export request cannot be processed yet.
     */
    dataSubjectRightCancelExportRequest503ApplicationJSONObject?: DataSubjectRightCancelExportRequest503ApplicationJSON;
    /**
     * Error code with reason
     */
    dataSubjectRightCancelExportRequestDefaultApplicationJSONObject?: DataSubjectRightCancelExportRequestDefaultApplicationJSON;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
