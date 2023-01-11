package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListJobExecutionsForJobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionSummaries")
    public JobExecutionSummaryForJob[] executionSummaries;
    public ListJobExecutionsForJobResponse withExecutionSummaries(JobExecutionSummaryForJob[] executionSummaries) {
        this.executionSummaries = executionSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListJobExecutionsForJobResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}