import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { ConsumedCapacity } from "./consumedcapacity";
/**
 * Success
 */
export declare class ExecuteStatementOutput extends SpeakeasyBase {
    /**
     * The capacity units consumed by an operation. The data returned includes the total provisioned throughput consumed, along with statistics for the table and any indexes involved in the operation. <code>ConsumedCapacity</code> is only returned if the request asked for it. For more information, see <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/ProvisionedThroughputIntro.html">Provisioned Throughput</a> in the <i>Amazon DynamoDB Developer Guide</i>.
     */
    consumedCapacity?: ConsumedCapacity;
    items?: Record<string, AttributeValue>[];
    lastEvaluatedKey?: Record<string, AttributeValue>;
    nextToken?: string;
}
