import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsDeleteSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DistributionGroupsDeleteRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the distribution group
     */
    distributionGroupName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum DistributionGroupsDeleteDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DistributionGroupsDeleteDefaultApplicationJSONError extends SpeakeasyBase {
    code: DistributionGroupsDeleteDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class DistributionGroupsDeleteDefaultApplicationJSON extends SpeakeasyBase {
    error: DistributionGroupsDeleteDefaultApplicationJSONError;
}
export declare class DistributionGroupsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    distributionGroupsDeleteDefaultApplicationJSONObject?: DistributionGroupsDeleteDefaultApplicationJSON;
}
