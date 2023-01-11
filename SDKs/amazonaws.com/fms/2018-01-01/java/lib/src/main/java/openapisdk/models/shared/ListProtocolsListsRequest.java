package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListProtocolsListsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DefaultLists")
    public Boolean defaultLists;
    public ListProtocolsListsRequest withDefaultLists(Boolean defaultLists) {
        this.defaultLists = defaultLists;
        return this;
    }
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListProtocolsListsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListProtocolsListsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}