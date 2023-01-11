import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PerformanceIndicatorFormulaParameterTypeEnum } from "./performanceindicatorformulaparametertypeenum";
import { PerformanceIndicatorFormulaOperatorNameEnum } from "./performanceindicatorformulaoperatornameenum";



// PerformanceIndicatorFormula
/** 
 * The KPI formula
**/
export class PerformanceIndicatorFormula extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstParameter" })
  firstParameter?: PerformanceIndicatorFormulaParameterTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=operatorName" })
  operatorName?: PerformanceIndicatorFormulaOperatorNameEnum;

  @SpeakeasyMetadata({ data: "json, name=secondParameter" })
  secondParameter?: PerformanceIndicatorFormulaParameterTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=thirdParameter" })
  thirdParameter?: number;
}
