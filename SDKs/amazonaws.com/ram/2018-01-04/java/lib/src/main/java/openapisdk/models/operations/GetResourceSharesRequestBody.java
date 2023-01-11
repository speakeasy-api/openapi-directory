package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetResourceSharesRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public GetResourceSharesRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public GetResourceSharesRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetResourceSharesRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("permissionArn")
    public String permissionArn;
    public GetResourceSharesRequestBody withPermissionArn(String permissionArn) {
        this.permissionArn = permissionArn;
        return this;
    }
    @JsonProperty("resourceOwner")
    public GetResourceSharesRequestBodyResourceOwnerEnum resourceOwner;
    public GetResourceSharesRequestBody withResourceOwner(GetResourceSharesRequestBodyResourceOwnerEnum resourceOwner) {
        this.resourceOwner = resourceOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceShareArns")
    public String[] resourceShareArns;
    public GetResourceSharesRequestBody withResourceShareArns(String[] resourceShareArns) {
        this.resourceShareArns = resourceShareArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceShareStatus")
    public GetResourceSharesRequestBodyResourceShareStatusEnum resourceShareStatus;
    public GetResourceSharesRequestBody withResourceShareStatus(GetResourceSharesRequestBodyResourceShareStatusEnum resourceShareStatus) {
        this.resourceShareStatus = resourceShareStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tagFilters")
    public openapisdk.models.shared.TagFilter[] tagFilters;
    public GetResourceSharesRequestBody withTagFilters(openapisdk.models.shared.TagFilter[] tagFilters) {
        this.tagFilters = tagFilters;
        return this;
    }
}