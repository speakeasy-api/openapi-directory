package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class RunAMonitor200ApplicationJsonRunStatsAssertions {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failed")
    public Double failed;
    public RunAMonitor200ApplicationJsonRunStatsAssertions withFailed(Double failed) {
        this.failed = failed;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Double total;
    public RunAMonitor200ApplicationJsonRunStatsAssertions withTotal(Double total) {
        this.total = total;
        return this;
    }
}