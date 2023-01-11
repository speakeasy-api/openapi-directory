import { SpeakeasyBase } from "../../../internal/utils";
import { ClickIncludedAndVariablePrice } from "./clickincludedandvariableprice";
/**
 * Internal usage: Old offer type. Describe the fix and variable model information
**/
export declare class VariableModelInfo extends SpeakeasyBase {
    clickIncludedAndVariablePrices: ClickIncludedAndVariablePrice[];
    overflowClickCount: number;
    overflowClickPrice: number;
}
