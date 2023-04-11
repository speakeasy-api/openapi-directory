import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsCreateSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The attributes to update for the distribution group
 */
export declare class DistributionGroupsCreateRequestBody extends SpeakeasyBase {
    /**
     * The display name of the distribution group. If not specified, the name will be used.
     */
    displayName?: string;
    /**
     * The name of the distribution group
     */
    name: string;
}
export declare class DistributionGroupsCreateRequest extends SpeakeasyBase {
    /**
     * The attributes to update for the distribution group
     */
    requestBody: DistributionGroupsCreateRequestBody;
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum DistributionGroupsCreateDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DistributionGroupsCreateDefaultApplicationJSONError extends SpeakeasyBase {
    code: DistributionGroupsCreateDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class DistributionGroupsCreateDefaultApplicationJSON extends SpeakeasyBase {
    error: DistributionGroupsCreateDefaultApplicationJSONError;
}
/**
 * The creation origin of this distribution group
 */
export declare enum DistributionGroupsCreate201ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp"
}
/**
 * Success
 */
export declare class DistributionGroupsCreate201ApplicationJSON extends SpeakeasyBase {
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
    origin: DistributionGroupsCreate201ApplicationJSONOriginEnum;
}
export declare class DistributionGroupsCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    distributionGroupsCreate201ApplicationJSONObject?: DistributionGroupsCreate201ApplicationJSON;
    /**
     * Error
     */
    distributionGroupsCreateDefaultApplicationJSONObject?: DistributionGroupsCreateDefaultApplicationJSON;
}
