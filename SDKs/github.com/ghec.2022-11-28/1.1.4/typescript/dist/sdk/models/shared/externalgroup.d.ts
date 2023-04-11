import { SpeakeasyBase } from "../../../internal/utils";
export declare class ExternalGroupMembers extends SpeakeasyBase {
    /**
     * An email attached to a user
     */
    memberEmail: string;
    /**
     * The internal user ID of the identity
     */
    memberId: number;
    /**
     * The handle/login for the user
     */
    memberLogin: string;
    /**
     * The user display name/profile name
     */
    memberName: string;
}
export declare class ExternalGroupTeams extends SpeakeasyBase {
    /**
     * The id for a team
     */
    teamId: number;
    /**
     * The name of the team
     */
    teamName: string;
}
/**
 * Information about an external group's usage and its members
 */
export declare class ExternalGroup extends SpeakeasyBase {
    /**
     * The internal ID of the group
     */
    groupId: number;
    /**
     * The display name for the group
     */
    groupName: string;
    /**
     * An array of external members linked to this group
     */
    members: ExternalGroupMembers[];
    /**
     * An array of teams linked to this group
     */
    teams: ExternalGroupTeams[];
    /**
     * The date when the group was last updated_at
     */
    updatedAt?: string;
}
