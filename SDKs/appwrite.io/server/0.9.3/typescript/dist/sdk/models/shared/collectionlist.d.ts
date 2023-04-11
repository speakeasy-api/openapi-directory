import { SpeakeasyBase } from "../../../internal/utils";
import { Collection } from "./collection";
/**
 * Collections List
 */
export declare class CollectionList extends SpeakeasyBase {
    /**
     * List of collections.
     */
    collections: Collection[];
    /**
     * Total sum of items in the list.
     */
    sum: number;
}
