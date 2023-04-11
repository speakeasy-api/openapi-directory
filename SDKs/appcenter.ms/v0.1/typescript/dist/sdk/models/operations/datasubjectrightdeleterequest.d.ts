import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum DataSubjectRightDeleteRequestDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DataSubjectRightDeleteRequestDefaultApplicationJSONError extends SpeakeasyBase {
    code: DataSubjectRightDeleteRequestDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class DataSubjectRightDeleteRequestDefaultApplicationJSON extends SpeakeasyBase {
    error: DataSubjectRightDeleteRequestDefaultApplicationJSONError;
}
/**
 * Data subject right delete request has been accepted.
 */
export declare class DataSubjectRightDeleteRequest202ApplicationJSON extends SpeakeasyBase {
    /**
     * ISO 8601 format timestamp of when request was created.
     */
    createdAt: Date;
    /**
     * Unique request identifier
     */
    token: string;
}
export declare class DataSubjectRightDeleteRequestResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Data subject right delete request has been accepted.
     */
    dataSubjectRightDeleteRequest202ApplicationJSONObject?: DataSubjectRightDeleteRequest202ApplicationJSON;
    /**
     * Error code with reason
     */
    dataSubjectRightDeleteRequestDefaultApplicationJSONObject?: DataSubjectRightDeleteRequestDefaultApplicationJSON;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
