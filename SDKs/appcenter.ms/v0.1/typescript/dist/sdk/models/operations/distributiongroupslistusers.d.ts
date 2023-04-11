import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsListUsersSecurity extends SpeakeasyBase {
    apiToken: string;
}
export declare class DistributionGroupsListUsersRequest extends SpeakeasyBase {
    /**
     * The name of the application
     */
    appName: string;
    /**
     * The name of the distribution group
     */
    distributionGroupName: string;
    /**
     * Whether to exclude pending invitations in the response
     */
    excludePendingInvitations?: boolean;
    /**
     * The name of the owner
     */
    ownerName: string;
}
export declare enum DistributionGroupsListUsersDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DistributionGroupsListUsersDefaultApplicationJSONError extends SpeakeasyBase {
    code: DistributionGroupsListUsersDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class DistributionGroupsListUsersDefaultApplicationJSON extends SpeakeasyBase {
    error: DistributionGroupsListUsersDefaultApplicationJSONError;
}
export declare class DistributionGroupsListUsers200ApplicationJSON extends SpeakeasyBase {
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
export declare class DistributionGroupsListUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    distributionGroupsListUsers200ApplicationJSONObjects?: DistributionGroupsListUsers200ApplicationJSON[];
    /**
     * Error
     */
    distributionGroupsListUsersDefaultApplicationJSONObject?: DistributionGroupsListUsersDefaultApplicationJSON;
}
