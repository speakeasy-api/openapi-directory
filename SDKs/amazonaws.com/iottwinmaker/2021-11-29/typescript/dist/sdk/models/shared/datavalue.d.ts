import { SpeakeasyBase } from "../../../internal/utils";
import { RelationshipValue } from "./relationshipvalue";
/**
 * An object that specifies a value for a property.
 */
export declare class DataValue extends SpeakeasyBase {
    booleanValue?: boolean;
    doubleValue?: number;
    expression?: string;
    integerValue?: number;
    listValue?: DataValue[];
    longValue?: number;
    mapValue?: Record<string, DataValue>;
    relationshipValue?: RelationshipValue;
    stringValue?: string;
}
