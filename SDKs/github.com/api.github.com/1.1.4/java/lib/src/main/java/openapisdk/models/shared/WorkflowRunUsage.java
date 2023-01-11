package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * WorkflowRunUsage
 * Workflow Run Usage
**/
public class WorkflowRunUsage {
    @JsonProperty("billable")
    public WorkflowRunUsageBillable billable;
    public WorkflowRunUsage withBillable(WorkflowRunUsageBillable billable) {
        this.billable = billable;
        return this;
    }
    @JsonProperty("run_duration_ms")
    public Long runDurationMs;
    public WorkflowRunUsage withRunDurationMs(Long runDurationMs) {
        this.runDurationMs = runDurationMs;
        return this;
    }
}