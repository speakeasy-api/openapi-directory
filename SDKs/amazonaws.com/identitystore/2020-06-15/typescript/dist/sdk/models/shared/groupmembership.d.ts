import { SpeakeasyBase } from "../../../internal/utils";
import { MemberId } from "./memberid";
/**
 * Contains the identifiers for a group, a group member, and a <code>GroupMembership</code> object in the identity store.
 */
export declare class GroupMembership extends SpeakeasyBase {
    groupId?: string;
    identityStoreId: string;
    memberId?: MemberId;
    membershipId?: string;
}
