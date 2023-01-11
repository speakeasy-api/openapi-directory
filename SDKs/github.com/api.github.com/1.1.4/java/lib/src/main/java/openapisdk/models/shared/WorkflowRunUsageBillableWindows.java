package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WorkflowRunUsageBillableWindows {
    @JsonProperty("jobs")
    public Long jobs;
    public WorkflowRunUsageBillableWindows withJobs(Long jobs) {
        this.jobs = jobs;
        return this;
    }
    @JsonProperty("total_ms")
    public Long totalMs;
    public WorkflowRunUsageBillableWindows withTotalMs(Long totalMs) {
        this.totalMs = totalMs;
        return this;
    }
}