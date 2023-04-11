import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsListAllTestersForOrgSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DistributionGroupsListAllTestersForOrgRequest extends SpeakeasyBase {
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum DistributionGroupsListAllTestersForOrgDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DistributionGroupsListAllTestersForOrgDefaultApplicationJSONError extends SpeakeasyBase {
    code: DistributionGroupsListAllTestersForOrgDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class DistributionGroupsListAllTestersForOrgDefaultApplicationJSON extends SpeakeasyBase {
    error: DistributionGroupsListAllTestersForOrgDefaultApplicationJSONError;
}
export declare class DistributionGroupsListAllTestersForOrg200ApplicationJSON extends SpeakeasyBase {
    /**
     * The full name of the tester. Might for example be first and last name
     */
    displayName?: string;
    /**
     * The email address of the tester
     */
    email: string;
    /**
     * The unique name that is used to identify the tester.
     */
    name: string;
}
export declare class DistributionGroupsListAllTestersForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    distributionGroupsListAllTestersForOrg200ApplicationJSONObjects?: DistributionGroupsListAllTestersForOrg200ApplicationJSON[];
    /**
     * Error
     */
    distributionGroupsListAllTestersForOrgDefaultApplicationJSONObject?: DistributionGroupsListAllTestersForOrgDefaultApplicationJSON;
}
