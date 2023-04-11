import { SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
import { Range } from "./range";
/**
 * List of groups
 */
export declare class GroupList extends SpeakeasyBase {
    /**
     * List of groups
     */
    items: Group[];
    /**
     * Range information
     */
    range: Range;
}
