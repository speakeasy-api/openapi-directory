package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RunAMonitor200ApplicationJsonRunStatsRequests {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failed")
    public Double failed;
    public RunAMonitor200ApplicationJsonRunStatsRequests withFailed(Double failed) {
        this.failed = failed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public RunAMonitor200ApplicationJsonRunStatsRequests withTotal(Double total) {
        this.total = total;
        return this;
    }
}