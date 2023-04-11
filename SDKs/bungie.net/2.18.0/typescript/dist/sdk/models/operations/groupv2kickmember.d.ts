import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupV2KickMemberSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GroupV2KickMemberRequest extends SpeakeasyBase {
    /**
     * Group ID to kick the user from.
     */
    groupId: number;
    /**
     * Membership ID to kick.
     */
    membershipId: number;
    /**
     * Membership type of the provided membership ID.
     */
    membershipType: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class GroupV2KickMember200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.GroupsV2GroupMemberLeaveResult;
    throttleSeconds?: number;
}
export declare class GroupV2KickMemberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
