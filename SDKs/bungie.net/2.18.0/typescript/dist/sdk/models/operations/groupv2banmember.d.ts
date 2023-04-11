import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GroupV2BanMemberSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class GroupV2BanMemberRequest extends SpeakeasyBase {
    /**
     * Group ID that has the member to ban.
     */
    groupId: number;
    /**
     * Membership ID of the member to ban from the group.
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
export declare class GroupV2BanMember200Wildcard extends SpeakeasyBase {
    detailedErrorTrace?: string;
    errorCode?: number;
    errorStatus?: string;
    message?: string;
    messageData?: Record<string, string>;
    response?: number;
    throttleSeconds?: number;
}
export declare class GroupV2BanMemberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
