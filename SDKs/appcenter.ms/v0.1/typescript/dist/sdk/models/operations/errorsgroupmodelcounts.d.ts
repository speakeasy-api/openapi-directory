import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ErrorsGroupModelCountsSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class ErrorsGroupModelCountsRequest extends SpeakeasyBase {
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
export declare enum ErrorsGroupModelCountsDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class ErrorsGroupModelCountsDefaultApplicationJSONError extends SpeakeasyBase {
    code: ErrorsGroupModelCountsDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error code with reason
 */
export declare class ErrorsGroupModelCountsDefaultApplicationJSON extends SpeakeasyBase {
    error: ErrorsGroupModelCountsDefaultApplicationJSONError;
}
export declare class ErrorsGroupModelCounts200ApplicationJSONModels extends SpeakeasyBase {
    /**
     * count of errors in a model
     */
    errorCount?: number;
    /**
     * model code
     */
    modelCode?: string;
    /**
     * model name
     */
    modelName?: string;
}
/**
 * Top Models with percentage in descending order
 */
export declare class ErrorsGroupModelCounts200ApplicationJSON extends SpeakeasyBase {
    errorCount?: number;
    models?: ErrorsGroupModelCounts200ApplicationJSONModels[];
}
export declare class ErrorsGroupModelCountsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Top Models with percentage in descending order
     */
    errorsGroupModelCounts200ApplicationJSONObject?: ErrorsGroupModelCounts200ApplicationJSON;
    /**
     * Error code with reason
     */
    errorsGroupModelCountsDefaultApplicationJSONObject?: ErrorsGroupModelCountsDefaultApplicationJSON;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
