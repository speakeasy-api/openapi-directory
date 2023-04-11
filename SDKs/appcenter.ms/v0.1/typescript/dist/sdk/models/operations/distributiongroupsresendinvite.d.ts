import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsResendInviteSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The list of members to add
 */
export declare class DistributionGroupsResendInviteRequestBody extends SpeakeasyBase {
    /**
     * The list of emails of the users
     */
    userEmails?: string[];
}
export declare class DistributionGroupsResendInviteRequest extends SpeakeasyBase {
    /**
     * The list of members to add
     */
    requestBody: DistributionGroupsResendInviteRequestBody;
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
export declare enum DistributionGroupsResendInviteDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DistributionGroupsResendInviteDefaultApplicationJSONError extends SpeakeasyBase {
    code: DistributionGroupsResendInviteDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class DistributionGroupsResendInviteDefaultApplicationJSON extends SpeakeasyBase {
    error: DistributionGroupsResendInviteDefaultApplicationJSONError;
}
export declare class DistributionGroupsResendInviteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    distributionGroupsResendInviteDefaultApplicationJSONObject?: DistributionGroupsResendInviteDefaultApplicationJSON;
}
