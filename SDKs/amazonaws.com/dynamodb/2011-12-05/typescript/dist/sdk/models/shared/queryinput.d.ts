import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeValue } from "./attributevalue";
import { Condition } from "./condition";
import { Key } from "./key";
export declare class QueryInput extends SpeakeasyBase {
    /**
     * List of <code>Attribute</code> names. If attribute names are not specified then all attributes will be returned. If some attributes are not found, they will not appear in the result.
     */
    attributesToGet?: string[];
    /**
     * If set to <code>true</code>, then a consistent read is issued. Otherwise eventually-consistent is used.
     */
    consistentRead?: boolean;
    count?: boolean;
    exclusiveStartKey?: Key;
    hashKeyValue: AttributeValue;
    limit?: number;
    rangeKeyCondition?: Condition;
    scanIndexForward?: boolean;
    tableName: string;
}
