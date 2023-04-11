import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { Key } from "./key";
/**
 * Success
 */
export declare class QueryOutput extends SpeakeasyBase {
    /**
     * The number of Capacity Units of the provisioned throughput of the table consumed during the operation. <code>GetItem</code>, <code>BatchGetItem</code>, <code>BatchWriteItem</code>, <code>Query</code>, and <code>Scan</code> operations consume <code>ReadCapacityUnits</code>, while <code>PutItem</code>, <code>UpdateItem</code>, and <code>DeleteItem</code> operations consume <code>WriteCapacityUnits</code>.
     */
    consumedCapacityUnits?: number;
    count?: number;
    items?: Record<string, AttributeValue>[];
    lastEvaluatedKey?: Key;
}
