package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StatisticalThreshold
 * A statistical ranking (percentile) that indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.
**/
public class StatisticalThreshold {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("statistic")
    public String statistic;
    public StatisticalThreshold withStatistic(String statistic) {
        this.statistic = statistic;
        return this;
    }
}