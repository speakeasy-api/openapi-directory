import { SpeakeasyBase } from "../../../internal/utils";
import { GroupsV2GroupMember } from "./groupsv2groupmember";
import { GroupsV2GroupPotentialMember } from "./groupsv2grouppotentialmember";
import { GroupsV2GroupV2 } from "./groupsv2groupv2";
export declare class GroupsV2GroupResponse extends SpeakeasyBase {
    allianceStatus?: number;
    alliedIds?: number[];
    /**
     * This property will be populated if the authenticated user is a member of the group. Note that because of account linking, a user can sometimes be part of a clan more than once. As such, this returns the highest member type available.
     */
    currentUserMemberMap?: Record<string, GroupsV2GroupMember>;
    /**
     * A convenience property that indicates if every membership you (the current user) have that is a part of this group are part of an account that is considered inactive - for example, overridden accounts in Cross Save.
     */
    currentUserMembershipsInactiveForDestiny?: boolean;
    /**
     * This property will be populated if the authenticated user is an applicant or has an outstanding invitation to join. Note that because of account linking, a user can sometimes be part of a clan more than once.
     */
    currentUserPotentialMemberMap?: Record<string, GroupsV2GroupPotentialMember>;
    detail?: GroupsV2GroupV2;
    founder?: GroupsV2GroupMember;
    groupJoinInviteCount?: number;
    parentGroup?: GroupsV2GroupV2;
}
