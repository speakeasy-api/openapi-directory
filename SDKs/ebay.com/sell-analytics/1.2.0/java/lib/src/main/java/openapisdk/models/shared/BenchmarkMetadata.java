package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * BenchmarkMetadata
 * This complex type defines the fields that comprise the benchmark against which the seller's performance is compared. The comparison determines the seller's rating for the metric.
**/
public class BenchmarkMetadata {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("average")
    public String average;
    public BenchmarkMetadata withAverage(String average) {
        this.average = average;
        return this;
    }
}