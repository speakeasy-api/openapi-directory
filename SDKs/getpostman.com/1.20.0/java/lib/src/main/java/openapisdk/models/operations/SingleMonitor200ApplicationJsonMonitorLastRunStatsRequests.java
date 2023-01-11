package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleMonitor200ApplicationJsonMonitorLastRunStatsRequests {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public SingleMonitor200ApplicationJsonMonitorLastRunStatsRequests withTotal(Double total) {
        this.total = total;
        return this;
    }
}