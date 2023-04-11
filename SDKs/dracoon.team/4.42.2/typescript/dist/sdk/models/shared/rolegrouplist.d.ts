import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { RoleGroup } from "./rolegroup";
/**
 * List of groups with assigned role
 */
export declare class RoleGroupList extends SpeakeasyBase {
    /**
     * List of role-group mappings
     */
    items: RoleGroup[];
    /**
     * Range information
     */
    range: Range;
}
