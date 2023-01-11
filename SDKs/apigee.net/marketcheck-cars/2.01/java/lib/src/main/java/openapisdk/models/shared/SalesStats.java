package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SalesStats
 * Sales stats response
**/
public class SalesStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("absolute_mean_deviation")
    public Double absoluteMeanDeviation;
    public SalesStats withAbsoluteMeanDeviation(Double absoluteMeanDeviation) {
        this.absoluteMeanDeviation = absoluteMeanDeviation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("iqr")
    public Double iqr;
    public SalesStats withIqr(Double iqr) {
        this.iqr = iqr;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mean")
    public Double mean;
    public SalesStats withMean(Double mean) {
        this.mean = mean;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("median")
    public Double median;
    public SalesStats withMedian(Double median) {
        this.median = median;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("population_standard_deviation")
    public Double populationStandardDeviation;
    public SalesStats withPopulationStandardDeviation(Double populationStandardDeviation) {
        this.populationStandardDeviation = populationStandardDeviation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standard_deviation")
    public Double standardDeviation;
    public SalesStats withStandardDeviation(Double standardDeviation) {
        this.standardDeviation = standardDeviation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trimmed_mean")
    public Double trimmedMean;
    public SalesStats withTrimmedMean(Double trimmedMean) {
        this.trimmedMean = trimmedMean;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variance")
    public Double variance;
    public SalesStats withVariance(Double variance) {
        this.variance = variance;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("weighted_mean")
    public Double weightedMean;
    public SalesStats withWeightedMean(Double weightedMean) {
        this.weightedMean = weightedMean;
        return this;
    }
}