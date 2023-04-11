import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupV2IndividualGroupInviteSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GroupV2IndividualGroupInviteRequest extends SpeakeasyBase {
    /**
     * ID of the group you would like to join.
     */
    groupId: number;
    /**
     * Membership id of the account being invited.
     */
    membershipId: number;
    /**
     * MembershipType of the account being invited.
     */
    membershipType: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class GroupV2IndividualGroupInvite200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.GroupsV2GroupApplicationResponse;
    throttleSeconds?: number;
}
export declare class GroupV2IndividualGroupInviteResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
