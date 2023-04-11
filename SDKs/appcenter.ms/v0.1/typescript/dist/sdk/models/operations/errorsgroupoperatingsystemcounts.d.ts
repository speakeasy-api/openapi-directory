import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsGroupOperatingSystemCountsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ErrorsGroupOperatingSystemCountsRequest extends SpeakeasyBase {
    /**
     * The maximum number of results to return. (0 will fetch all results till the max number.)
     */
    dollarTop?: number;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The id of the error group
     */
    errorGroupId: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum ErrorsGroupOperatingSystemCountsDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsGroupOperatingSystemCountsDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsGroupOperatingSystemCountsDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsGroupOperatingSystemCountsDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsGroupOperatingSystemCountsDefaultApplicationJSONError;
}
export declare class ErrorsGroupOperatingSystemCounts200ApplicationJSONOperatingSystems extends SpeakeasyBase {
    /**
     * count of OS
     */
    errorCount?: number;
    /**
     * OS name
     */
    operatingSystemName?: string;
}
/**
 * Top OSes with percentage in descending order
 */
export declare class ErrorsGroupOperatingSystemCounts200ApplicationJSON extends SpeakeasyBase {
    errorCount?: number;
    operatingSystems?: ErrorsGroupOperatingSystemCounts200ApplicationJSONOperatingSystems[];
}
export declare class ErrorsGroupOperatingSystemCountsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Top OSes with percentage in descending order
     */
    errorsGroupOperatingSystemCounts200ApplicationJSONObject?: ErrorsGroupOperatingSystemCounts200ApplicationJSON;
    /**
     * Error code with reason
     */
    errorsGroupOperatingSystemCountsDefaultApplicationJSONObject?: ErrorsGroupOperatingSystemCountsDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
