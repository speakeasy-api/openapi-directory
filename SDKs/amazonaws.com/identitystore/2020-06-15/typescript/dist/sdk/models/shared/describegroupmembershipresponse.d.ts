import { SpeakeasyBase } from "../../../internal/utils";
import { MemberId } from "./memberid";
/**
 * Success
 */
export declare class DescribeGroupMembershipResponse extends SpeakeasyBase {
    groupId: string;
    identityStoreId: string;
    /**
     * An object containing the identifier of a group member.
     */
    memberId: MemberId;
    membershipId: string;
}
