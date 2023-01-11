package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WorkflowRunUsageBillableUbuntu {
    @JsonProperty("jobs")
    public Long jobs;
    public WorkflowRunUsageBillableUbuntu withJobs(Long jobs) {
        this.jobs = jobs;
        return this;
    }
    @JsonProperty("total_ms")
    public Long totalMs;
    public WorkflowRunUsageBillableUbuntu withTotalMs(Long totalMs) {
        this.totalMs = totalMs;
        return this;
    }
}