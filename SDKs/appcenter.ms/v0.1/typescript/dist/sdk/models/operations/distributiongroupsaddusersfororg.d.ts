import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsAddUsersForOrgSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * list of user email addresses that should get added as members to the specified group
 */
export declare class DistributionGroupsAddUsersForOrgRequestBody extends SpeakeasyBase {
    /**
     * The list of emails of the users
     */
    userEmails?: string[];
}
export declare class DistributionGroupsAddUsersForOrgRequest extends SpeakeasyBase {
    /**
     * list of user email addresses that should get added as members to the specified group
     */
    requestBody: DistributionGroupsAddUsersForOrgRequestBody;
    /**
     * The name of the distribution group
     */
    distributionGroupName: string;
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum DistributionGroupsAddUsersForOrgDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DistributionGroupsAddUsersForOrgDefaultApplicationJSONError extends SpeakeasyBase {
    code: DistributionGroupsAddUsersForOrgDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class DistributionGroupsAddUsersForOrgDefaultApplicationJSON extends SpeakeasyBase {
    error: DistributionGroupsAddUsersForOrgDefaultApplicationJSONError;
}
export declare class DistributionGroupsAddUsersForOrg200ApplicationJSON extends SpeakeasyBase {
    /**
     * The code of the result
     */
    code?: string;
    /**
     * Whether the has accepted the invite. Available when an invite is pending, and the value will be "true".
     */
    invitePending?: boolean;
    /**
     * The message of the result
     */
    message?: string;
    /**
     * The status code of the result
     */
    status: number;
    /**
     * The email of the user
     */
    userEmail?: string;
}
export declare class DistributionGroupsAddUsersForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    distributionGroupsAddUsersForOrg200ApplicationJSONObjects?: DistributionGroupsAddUsersForOrg200ApplicationJSON[];
    /**
     * Error
     */
    distributionGroupsAddUsersForOrgDefaultApplicationJSONObject?: DistributionGroupsAddUsersForOrgDefaultApplicationJSON;
}
