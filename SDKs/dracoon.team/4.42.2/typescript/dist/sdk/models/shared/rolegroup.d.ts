import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Group information
 */
export declare class RoleGroup extends SpeakeasyBase {
    /**
     * Unique identifier for the group
     */
    id: number;
    /**
     * Is group member of the role
     */
    isMember: boolean;
    /**
     * Group name
     */
    name: string;
}
