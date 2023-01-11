package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListApplicationStatesRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ApplicationIds")
    public String[] applicationIds;
    public ListApplicationStatesRequest withApplicationIds(String[] applicationIds) {
        this.applicationIds = applicationIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListApplicationStatesRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListApplicationStatesRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}