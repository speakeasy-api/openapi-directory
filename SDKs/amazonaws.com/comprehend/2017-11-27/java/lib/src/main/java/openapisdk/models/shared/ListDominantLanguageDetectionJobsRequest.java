package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDominantLanguageDetectionJobsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filter")
    public DominantLanguageDetectionJobFilter filter;
    public ListDominantLanguageDetectionJobsRequest withFilter(DominantLanguageDetectionJobFilter filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListDominantLanguageDetectionJobsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListDominantLanguageDetectionJobsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}