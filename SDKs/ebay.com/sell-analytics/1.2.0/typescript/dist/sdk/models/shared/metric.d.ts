import { SpeakeasyBase } from "../../../internal/utils";
import { MetricBenchmark } from "./metricbenchmark";
import { MetricDistribution } from "./metricdistribution";
/**
 * This complex data type defines the details of the customer service metric and benchmark data related to the associated dimension.
 */
export declare class Metric extends SpeakeasyBase {
    /**
     * This complex type defines the benchmark data, which includes the average value of the metric for the group (the benchmark) and the seller's overall rating when compared to the benchmark.
     */
    benchmark?: MetricBenchmark;
    /**
     * Returned when metricKey equals COUNT, this field returns an array of seller data where each set of data is grouped according by an overarching basis. When the seller distribution is returned, the numeric value of the associated value container equals the sum of the transactions where the seller meets the criteria of the customer service metric type for the given dimension during the evaluationCycle.
     */
    distributions?: MetricDistribution[];
    /**
     * This field indicates the customer service metric being returned in the associated metrics container. The field is set as follows: TRANSACTION_COUNT &ndash; When set to this value, the associated value field equals the total number of transactions completed in the seller group for the metric in the given dimension during the associated evaluationCycle. COUNT &ndash; When set to this value, the associated value field is set to the total number of transactions the seller completed that meet the criteria of the customer service metric type for the given dimension that occurred during the evaluationCycle. RATE &ndash; When set to this value, the value of the associated value field is the rate of the customer service metric type in the given dimension during the associated evaluationCycle. Specifically, when metricKey is set to RATE, the associated value field is set to the value of metricKey TRANSACTION_COUNT divided by the value of metricKey COUNT. The returned benchmark.rating for the seller is based on this calculated value.
     */
    metricKey?: string;
    /**
     * This field is set to the seller's numeric rating for the associated metricKey for the given dimension during the evaluationCycle. To determine the seller's rating for this metric, the value of this field is compared to the average metric value of the group.
     */
    value?: string;
}
