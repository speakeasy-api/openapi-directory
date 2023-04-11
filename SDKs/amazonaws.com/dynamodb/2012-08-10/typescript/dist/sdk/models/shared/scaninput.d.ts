import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { Condition } from "./condition";
import { ConditionalOperatorEnum } from "./conditionaloperatorenum";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
import { SelectEnum } from "./selectenum";
/**
 * Represents the input of a <code>Scan</code> operation.
 */
export declare class ScanInput extends SpeakeasyBase {
    attributesToGet?: string[];
    conditionalOperator?: ConditionalOperatorEnum;
    consistentRead?: boolean;
    exclusiveStartKey?: Record<string, AttributeValue>;
    expressionAttributeNames?: Record<string, string>;
    expressionAttributeValues?: Record<string, AttributeValue>;
    filterExpression?: string;
    indexName?: string;
    limit?: number;
    projectionExpression?: string;
    /**
     * <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>
     */
    returnConsumedCapacity?: ReturnConsumedCapacityEnum;
    scanFilter?: Record<string, Condition>;
    segment?: number;
    select?: SelectEnum;
    tableName: string;
    totalSegments?: number;
}
