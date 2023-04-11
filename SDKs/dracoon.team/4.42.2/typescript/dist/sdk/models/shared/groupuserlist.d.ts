import { SpeakeasyBase } from "../../../internal/utils";
import { GroupUser } from "./groupuser";
import { Range } from "./range";
/**
 * List of users
 */
export declare class GroupUserList extends SpeakeasyBase {
    /**
     * List of group-user mappings
     */
    items: GroupUser[];
    /**
     * Range information
     */
    range: Range;
}
