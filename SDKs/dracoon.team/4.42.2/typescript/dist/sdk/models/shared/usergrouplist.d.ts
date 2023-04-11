import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { UserGroup } from "./usergroup";
/**
 * List of groups
 */
export declare class UserGroupList extends SpeakeasyBase {
    /**
     * List of user-group mappings
     */
    items: UserGroup[];
    /**
     * Range information
     */
    range: Range;
}
