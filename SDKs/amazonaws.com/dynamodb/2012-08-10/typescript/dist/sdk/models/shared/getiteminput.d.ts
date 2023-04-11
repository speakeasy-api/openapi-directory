import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { ReturnConsumedCapacityEnum } from "./returnconsumedcapacityenum";
/**
 * Represents the input of a <code>GetItem</code> operation.
 */
export declare class GetItemInput extends SpeakeasyBase {
    attributesToGet?: string[];
    consistentRead?: boolean;
    expressionAttributeNames?: Record<string, string>;
    key: Record<string, AttributeValue>;
    projectionExpression?: string;
    /**
     * <p>Determines the level of detail about either provisioned or on-demand throughput consumption that is returned in the response:</p> <ul> <li> <p> <code>INDEXES</code> - The response includes the aggregate <code>ConsumedCapacity</code> for the operation, together with <code>ConsumedCapacity</code> for each table and secondary index that was accessed.</p> <p>Note that some operations, such as <code>GetItem</code> and <code>BatchGetItem</code>, do not access any indexes at all. In these cases, specifying <code>INDEXES</code> will only return <code>ConsumedCapacity</code> information for table(s).</p> </li> <li> <p> <code>TOTAL</code> - The response includes only the aggregate <code>ConsumedCapacity</code> for the operation.</p> </li> <li> <p> <code>NONE</code> - No <code>ConsumedCapacity</code> details are included in the response.</p> </li> </ul>
     */
    returnConsumedCapacity?: ReturnConsumedCapacityEnum;
    tableName: string;
}
