import { SpeakeasyBase } from "../../../internal/utils";
import { PerformanceIndicatorFormulaParameterTypeEnum } from "./performanceindicatorformulaparametertypeenum";
import { PerformanceIndicatorFormulaOperatorNameEnum } from "./performanceindicatorformulaoperatornameenum";
/**
 * The KPI formula
**/
export declare class PerformanceIndicatorFormula extends SpeakeasyBase {
    firstParameter?: PerformanceIndicatorFormulaParameterTypeEnum;
    operatorName?: PerformanceIndicatorFormulaOperatorNameEnum;
    secondParameter?: PerformanceIndicatorFormulaParameterTypeEnum;
    thirdParameter?: number;
}
