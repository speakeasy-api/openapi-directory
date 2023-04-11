import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { ConsumedCapacity } from "./consumedcapacity";
import { KeysAndAttributes } from "./keysandattributes";
/**
 * Represents the output of a <code>BatchGetItem</code> operation.
 */
export declare class BatchGetItemOutput extends SpeakeasyBase {
    consumedCapacity?: ConsumedCapacity[];
    responses?: Record<string, Record<string, AttributeValue>[]>;
    unprocessedKeys?: Record<string, KeysAndAttributes>;
}
