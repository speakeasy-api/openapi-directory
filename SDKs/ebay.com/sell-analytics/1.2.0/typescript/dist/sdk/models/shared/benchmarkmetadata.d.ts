import { SpeakeasyBase } from "../../../internal/utils";
/**
 * This complex type defines the fields that comprise the benchmark against which the seller's performance is compared. The comparison determines the seller's rating for the metric.
 */
export declare class BenchmarkMetadata extends SpeakeasyBase {
    /**
     * This field returns the average value for the group, as defined by the specified basis. When the benchmark basis is set to PEER_BENCHMARK, the value returned in this field is the benchmark value to which the seller's metric value is compared to determine the seller's rating for the customer service metric.
     */
    average?: string;
}
