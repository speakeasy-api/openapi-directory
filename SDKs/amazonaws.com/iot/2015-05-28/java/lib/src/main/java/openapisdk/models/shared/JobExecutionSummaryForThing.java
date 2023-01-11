package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobExecutionSummaryForThing
 * The job execution summary for a thing.
**/
public class JobExecutionSummaryForThing {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobExecutionSummary")
    public JobExecutionSummary jobExecutionSummary;
    public JobExecutionSummaryForThing withJobExecutionSummary(JobExecutionSummary jobExecutionSummary) {
        this.jobExecutionSummary = jobExecutionSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobId")
    public String jobId;
    public JobExecutionSummaryForThing withJobId(String jobId) {
        this.jobId = jobId;
        return this;
    }
}