package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Jobs")
    public Job[] jobs;
    public GetJobsResponse withJobs(Job[] jobs) {
        this.jobs = jobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}