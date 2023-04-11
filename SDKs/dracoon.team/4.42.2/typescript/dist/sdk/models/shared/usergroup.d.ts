import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Group information
 */
export declare class UserGroup extends SpeakeasyBase {
    /**
     * Unique identifier for the group
     */
    id: number;
    /**
     * Determines whether user is a member of the group or not
     */
    isMember: boolean;
    /**
     * Group name
     */
    name: string;
}
