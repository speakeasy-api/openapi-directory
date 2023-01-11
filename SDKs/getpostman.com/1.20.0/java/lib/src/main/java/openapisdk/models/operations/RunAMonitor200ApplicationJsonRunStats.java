package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RunAMonitor200ApplicationJsonRunStats {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assertions")
    public RunAMonitor200ApplicationJsonRunStatsAssertions assertions;
    public RunAMonitor200ApplicationJsonRunStats withAssertions(RunAMonitor200ApplicationJsonRunStatsAssertions assertions) {
        this.assertions = assertions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("requests")
    public RunAMonitor200ApplicationJsonRunStatsRequests requests;
    public RunAMonitor200ApplicationJsonRunStats withRequests(RunAMonitor200ApplicationJsonRunStatsRequests requests) {
        this.requests = requests;
        return this;
    }
}