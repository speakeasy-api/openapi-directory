package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Statistics
 * A map of key-value pairs for all supported statistics. Currently, only count is supported.
**/
public class Statistics {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("average")
    public Double average;
    public Statistics withAverage(Double average) {
        this.average = average;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("count")
    public Long count;
    public Statistics withCount(Long count) {
        this.count = count;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximum")
    public Double maximum;
    public Statistics withMaximum(Double maximum) {
        this.maximum = maximum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimum")
    public Double minimum;
    public Statistics withMinimum(Double minimum) {
        this.minimum = minimum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stdDeviation")
    public Double stdDeviation;
    public Statistics withStdDeviation(Double stdDeviation) {
        this.stdDeviation = stdDeviation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sum")
    public Double sum;
    public Statistics withSum(Double sum) {
        this.sum = sum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sumOfSquares")
    public Double sumOfSquares;
    public Statistics withSumOfSquares(Double sumOfSquares) {
        this.sumOfSquares = sumOfSquares;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variance")
    public Double variance;
    public Statistics withVariance(Double variance) {
        this.variance = variance;
        return this;
    }
}