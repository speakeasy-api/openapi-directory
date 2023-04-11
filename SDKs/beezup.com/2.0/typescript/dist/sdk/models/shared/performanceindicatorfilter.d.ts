import { SpeakeasyBase } from "../../../internal/utils";
import { PerformanceIndicatorTypeEnum } from "./performanceindicatortypeenum";
export declare class PerformanceIndicatorFilter extends SpeakeasyBase {
    /**
     * Indicates the operator you want to apply on this indicator
     */
    operatorName: string;
    /**
     * Indicate on which indicator or value you want to make your formula
     */
    performanceIndicator: PerformanceIndicatorTypeEnum;
    /**
     * Indicates the filter value to apply on this indicator
     */
    value: number;
}
