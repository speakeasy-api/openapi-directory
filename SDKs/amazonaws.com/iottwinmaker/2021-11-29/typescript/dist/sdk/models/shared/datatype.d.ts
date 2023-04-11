import { SpeakeasyBase } from "../../../internal/utils";
import { DataValue } from "./datavalue";
import { Relationship } from "./relationship";
import { TypeEnum } from "./typeenum";
/**
 * An object that specifies the data type of a property.
 */
export declare class DataType extends SpeakeasyBase {
    allowedValues?: DataValue[];
    nestedType?: DataType;
    relationship?: Relationship;
    type: TypeEnum;
    unitOfMeasure?: string;
}
