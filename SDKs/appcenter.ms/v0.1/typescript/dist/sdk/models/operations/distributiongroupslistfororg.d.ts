import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsListForOrgSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DistributionGroupsListForOrgRequest extends SpeakeasyBase {
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DistributionGroupsListForOrgDefaultApplicationJSONError extends SpeakeasyBase {
    code: DistributionGroupsListForOrgDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class DistributionGroupsListForOrgDefaultApplicationJSON extends SpeakeasyBase {
    error: DistributionGroupsListForOrgDefaultApplicationJSONError;
}
/**
 * The creation origin of this distribution group
 */
export declare enum DistributionGroupsListForOrg201ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp"
}
export declare class DistributionGroupsListForOrg201ApplicationJSON extends SpeakeasyBase {
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
    origin: DistributionGroupsListForOrg201ApplicationJSONOriginEnum;
}
export declare class DistributionGroupsListForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    distributionGroupsListForOrg201ApplicationJSONObjects?: DistributionGroupsListForOrg201ApplicationJSON[];
    /**
     * Error
     */
    distributionGroupsListForOrgDefaultApplicationJSONObject?: DistributionGroupsListForOrgDefaultApplicationJSON;
}
