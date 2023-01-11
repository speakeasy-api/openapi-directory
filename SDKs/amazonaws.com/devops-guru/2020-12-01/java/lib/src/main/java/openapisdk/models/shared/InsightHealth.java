package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InsightHealth
 *  Information about the number of open reactive and proactive insights that can be used to gauge the health of your system. 
**/
public class InsightHealth {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MeanTimeToRecoverInMilliseconds")
    public Long meanTimeToRecoverInMilliseconds;
    public InsightHealth withMeanTimeToRecoverInMilliseconds(Long meanTimeToRecoverInMilliseconds) {
        this.meanTimeToRecoverInMilliseconds = meanTimeToRecoverInMilliseconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpenProactiveInsights")
    public Long openProactiveInsights;
    public InsightHealth withOpenProactiveInsights(Long openProactiveInsights) {
        this.openProactiveInsights = openProactiveInsights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpenReactiveInsights")
    public Long openReactiveInsights;
    public InsightHealth withOpenReactiveInsights(Long openReactiveInsights) {
        this.openReactiveInsights = openReactiveInsights;
        return this;
    }
}