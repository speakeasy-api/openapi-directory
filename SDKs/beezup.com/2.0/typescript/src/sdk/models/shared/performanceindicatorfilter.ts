import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PerformanceIndicatorTypeEnum } from "./performanceindicatortypeenum";



export class PerformanceIndicatorFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=operatorName" })
  operatorName: string;

  @SpeakeasyMetadata({ data: "json, name=performanceIndicator" })
  performanceIndicator: PerformanceIndicatorTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: number;
}
