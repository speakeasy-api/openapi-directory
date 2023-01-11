package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetJobRunsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobRuns")
    public JobRun[] jobRuns;
    public GetJobRunsResponse withJobRuns(JobRun[] jobRuns) {
        this.jobRuns = jobRuns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetJobRunsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}