import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsGetForOrgSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DistributionGroupsGetForOrgRequest extends SpeakeasyBase {
    /**
     * The name of the distribution group
     */
    distributionGroupName: string;
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum DistributionGroupsGetForOrgDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DistributionGroupsGetForOrgDefaultApplicationJSONError extends SpeakeasyBase {
    code: DistributionGroupsGetForOrgDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class DistributionGroupsGetForOrgDefaultApplicationJSON extends SpeakeasyBase {
    error: DistributionGroupsGetForOrgDefaultApplicationJSONError;
}
/**
 * The creation origin of this distribution group
 */
export declare enum DistributionGroupsGetForOrg200ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp"
}
/**
 * Success
 */
export declare class DistributionGroupsGetForOrg200ApplicationJSON extends SpeakeasyBase {
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
    origin: DistributionGroupsGetForOrg200ApplicationJSONOriginEnum;
}
export declare class DistributionGroupsGetForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    distributionGroupsGetForOrg200ApplicationJSONObject?: DistributionGroupsGetForOrg200ApplicationJSON;
    /**
     * Error
     */
    distributionGroupsGetForOrgDefaultApplicationJSONObject?: DistributionGroupsGetForOrgDefaultApplicationJSON;
}
