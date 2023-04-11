import { SpeakeasyBase } from "../../../internal/utils";
export declare class ExternalGroupsGroups extends SpeakeasyBase {
    /**
     * The internal ID of the group
     */
    groupId: number;
    /**
     * The display name of the group
     */
    groupName: string;
    /**
     * The time of the last update for this group
     */
    updatedAt: string;
}
/**
 * A list of external groups available to be connected to a team
 */
export declare class ExternalGroups extends SpeakeasyBase {
    /**
     * An array of external groups available to be mapped to a team
     */
    groups?: ExternalGroupsGroups[];
}
