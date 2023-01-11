package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListBackendJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Jobs")
    public java.util.Map<String, Object> jobs;
    public ListBackendJobsResponse withJobs(java.util.Map<String, Object> jobs) {
        this.jobs = jobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public java.util.Map<String, Object> nextToken;
    public ListBackendJobsResponse withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}