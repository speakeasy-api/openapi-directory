import { SpeakeasyBase } from "../../../internal/utils";
import { NumericOperatorEnum } from "./numericoperatorenum";
/**
 * Filters cost anomalies based on the total impact.
 */
export declare class TotalImpactFilter extends SpeakeasyBase {
    endValue?: number;
    numericOperator: NumericOperatorEnum;
    startValue: number;
}
