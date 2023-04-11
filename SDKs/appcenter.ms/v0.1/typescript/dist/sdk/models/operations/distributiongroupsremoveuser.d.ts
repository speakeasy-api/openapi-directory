import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsRemoveUserSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The list of members to add
 */
export declare class DistributionGroupsRemoveUserRequestBody extends SpeakeasyBase {
    /**
     * The list of emails of the users
     */
    userEmails?: string[];
}
export declare class DistributionGroupsRemoveUserRequest extends SpeakeasyBase {
    /**
     * The list of members to add
     */
    requestBody: DistributionGroupsRemoveUserRequestBody;
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
export declare enum DistributionGroupsRemoveUserDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DistributionGroupsRemoveUserDefaultApplicationJSONError extends SpeakeasyBase {
    code: DistributionGroupsRemoveUserDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class DistributionGroupsRemoveUserDefaultApplicationJSON extends SpeakeasyBase {
    error: DistributionGroupsRemoveUserDefaultApplicationJSONError;
}
export declare class DistributionGroupsRemoveUser200ApplicationJSON extends SpeakeasyBase {
    /**
     * The code of the result
     */
    code?: string;
    /**
     * The message of the result
     */
    message?: number;
    /**
     * The status code of the result
     */
    status: number;
    /**
     * The email of the user
     */
    userEmail?: string;
}
export declare class DistributionGroupsRemoveUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    distributionGroupsRemoveUser200ApplicationJSONObjects?: DistributionGroupsRemoveUser200ApplicationJSON[];
    /**
     * Error
     */
    distributionGroupsRemoveUserDefaultApplicationJSONObject?: DistributionGroupsRemoveUserDefaultApplicationJSON;
}
