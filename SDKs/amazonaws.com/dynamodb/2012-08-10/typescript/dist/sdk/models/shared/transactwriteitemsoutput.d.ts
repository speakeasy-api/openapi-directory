import { SpeakeasyBase } from "../../../internal/utils";
import { ConsumedCapacity } from "./consumedcapacity";
import { ItemCollectionMetrics } from "./itemcollectionmetrics";
/**
 * Success
 */
export declare class TransactWriteItemsOutput extends SpeakeasyBase {
    consumedCapacity?: ConsumedCapacity[];
    itemCollectionMetrics?: Record<string, ItemCollectionMetrics[]>;
}
