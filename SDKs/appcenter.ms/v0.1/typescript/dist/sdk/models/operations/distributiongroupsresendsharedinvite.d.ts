import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DistributionGroupsResendSharedInviteSecurity extends SpeakeasyBase {
    apiToken: string;
}
/**
 * The list of members to add
 */
export declare class DistributionGroupsResendSharedInviteRequestBody extends SpeakeasyBase {
    /**
     * The list of emails of the users
     */
    userEmails?: string[];
}
export declare class DistributionGroupsResendSharedInviteRequest extends SpeakeasyBase {
    /**
     * The list of members to add
     */
    requestBody: DistributionGroupsResendSharedInviteRequestBody;
    /**
     * The name of the distribution group
     */
    distributionGroupName: string;
    /**
     * The organization's name
     */
    orgName: string;
}
export declare enum DistributionGroupsResendSharedInviteDefaultApplicationJSONErrorCodeEnum {
    BadRequest = "BadRequest",
    Conflict = "Conflict",
    NotAcceptable = "NotAcceptable",
    NotFound = "NotFound",
    InternalServerError = "InternalServerError",
    Unauthorized = "Unauthorized",
    TooManyRequests = "TooManyRequests"
}
export declare class DistributionGroupsResendSharedInviteDefaultApplicationJSONError extends SpeakeasyBase {
    code: DistributionGroupsResendSharedInviteDefaultApplicationJSONErrorCodeEnum;
    message: string;
}
/**
 * Error
 */
export declare class DistributionGroupsResendSharedInviteDefaultApplicationJSON extends SpeakeasyBase {
    error: DistributionGroupsResendSharedInviteDefaultApplicationJSONError;
}
export declare class DistributionGroupsResendSharedInviteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Error
     */
    distributionGroupsResendSharedInviteDefaultApplicationJSONObject?: DistributionGroupsResendSharedInviteDefaultApplicationJSON;
}
