package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListJobsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JobNames")
    public String[] jobNames;
    public ListJobsResponse withJobNames(String[] jobNames) {
        this.jobNames = jobNames;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListJobsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}