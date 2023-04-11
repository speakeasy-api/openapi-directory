import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum DataSubjectRightExportRequestDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DataSubjectRightExportRequestDefaultApplicationJSONError extends SpeakeasyBase {
    code: DataSubjectRightExportRequestDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class DataSubjectRightExportRequestDefaultApplicationJSON extends SpeakeasyBase {
    error: DataSubjectRightExportRequestDefaultApplicationJSONError;
}
/**
 * Data subject right export request has been accepted.
 */
export declare class DataSubjectRightExportRequest202ApplicationJSON extends SpeakeasyBase {
    /**
     * ISO 8601 format timestamp of when request was created.
     */
    createdAt: Date;
    /**
     * Unique request identifier
     */
    token: string;
}
export declare class DataSubjectRightExportRequestResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Data subject right export request has been accepted.
     */
    dataSubjectRightExportRequest202ApplicationJSONObject?: DataSubjectRightExportRequest202ApplicationJSON;
    /**
     * Error code with reason
     */
    dataSubjectRightExportRequestDefaultApplicationJSONObject?: DataSubjectRightExportRequestDefaultApplicationJSON;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
