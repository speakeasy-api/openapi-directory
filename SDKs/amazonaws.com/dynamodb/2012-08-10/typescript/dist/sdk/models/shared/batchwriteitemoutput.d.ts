import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumedCapacity } from "./consumedcapacity";
import { ItemCollectionMetrics } from "./itemcollectionmetrics";
import { WriteRequest } from "./writerequest";
/**
 * Represents the output of a <code>BatchWriteItem</code> operation.
 */
export declare class BatchWriteItemOutput extends SpeakeasyBase {
    consumedCapacity?: ConsumedCapacity[];
    itemCollectionMetrics?: Record<string, ItemCollectionMetrics[]>;
    unprocessedItems?: Record<string, WriteRequest[]>;
}
