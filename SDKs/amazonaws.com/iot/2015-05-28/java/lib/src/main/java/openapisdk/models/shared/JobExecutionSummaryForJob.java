package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobExecutionSummaryForJob
 * Contains a summary of information about job executions for a specific job.
**/
public class JobExecutionSummaryForJob {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobExecutionSummary")
    public JobExecutionSummary jobExecutionSummary;
    public JobExecutionSummaryForJob withJobExecutionSummary(JobExecutionSummary jobExecutionSummary) {
        this.jobExecutionSummary = jobExecutionSummary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("thingArn")
    public String thingArn;
    public JobExecutionSummaryForJob withThingArn(String thingArn) {
        this.thingArn = thingArn;
        return this;
    }
}