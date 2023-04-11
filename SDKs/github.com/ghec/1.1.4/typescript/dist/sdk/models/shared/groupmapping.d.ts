import { SpeakeasyBase } from "../../../internal/utils";
export declare class GroupMappingGroups extends SpeakeasyBase {
    /**
     * a description of the group
     */
    groupDescription: string;
    /**
     * The ID of the group
     */
    groupId: string;
    /**
     * The name of the group
     */
    groupName: string;
    /**
     * synchronization status for this group mapping
     */
    status?: string;
    /**
     * the time of the last sync for this group-mapping
     */
    syncedAt?: string;
}
/**
 * External Groups to be mapped to a team for membership
 */
export declare class GroupMapping extends SpeakeasyBase {
    /**
     * Array of groups to be mapped to this team
     */
    groups?: GroupMappingGroups[];
}
