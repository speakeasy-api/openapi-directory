package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * MetricBenchmark
 * This complex type defines the benchmark data, which includes the average value of the metric for the group (the benchmark) and the seller's overall rating when compared to the benchmark.
**/
public class MetricBenchmark {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("adjustment")
    public String adjustment;
    public MetricBenchmark withAdjustment(String adjustment) {
        this.adjustment = adjustment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("basis")
    public String basis;
    public MetricBenchmark withBasis(String basis) {
        this.basis = basis;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public BenchmarkMetadata metadata;
    public MetricBenchmark withMetadata(BenchmarkMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rating")
    public String rating;
    public MetricBenchmark withRating(String rating) {
        this.rating = rating;
        return this;
    }
}