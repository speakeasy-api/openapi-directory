import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
/**
 * The item attributes from a response in a specific table, along with the read resources consumed on the table during the request.
 */
export declare class BatchResponse extends SpeakeasyBase {
    /**
     * The number of Capacity Units of the provisioned throughput of the table consumed during the operation. <code>GetItem</code>, <code>BatchGetItem</code>, <code>BatchWriteItem</code>, <code>Query</code>, and <code>Scan</code> operations consume <code>ReadCapacityUnits</code>, while <code>PutItem</code>, <code>UpdateItem</code>, and <code>DeleteItem</code> operations consume <code>WriteCapacityUnits</code>.
     */
    consumedCapacityUnits?: number;
    items?: Record<string, AttributeValue>[];
}
