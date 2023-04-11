import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsDeleteForOrgSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DistributionGroupsDeleteForOrgRequest extends SpeakeasyBase {
    /**
     * The name of the distribution group
     */
    distributionGroupName: string;
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum DistributionGroupsDeleteForOrgDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DistributionGroupsDeleteForOrgDefaultApplicationJSONError extends SpeakeasyBase {
    code: DistributionGroupsDeleteForOrgDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class DistributionGroupsDeleteForOrgDefaultApplicationJSON extends SpeakeasyBase {
    error: DistributionGroupsDeleteForOrgDefaultApplicationJSONError;
}
export declare class DistributionGroupsDeleteForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    distributionGroupsDeleteForOrgDefaultApplicationJSONObject?: DistributionGroupsDeleteForOrgDefaultApplicationJSON;
}
