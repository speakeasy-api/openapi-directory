import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsPatchForOrgSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The attributes to update for the distribution group
 */
export declare class DistributionGroupsPatchForOrgRequestBody extends SpeakeasyBase {
    /**
     * Whether the distribution group is public
     */
    isPublic?: boolean;
    /**
     * The name of the distribution group
     */
    name?: string;
}
export declare class DistributionGroupsPatchForOrgRequest extends SpeakeasyBase {
    /**
     * The attributes to update for the distribution group
     */
    requestBody?: DistributionGroupsPatchForOrgRequestBody;
    /**
     * The name of the distribution group
     */
    distributionGroupName: string;
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum DistributionGroupsPatchForOrgDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DistributionGroupsPatchForOrgDefaultApplicationJSONError extends SpeakeasyBase {
    code: DistributionGroupsPatchForOrgDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class DistributionGroupsPatchForOrgDefaultApplicationJSON extends SpeakeasyBase {
    error: DistributionGroupsPatchForOrgDefaultApplicationJSONError;
}
/**
 * The creation origin of this distribution group
 */
export declare enum DistributionGroupsPatchForOrg200ApplicationJSONOriginEnum {
    Appcenter = "appcenter",
    Hockeyapp = "hockeyapp"
}
/**
 * Success
 */
export declare class DistributionGroupsPatchForOrg200ApplicationJSON extends SpeakeasyBase {
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
    origin: DistributionGroupsPatchForOrg200ApplicationJSONOriginEnum;
}
export declare class DistributionGroupsPatchForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    distributionGroupsPatchForOrg200ApplicationJSONObject?: DistributionGroupsPatchForOrg200ApplicationJSON;
    /**
     * Error
     */
    distributionGroupsPatchForOrgDefaultApplicationJSONObject?: DistributionGroupsPatchForOrgDefaultApplicationJSON;
}
