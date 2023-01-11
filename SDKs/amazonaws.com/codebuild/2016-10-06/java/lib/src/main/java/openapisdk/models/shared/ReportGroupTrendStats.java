package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ReportGroupTrendStats
 * Contains trend statistics for a set of reports. The actual values depend on the type of trend being collected. For more information, see .
**/
public class ReportGroupTrendStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("average")
    public String average;
    public ReportGroupTrendStats withAverage(String average) {
        this.average = average;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("max")
    public String max;
    public ReportGroupTrendStats withMax(String max) {
        this.max = max;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("min")
    public String min;
    public ReportGroupTrendStats withMin(String min) {
        this.min = min;
        return this;
    }
}