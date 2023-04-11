import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GroupV2RecoverGroupForFounderRequest extends SpeakeasyBase {
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
export declare class GroupV2RecoverGroupForFounder200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: shared.GroupsV2GroupMembershipSearchResponse;
    throttleSeconds?: number;
}
export declare class GroupV2RecoverGroupForFounderResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
