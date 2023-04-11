import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { UserItem } from "./useritem";
/**
 * List of users
 */
export declare class UserList extends SpeakeasyBase {
    /**
     * List of users
     */
    items: UserItem[];
    /**
     * Range information
     */
    range: Range;
}
