import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GroupV2EditGroupMembershipSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GroupV2EditGroupMembershipRequest extends SpeakeasyBase {
    /**
     * ID of the group to which the member belongs.
     */
    groupId: number;
    /**
     * New membertype for the specified member.
     */
    memberType: number;
    /**
     * Membership ID to modify.
     */
    membershipId: number;
    /**
     * Membership type of the provide membership ID.
     */
    membershipType: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class GroupV2EditGroupMembership200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: number;
    throttleSeconds?: number;
}
export declare class GroupV2EditGroupMembershipResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
