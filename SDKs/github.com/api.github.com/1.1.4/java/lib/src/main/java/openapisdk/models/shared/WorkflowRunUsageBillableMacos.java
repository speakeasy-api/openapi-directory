package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WorkflowRunUsageBillableMacos {
    @JsonProperty("jobs")
    public Long jobs;
    public WorkflowRunUsageBillableMacos withJobs(Long jobs) {
        this.jobs = jobs;
        return this;
    }
    @JsonProperty("total_ms")
    public Long totalMs;
    public WorkflowRunUsageBillableMacos withTotalMs(Long totalMs) {
        this.totalMs = totalMs;
        return this;
    }
}