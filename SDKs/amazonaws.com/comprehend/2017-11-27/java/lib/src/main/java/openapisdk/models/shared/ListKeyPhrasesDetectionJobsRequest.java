package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListKeyPhrasesDetectionJobsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filter")
    public KeyPhrasesDetectionJobFilter filter;
    public ListKeyPhrasesDetectionJobsRequest withFilter(KeyPhrasesDetectionJobFilter filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListKeyPhrasesDetectionJobsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListKeyPhrasesDetectionJobsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}