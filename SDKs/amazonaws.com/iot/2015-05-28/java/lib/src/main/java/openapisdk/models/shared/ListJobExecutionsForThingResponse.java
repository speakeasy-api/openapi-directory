package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListJobExecutionsForThingResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionSummaries")
    public JobExecutionSummaryForThing[] executionSummaries;
    public ListJobExecutionsForThingResponse withExecutionSummaries(JobExecutionSummaryForThing[] executionSummaries) {
        this.executionSummaries = executionSummaries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListJobExecutionsForThingResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}