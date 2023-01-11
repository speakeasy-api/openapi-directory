package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleMonitor200ApplicationJsonMonitorLastRun {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("finishedAt")
    public String finishedAt;
    public SingleMonitor200ApplicationJsonMonitorLastRun withFinishedAt(String finishedAt) {
        this.finishedAt = finishedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("startedAt")
    public String startedAt;
    public SingleMonitor200ApplicationJsonMonitorLastRun withStartedAt(String startedAt) {
        this.startedAt = startedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stats")
    public SingleMonitor200ApplicationJsonMonitorLastRunStats stats;
    public SingleMonitor200ApplicationJsonMonitorLastRun withStats(SingleMonitor200ApplicationJsonMonitorLastRunStats stats) {
        this.stats = stats;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public SingleMonitor200ApplicationJsonMonitorLastRun withStatus(String status) {
        this.status = status;
        return this;
    }
}