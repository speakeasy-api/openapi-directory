package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StatisticSet
 * Internal only API.
**/
public class StatisticSet {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Maximum")
    public Double maximum;
    public StatisticSet withMaximum(Double maximum) {
        this.maximum = maximum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Minimum")
    public Double minimum;
    public StatisticSet withMinimum(Double minimum) {
        this.minimum = minimum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SampleCount")
    public Long sampleCount;
    public StatisticSet withSampleCount(Long sampleCount) {
        this.sampleCount = sampleCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Sum")
    public Double sum;
    public StatisticSet withSum(Double sum) {
        this.sum = sum;
        return this;
    }
}