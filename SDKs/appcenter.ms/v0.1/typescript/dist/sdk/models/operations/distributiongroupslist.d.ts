import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsListSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DistributionGroupsListRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum DistributionGroupsListDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DistributionGroupsListDefaultApplicationJSONError extends SpeakeasyBase {
    code: DistributionGroupsListDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class DistributionGroupsListDefaultApplicationJSON extends SpeakeasyBase {
    error: DistributionGroupsListDefaultApplicationJSONError;
}
/**
 * The creation origin of this distribution group
 */
export declare enum DistributionGroupsList200ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp"
}
export declare class DistributionGroupsList200ApplicationJSON extends SpeakeasyBase {
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
    origin: DistributionGroupsList200ApplicationJSONOriginEnum;
}
export declare class DistributionGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    distributionGroupsList200ApplicationJSONObjects?: DistributionGroupsList200ApplicationJSON[];
    /**
     * Error
     */
    distributionGroupsListDefaultApplicationJSONObject?: DistributionGroupsListDefaultApplicationJSON;
}
