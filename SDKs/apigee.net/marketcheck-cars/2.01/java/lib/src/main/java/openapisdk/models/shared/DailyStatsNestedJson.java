package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DailyStatsNestedJson
 * All nested JSON of stats
**/
public class DailyStatsNestedJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("interquartile_range")
    public Double interquartileRange;
    public DailyStatsNestedJson withInterquartileRange(Double interquartileRange) {
        this.interquartileRange = interquartileRange;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mean")
    public Double mean;
    public DailyStatsNestedJson withMean(Double mean) {
        this.mean = mean;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("median")
    public Double median;
    public DailyStatsNestedJson withMedian(Double median) {
        this.median = median;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("population_standard_deviation")
    public Double populationStandardDeviation;
    public DailyStatsNestedJson withPopulationStandardDeviation(Double populationStandardDeviation) {
        this.populationStandardDeviation = populationStandardDeviation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("standard_deviation")
    public Double standardDeviation;
    public DailyStatsNestedJson withStandardDeviation(Double standardDeviation) {
        this.standardDeviation = standardDeviation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trimmed_mean")
    public Double trimmedMean;
    public DailyStatsNestedJson withTrimmedMean(Double trimmedMean) {
        this.trimmedMean = trimmedMean;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("variance")
    public Double variance;
    public DailyStatsNestedJson withVariance(Double variance) {
        this.variance = variance;
        return this;
    }
}