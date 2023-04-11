import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupV2IndividualGroupInviteCancelSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GroupV2IndividualGroupInviteCancelRequest extends SpeakeasyBase {
    /**
     * ID of the group you would like to join.
     */
    groupId: number;
    /**
     * Membership id of the account being cancelled.
     */
    membershipId: number;
    /**
     * MembershipType of the account being cancelled.
     */
    membershipType: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class GroupV2IndividualGroupInviteCancel200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.GroupsV2GroupApplicationResponse;
    throttleSeconds?: number;
}
export declare class GroupV2IndividualGroupInviteCancelResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
