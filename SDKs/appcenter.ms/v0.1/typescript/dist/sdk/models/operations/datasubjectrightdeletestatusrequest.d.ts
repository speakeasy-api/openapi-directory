import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DataSubjectRightDeleteStatusRequestSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DataSubjectRightDeleteStatusRequestRequest extends SpeakeasyBase {
    /**
     * Email used for delete with x-authz-bypass headers
     */
    email: string;
    /**
     * Unique request ID (GUID)
     */
    token: string;
}
export declare enum DataSubjectRightDeleteStatusRequestDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DataSubjectRightDeleteStatusRequestDefaultApplicationJSONError extends SpeakeasyBase {
    code: DataSubjectRightDeleteStatusRequestDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class DataSubjectRightDeleteStatusRequestDefaultApplicationJSON extends SpeakeasyBase {
    error: DataSubjectRightDeleteStatusRequestDefaultApplicationJSONError;
}
/**
 * Status of data subject right request
 */
export declare enum DataSubjectRightDeleteStatusRequest200ApplicationJSONStatusEnum {
    None = "None",
    Created = "Created",
    Queued = "Queued",
    InProgress = "InProgress",
    Completed = "Completed",
    Failed = "Failed"
}
/**
 * Data subject right delete request status successfully retrieved.
 */
export declare class DataSubjectRightDeleteStatusRequest200ApplicationJSON extends SpeakeasyBase {
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
    status: DataSubjectRightDeleteStatusRequest200ApplicationJSONStatusEnum;
}
export declare class DataSubjectRightDeleteStatusRequestResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Data subject right delete request status successfully retrieved.
     */
    dataSubjectRightDeleteStatusRequest200ApplicationJSONObject?: DataSubjectRightDeleteStatusRequest200ApplicationJSON;
    /**
     * Error code with reason
     */
    dataSubjectRightDeleteStatusRequestDefaultApplicationJSONObject?: DataSubjectRightDeleteStatusRequestDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
