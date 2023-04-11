import { SpeakeasyBase } from "../../../internal/utils";
/**
 * List Groups
 */
export declare class GroupEntity extends SpeakeasyBase {
    /**
     * Comma-delimited list of user IDs who are group administrators (separated by commas)
     */
    adminIds?: string;
    /**
     * Group ID
     */
    id?: number;
    /**
     * Group name
     */
    name?: string;
    /**
     * Notes about this group
     */
    notes?: string;
    /**
     * Comma-delimited list of user IDs who belong to this group (separated by commas)
     */
    userIds?: string;
    /**
     * Comma-delimited list of usernames who belong to this group (separated by commas)
     */
    usernames?: string;
}
