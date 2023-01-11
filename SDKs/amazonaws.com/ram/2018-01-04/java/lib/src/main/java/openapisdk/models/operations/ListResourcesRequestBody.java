package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListResourcesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListResourcesRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListResourcesRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principal")
    public String principal;
    public ListResourcesRequestBody withPrincipal(String principal) {
        this.principal = principal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceArns")
    public String[] resourceArns;
    public ListResourcesRequestBody withResourceArns(String[] resourceArns) {
        this.resourceArns = resourceArns;
        return this;
    }
    @JsonProperty("resourceOwner")
    public ListResourcesRequestBodyResourceOwnerEnum resourceOwner;
    public ListResourcesRequestBody withResourceOwner(ListResourcesRequestBodyResourceOwnerEnum resourceOwner) {
        this.resourceOwner = resourceOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceShareArns")
    public String[] resourceShareArns;
    public ListResourcesRequestBody withResourceShareArns(String[] resourceShareArns) {
        this.resourceShareArns = resourceShareArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public String resourceType;
    public ListResourcesRequestBody withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}