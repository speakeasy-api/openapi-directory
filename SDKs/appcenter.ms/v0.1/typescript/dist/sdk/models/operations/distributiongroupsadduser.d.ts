import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsAddUserSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The list of members to add
 */
export declare class DistributionGroupsAddUserRequestBody extends SpeakeasyBase {
    /**
     * The list of emails of the users
     */
    userEmails?: string[];
}
export declare class DistributionGroupsAddUserRequest extends SpeakeasyBase {
    /**
     * The list of members to add
     */
    requestBody: DistributionGroupsAddUserRequestBody;
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
export declare enum DistributionGroupsAddUserDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DistributionGroupsAddUserDefaultApplicationJSONError extends SpeakeasyBase {
    code: DistributionGroupsAddUserDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class DistributionGroupsAddUserDefaultApplicationJSON extends SpeakeasyBase {
    error: DistributionGroupsAddUserDefaultApplicationJSONError;
}
export declare class DistributionGroupsAddUser200ApplicationJSON extends SpeakeasyBase {
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
export declare class DistributionGroupsAddUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    distributionGroupsAddUser200ApplicationJSONObjects?: DistributionGroupsAddUser200ApplicationJSON[];
    /**
     * Error
     */
    distributionGroupsAddUserDefaultApplicationJSONObject?: DistributionGroupsAddUserDefaultApplicationJSON;
}
