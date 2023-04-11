import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupV2GetGroupsForMemberRequest extends SpeakeasyBase {
    /**
     * Filter apply to list of joined groups.
     */
    filter: number;
    /**
     * Type of group the supplied member founded.
     */
    groupType: number;
    /**
     * Membership ID to for which to find founded groups.
     */
    membershipId: number;
    /**
     * Membership type of the supplied membership ID.
     */
    membershipType: number;
}
/**
 * Look at the Response property for more information about the nature of this response
 */
export declare class GroupV2GetGroupsForMember200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.GroupsV2GetGroupsForMemberResponse;
    throttleSeconds?: number;
}
export declare class GroupV2GetGroupsForMemberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
