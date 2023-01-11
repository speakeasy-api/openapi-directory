package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleMonitor200ApplicationJsonMonitorLastRunStatsAssertions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failed")
    public Double failed;
    public SingleMonitor200ApplicationJsonMonitorLastRunStatsAssertions withFailed(Double failed) {
        this.failed = failed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public SingleMonitor200ApplicationJsonMonitorLastRunStatsAssertions withTotal(Double total) {
        this.total = total;
        return this;
    }
}