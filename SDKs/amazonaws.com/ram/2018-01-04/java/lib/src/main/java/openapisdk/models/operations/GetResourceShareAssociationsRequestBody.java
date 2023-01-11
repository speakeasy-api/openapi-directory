package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetResourceShareAssociationsRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("associationStatus")
    public GetResourceShareAssociationsRequestBodyAssociationStatusEnum associationStatus;
    public GetResourceShareAssociationsRequestBody withAssociationStatus(GetResourceShareAssociationsRequestBodyAssociationStatusEnum associationStatus) {
        this.associationStatus = associationStatus;
        return this;
    }
    @JsonProperty("associationType")
    public GetResourceShareAssociationsRequestBodyAssociationTypeEnum associationType;
    public GetResourceShareAssociationsRequestBody withAssociationType(GetResourceShareAssociationsRequestBodyAssociationTypeEnum associationType) {
        this.associationType = associationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maxResults")
    public Long maxResults;
    public GetResourceShareAssociationsRequestBody withMaxResults(Long maxResults) {
        this.maxResults = maxResults;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetResourceShareAssociationsRequestBody withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("principal")
    public String principal;
    public GetResourceShareAssociationsRequestBody withPrincipal(String principal) {
        this.principal = principal;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceArn")
    public String resourceArn;
    public GetResourceShareAssociationsRequestBody withResourceArn(String resourceArn) {
        this.resourceArn = resourceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceShareArns")
    public String[] resourceShareArns;
    public GetResourceShareAssociationsRequestBody withResourceShareArns(String[] resourceShareArns) {
        this.resourceShareArns = resourceShareArns;
        return this;
    }
}