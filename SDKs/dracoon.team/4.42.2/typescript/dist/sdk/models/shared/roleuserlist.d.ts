import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { RoleUser } from "./roleuser";
/**
 * List of users with assigned role
 */
export declare class RoleUserList extends SpeakeasyBase {
    /**
     * List of role-user mappings
     */
    items: RoleUser[];
    /**
     * Range information
     */
    range: Range;
}
