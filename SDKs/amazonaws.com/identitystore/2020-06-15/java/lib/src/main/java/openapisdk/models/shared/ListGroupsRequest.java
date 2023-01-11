package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListGroupsRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Filters")
    public Filter[] filters;
    public ListGroupsRequest withFilters(Filter[] filters) {
        this.filters = filters;
        return this;
    }
    @JsonProperty("IdentityStoreId")
    public String identityStoreId;
    public ListGroupsRequest withIdentityStoreId(String identityStoreId) {
        this.identityStoreId = identityStoreId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaxResults")
    public Long maxResults;
    public ListGroupsRequest withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListGroupsRequest withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}