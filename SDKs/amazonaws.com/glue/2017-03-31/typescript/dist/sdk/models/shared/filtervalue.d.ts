import { SpeakeasyBase } from "../../../internal/utils";
import { FilterValueTypeEnum } from "./filtervaluetypeenum";
/**
 * Represents a single entry in the list of values for a <code>FilterExpression</code>.
 */
export declare class FilterValue extends SpeakeasyBase {
    type: FilterValueTypeEnum;
    value: string[];
}
