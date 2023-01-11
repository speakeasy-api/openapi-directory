package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPagesByEngagementRequest {
    @JsonProperty("EngagementId")
    public String engagementId;
    public ListPagesByEngagementRequest withEngagementId(String engagementId) {
        this.engagementId = engagementId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListPagesByEngagementRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListPagesByEngagementRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}