package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServiceInsightHealth
 * Contains the number of open proactive and reactive insights in an analyzed AWS service.
**/
public class ServiceInsightHealth {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpenProactiveInsights")
    public Long openProactiveInsights;
    public ServiceInsightHealth withOpenProactiveInsights(Long openProactiveInsights) {
        this.openProactiveInsights = openProactiveInsights;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OpenReactiveInsights")
    public Long openReactiveInsights;
    public ServiceInsightHealth withOpenReactiveInsights(Long openReactiveInsights) {
        this.openReactiveInsights = openReactiveInsights;
        return this;
    }
}