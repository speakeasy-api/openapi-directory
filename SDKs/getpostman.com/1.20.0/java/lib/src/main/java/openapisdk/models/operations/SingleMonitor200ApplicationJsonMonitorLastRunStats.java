package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleMonitor200ApplicationJsonMonitorLastRunStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assertions")
    public SingleMonitor200ApplicationJsonMonitorLastRunStatsAssertions assertions;
    public SingleMonitor200ApplicationJsonMonitorLastRunStats withAssertions(SingleMonitor200ApplicationJsonMonitorLastRunStatsAssertions assertions) {
        this.assertions = assertions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public SingleMonitor200ApplicationJsonMonitorLastRunStatsRequests requests;
    public SingleMonitor200ApplicationJsonMonitorLastRunStats withRequests(SingleMonitor200ApplicationJsonMonitorLastRunStatsRequests requests) {
        this.requests = requests;
        return this;
    }
}