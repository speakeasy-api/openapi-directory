package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPendingJobExecutionsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inProgressJobs")
    public JobExecutionSummary[] inProgressJobs;
    public GetPendingJobExecutionsResponse withInProgressJobs(JobExecutionSummary[] inProgressJobs) {
        this.inProgressJobs = inProgressJobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("queuedJobs")
    public JobExecutionSummary[] queuedJobs;
    public GetPendingJobExecutionsResponse withQueuedJobs(JobExecutionSummary[] queuedJobs) {
        this.queuedJobs = queuedJobs;
        return this;
    }
}