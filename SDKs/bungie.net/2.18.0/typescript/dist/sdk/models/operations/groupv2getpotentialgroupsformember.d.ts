import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupV2GetPotentialGroupsForMemberRequest extends SpeakeasyBase {
    /**
     * Filter apply to list of potential joined groups.
     */
    filter: number;
    /**
     * Type of group the supplied member applied.
     */
    groupType: number;
    /**
     * Membership ID to for which to find applied groups.
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
export declare class GroupV2GetPotentialGroupsForMember200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.GroupsV2GroupPotentialMembershipSearchResponse;
    throttleSeconds?: number;
}
export declare class GroupV2GetPotentialGroupsForMemberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
