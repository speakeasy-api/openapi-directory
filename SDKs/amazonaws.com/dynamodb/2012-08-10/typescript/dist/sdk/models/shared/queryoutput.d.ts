import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { ConsumedCapacity } from "./consumedcapacity";
/**
 * Represents the output of a <code>Query</code> operation.
 */
export declare class QueryOutput extends SpeakeasyBase {
    consumedCapacity?: ConsumedCapacity;
    count?: number;
    items?: Record<string, AttributeValue>[];
    lastEvaluatedKey?: Record<string, AttributeValue>;
    scannedCount?: number;
}
