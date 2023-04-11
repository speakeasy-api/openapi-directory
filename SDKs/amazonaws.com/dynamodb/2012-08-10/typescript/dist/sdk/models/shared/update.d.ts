import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { ReturnValuesOnConditionCheckFailureEnum } from "./returnvaluesonconditioncheckfailureenum";
/**
 * Represents a request to perform an <code>UpdateItem</code> operation.
 */
export declare class Update extends SpeakeasyBase {
    conditionExpression?: string;
    expressionAttributeNames?: Record<string, string>;
    expressionAttributeValues?: Record<string, AttributeValue>;
    key: Record<string, AttributeValue>;
    returnValuesOnConditionCheckFailure?: ReturnValuesOnConditionCheckFailureEnum;
    tableName: string;
    updateExpression: string;
}
