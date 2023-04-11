import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * Tags List
 */
export declare class TagList extends SpeakeasyBase {
    /**
     * Total sum of items in the list.
     */
    sum: number;
    /**
     * List of tags.
     */
    tags: Tag[];
}
