import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GroupV2UnbanMemberSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GroupV2UnbanMemberRequest extends SpeakeasyBase {
    groupId: number;
    /**
     * Membership ID of the member to unban from the group
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
export declare class GroupV2UnbanMember200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: number;
    throttleSeconds?: number;
}
export declare class GroupV2UnbanMemberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
