package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class WorkflowUsageBillableWindows {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_ms")
    public Long totalMs;
    public WorkflowUsageBillableWindows withTotalMs(Long totalMs) {
        this.totalMs = totalMs;
        return this;
    }
}