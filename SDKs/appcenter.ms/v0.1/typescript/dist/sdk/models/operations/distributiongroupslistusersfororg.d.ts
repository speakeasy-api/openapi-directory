import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsListUsersForOrgSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DistributionGroupsListUsersForOrgRequest extends SpeakeasyBase {
    /**
     * The name of the distribution group
     */
    distributionGroupName: string;
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum DistributionGroupsListUsersForOrgDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DistributionGroupsListUsersForOrgDefaultApplicationJSONError extends SpeakeasyBase {
    code: DistributionGroupsListUsersForOrgDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class DistributionGroupsListUsersForOrgDefaultApplicationJSON extends SpeakeasyBase {
    error: DistributionGroupsListUsersForOrgDefaultApplicationJSONError;
}
export declare class DistributionGroupsListUsersForOrg200ApplicationJSON extends SpeakeasyBase {
    /**
     * The avatar URL of the user
     */
    avatarUrl?: string;
    /**
     * User is required to send an old password in order to change the password.
     */
    canChangePassword?: boolean;
    /**
     * The full name of the user. Might for example be first and last name
     */
    displayName?: string;
    /**
     * The email address of the user
     */
    email: string;
    /**
     * The unique id (UUID) of the user
     */
    id?: string;
    /**
     * Whether the has accepted the invite. Available when an invite is pending, and the value will be "true".
     */
    invitePending?: boolean;
    /**
     * The unique name that is used to identify the user.
     */
    name?: string;
}
export declare class DistributionGroupsListUsersForOrgResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    distributionGroupsListUsersForOrg200ApplicationJSONObjects?: DistributionGroupsListUsersForOrg200ApplicationJSON[];
    /**
     * Error
     */
    distributionGroupsListUsersForOrgDefaultApplicationJSONObject?: DistributionGroupsListUsersForOrgDefaultApplicationJSON;
}
