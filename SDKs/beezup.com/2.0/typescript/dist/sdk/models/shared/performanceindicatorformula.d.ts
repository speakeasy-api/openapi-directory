import { SpeakeasyBase } from "../../../internal/utils";
import { PerformanceIndicatorFormulaOperatorNameEnum } from "./performanceindicatorformulaoperatornameenum";
import { PerformanceIndicatorFormulaParameterTypeEnum } from "./performanceindicatorformulaparametertypeenum";
/**
 * The KPI formula
 */
export declare class PerformanceIndicatorFormula extends SpeakeasyBase {
    /**
     * Indicate on which indicator or value you want to make your formula
     */
    firstParameter?: PerformanceIndicatorFormulaParameterTypeEnum;
    operatorName?: PerformanceIndicatorFormulaOperatorNameEnum;
    /**
     * Indicate on which indicator or value you want to make your formula
     */
    secondParameter?: PerformanceIndicatorFormulaParameterTypeEnum;
    /**
     * Indicate the value of the third parameter of your formula
     */
    thirdParameter?: number;
}
