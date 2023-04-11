import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { RoomData } from "./roomdata";
/**
 * List of rooms
 */
export declare class RoomTreeDataList extends SpeakeasyBase {
    /**
     * List of room data information
     */
    items: RoomData[];
    /**
     * Range information
     */
    range: Range;
}
