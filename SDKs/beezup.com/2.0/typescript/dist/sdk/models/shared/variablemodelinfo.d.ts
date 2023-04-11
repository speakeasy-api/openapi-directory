import { SpeakeasyBase } from "../../../internal/utils";
import { ClickIncludedAndVariablePrice } from "./clickincludedandvariableprice";
/**
 * Internal usage: Old offer type. Describe the fix and variable model information
 */
export declare class VariableModelInfo extends SpeakeasyBase {
    /**
     * Click included with variable pricing information
     */
    clickIncludedAndVariablePrices: ClickIncludedAndVariablePrice[];
    /**
     * The overflow click count
     */
    overflowClickCount: number;
    /**
     * The overflow click price
     */
    overflowClickPrice: number;
}
