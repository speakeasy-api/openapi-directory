import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsGetSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DistributionGroupsGetRequest extends SpeakeasyBase {
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
export declare enum DistributionGroupsGetDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DistributionGroupsGetDefaultApplicationJSONError extends SpeakeasyBase {
    code: DistributionGroupsGetDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class DistributionGroupsGetDefaultApplicationJSON extends SpeakeasyBase {
    error: DistributionGroupsGetDefaultApplicationJSONError;
}
/**
 * The creation origin of this distribution group
 */
export declare enum DistributionGroupsGet200ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp"
}
/**
 * Success
 */
export declare class DistributionGroupsGet200ApplicationJSON extends SpeakeasyBase {
    /**
     * The name of the distribution group
     */
    displayName?: string;
    /**
     * The unique ID of the distribution group
     */
    id: string;
    /**
     * Whether the distribution group is public
     */
    isPublic: boolean;
    /**
     * The name of the distribution group used in URLs
     */
    name: string;
    /**
     * The creation origin of this distribution group
     */
    origin: DistributionGroupsGet200ApplicationJSONOriginEnum;
}
export declare class DistributionGroupsGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    distributionGroupsGet200ApplicationJSONObject?: DistributionGroupsGet200ApplicationJSON;
    /**
     * Error
     */
    distributionGroupsGetDefaultApplicationJSONObject?: DistributionGroupsGetDefaultApplicationJSON;
}
