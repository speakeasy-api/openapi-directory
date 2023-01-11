package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListTopicsDetectionJobsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filter")
    public TopicsDetectionJobFilter filter;
    public ListTopicsDetectionJobsRequest withFilter(TopicsDetectionJobFilter filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListTopicsDetectionJobsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListTopicsDetectionJobsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}