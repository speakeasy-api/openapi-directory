import { SpeakeasyBase } from "../../../internal/utils";
import { ComponentProperty } from "./componentproperty";
/**
 * Represents a conditional expression to set a component property. Use <code>ComponentConditionProperty</code> to set a property to different values conditionally, based on the value of another property.
 */
export declare class ComponentConditionProperty extends SpeakeasyBase {
    else?: ComponentProperty;
    field?: string;
    operand?: string;
    operandType?: string;
    operator?: string;
    property?: string;
    then?: ComponentProperty;
}
