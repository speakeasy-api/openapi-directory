import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsUpdateSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The attributes to update for the distribution group
 */
export declare class DistributionGroupsUpdateRequestBody extends SpeakeasyBase {
    /**
     * Whether the distribution group is public
     */
    isPublic?: boolean;
    /**
     * The name of the distribution group
     */
    name?: string;
}
export declare class DistributionGroupsUpdateRequest extends SpeakeasyBase {
    /**
     * The attributes to update for the distribution group
     */
    requestBody: DistributionGroupsUpdateRequestBody;
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
export declare enum DistributionGroupsUpdateDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DistributionGroupsUpdateDefaultApplicationJSONError extends SpeakeasyBase {
    code: DistributionGroupsUpdateDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class DistributionGroupsUpdateDefaultApplicationJSON extends SpeakeasyBase {
    error: DistributionGroupsUpdateDefaultApplicationJSONError;
}
/**
 * The creation origin of this distribution group
 */
export declare enum DistributionGroupsUpdate200ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp"
}
/**
 * Success
 */
export declare class DistributionGroupsUpdate200ApplicationJSON extends SpeakeasyBase {
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
    origin: DistributionGroupsUpdate200ApplicationJSONOriginEnum;
}
export declare class DistributionGroupsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    distributionGroupsUpdate200ApplicationJSONObject?: DistributionGroupsUpdate200ApplicationJSON;
    /**
     * Error
     */
    distributionGroupsUpdateDefaultApplicationJSONObject?: DistributionGroupsUpdateDefaultApplicationJSON;
}
