import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DataSubjectRightExportStatusRequestSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DataSubjectRightExportStatusRequestRequest extends SpeakeasyBase {
    /**
     * Unique request ID (GUID)
     */
    token: string;
}
export declare enum DataSubjectRightExportStatusRequestDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DataSubjectRightExportStatusRequestDefaultApplicationJSONError extends SpeakeasyBase {
    code: DataSubjectRightExportStatusRequestDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class DataSubjectRightExportStatusRequestDefaultApplicationJSON extends SpeakeasyBase {
    error: DataSubjectRightExportStatusRequestDefaultApplicationJSONError;
}
/**
 * Status of data subject right request
 */
export declare enum DataSubjectRightExportStatusRequest200ApplicationJSONStatusEnum {
    None = "None",
    Created = "Created",
    Queued = "Queued",
    InProgress = "InProgress",
    Completed = "Completed",
    Failed = "Failed"
}
/**
 * Data subject right export request status successfully retrieved.
 */
export declare class DataSubjectRightExportStatusRequest200ApplicationJSON extends SpeakeasyBase {
    /**
     * explanation message of the status
     */
    message: string;
    /**
     * Azure Storage shared access signature (SAS) URL for exported user data.
     */
    sasUrl?: string;
    /**
     * Whether Azure Storage shared access signature (SAS) URL has expired or not.
     */
    sasUrlExpired?: boolean;
    /**
     * Status of data subject right request
     */
    status: DataSubjectRightExportStatusRequest200ApplicationJSONStatusEnum;
}
export declare class DataSubjectRightExportStatusRequestResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Data subject right export request status successfully retrieved.
     */
    dataSubjectRightExportStatusRequest200ApplicationJSONObject?: DataSubjectRightExportStatusRequest200ApplicationJSON;
    /**
     * Error code with reason
     */
    dataSubjectRightExportStatusRequestDefaultApplicationJSONObject?: DataSubjectRightExportStatusRequestDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
