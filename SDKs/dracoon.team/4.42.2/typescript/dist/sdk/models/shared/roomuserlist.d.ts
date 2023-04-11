import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { RoomUser } from "./roomuser";
/**
 * List of users
 */
export declare class RoomUserList extends SpeakeasyBase {
    /**
     * List of room-user mappings
     */
    items: RoomUser[];
    /**
     * Range information
     */
    range: Range;
}
