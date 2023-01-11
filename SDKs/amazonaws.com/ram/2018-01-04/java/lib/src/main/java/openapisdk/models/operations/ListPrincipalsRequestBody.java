package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListPrincipalsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public ListPrincipalsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListPrincipalsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principals")
    public String[] principals;
    public ListPrincipalsRequestBody withPrincipals(String[] principals) {
        this.principals = principals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceArn")
    public String resourceArn;
    public ListPrincipalsRequestBody withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonProperty("resourceOwner")
    public ListPrincipalsRequestBodyResourceOwnerEnum resourceOwner;
    public ListPrincipalsRequestBody withResourceOwner(ListPrincipalsRequestBodyResourceOwnerEnum resourceOwner) {
        this.resourceOwner = resourceOwner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceShareArns")
    public String[] resourceShareArns;
    public ListPrincipalsRequestBody withResourceShareArns(String[] resourceShareArns) {
        this.resourceShareArns = resourceShareArns;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceType")
    public String resourceType;
    public ListPrincipalsRequestBody withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
}