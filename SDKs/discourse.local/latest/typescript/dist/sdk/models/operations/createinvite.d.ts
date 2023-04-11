import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class CreateInviteRequestBody extends SpeakeasyBase {
    /**
     * optional, for email invites
     */
    customMessage?: string;
    /**
     * required for email invites only
     */
    email?: string;
    /**
     * optional, if not supplied, the invite_expiry_days site
     *
     * @remarks
     * setting is used
     */
    expiresAt?: string;
    /**
     * optional, either this or `group_names`
     */
    groupId?: number;
    /**
     * optional, either this or `group_id`
     */
    groupNames?: string;
    /**
     * optional, for link invites
     */
    maxRedemptionsAllowed?: number;
    skipEmail?: boolean;
    topicId?: number;
}
export declare class CreateInviteRequest extends SpeakeasyBase {
    apiKey: string;
    apiUsername: string;
    requestBody?: CreateInviteRequestBody;
}
/**
 * success response
 */
export declare class CreateInvite200ApplicationJSON extends SpeakeasyBase {
    createdAt?: string;
    customMessage?: string;
    email?: string;
    emailed?: boolean;
    expired?: boolean;
    expiresAt?: string;
    groups?: any[];
    id?: number;
    link?: string;
    topics?: any[];
    updatedAt?: string;
}
export declare class CreateInviteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * success response
     */
    createInvite200ApplicationJSONObject?: CreateInvite200ApplicationJSON;
}
