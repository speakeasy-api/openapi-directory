import { SpeakeasyBase } from "../../../internal/utils";
import { GroupsV2GroupUserInfoCard } from "./groupsv2groupuserinfocard";
import { UserGeneralUser } from "./usergeneraluser";
export declare class UserUserMembershipData extends SpeakeasyBase {
    bungieNetUser?: UserGeneralUser;
    /**
     * this allows you to see destiny memberships that are visible and linked to this account (regardless of whether or not they have characters on the world server)
     */
    destinyMemberships?: GroupsV2GroupUserInfoCard[];
    /**
     * If this property is populated, it will have the membership ID of the account considered to be "primary" in this user's cross save relationship.
     *
     * @remarks
     *  If null, this user has no cross save relationship, nor primary account.
     */
    primaryMembershipId?: number;
}
