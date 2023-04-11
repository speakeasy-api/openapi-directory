import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsCreateForOrgSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The attributes to update for the distribution group
 */
export declare class DistributionGroupsCreateForOrgRequestBody extends SpeakeasyBase {
    /**
     * The display name of the distribution group. If not specified, the name will be used.
     */
    displayName?: string;
    /**
     * The name of the distribution group
     */
    name: string;
}
export declare class DistributionGroupsCreateForOrgRequest extends SpeakeasyBase {
    /**
     * The attributes to update for the distribution group
     */
    requestBody: DistributionGroupsCreateForOrgRequestBody;
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum DistributionGroupsCreateForOrgDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DistributionGroupsCreateForOrgDefaultApplicationJSONError extends SpeakeasyBase {
    code: DistributionGroupsCreateForOrgDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class DistributionGroupsCreateForOrgDefaultApplicationJSON extends SpeakeasyBase {
    error: DistributionGroupsCreateForOrgDefaultApplicationJSONError;
}
/**
 * The creation origin of this distribution group
 */
export declare enum DistributionGroupsCreateForOrg201ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp"
}
/**
 * Success
 */
export declare class DistributionGroupsCreateForOrg201ApplicationJSON extends SpeakeasyBase {
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
    origin: DistributionGroupsCreateForOrg201ApplicationJSONOriginEnum;
}
export declare class DistributionGroupsCreateForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    distributionGroupsCreateForOrg201ApplicationJSONObject?: DistributionGroupsCreateForOrg201ApplicationJSON;
    /**
     * Error
     */
    distributionGroupsCreateForOrgDefaultApplicationJSONObject?: DistributionGroupsCreateForOrgDefaultApplicationJSON;
}
