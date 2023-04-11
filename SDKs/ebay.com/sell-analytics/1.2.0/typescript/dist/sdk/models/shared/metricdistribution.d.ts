import { SpeakeasyBase } from "../../../internal/utils";
import { Distribution } from "./distribution";
/**
 * This complex data type describes the metric distribution by basis.
 */
export declare class MetricDistribution extends SpeakeasyBase {
    /**
     * This field returns the basis, or the method, by which the metric rating is calculated.
     */
    basis?: string;
    /**
     * This field returns a list of name/value pairs, where the name indicates the distribution being rated and the value indicates the count of seller transactions that meet the distribution criteria.
     */
    data?: Distribution[];
}
