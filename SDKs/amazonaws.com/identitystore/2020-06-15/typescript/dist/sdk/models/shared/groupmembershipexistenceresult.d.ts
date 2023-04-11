import { SpeakeasyBase } from "../../../internal/utils";
import { MemberId } from "./memberid";
/**
 * Indicates whether a resource is a member of a group in the identity store.
 */
export declare class GroupMembershipExistenceResult extends SpeakeasyBase {
    groupId?: string;
    memberId?: MemberId;
    membershipExists?: boolean;
}
