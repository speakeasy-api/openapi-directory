import { SpeakeasyBase } from "../../../internal/utils";
import { Range } from "./range";
import { RoomGroup } from "./roomgroup";
/**
 * List of groups
 */
export declare class RoomGroupList extends SpeakeasyBase {
    /**
     * List of room-group mappings
     */
    items: RoomGroup[];
    /**
     * Range information
     */
    range: Range;
}
