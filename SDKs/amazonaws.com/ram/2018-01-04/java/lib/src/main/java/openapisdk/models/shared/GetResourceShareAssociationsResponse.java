package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetResourceShareAssociationsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public GetResourceShareAssociationsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceShareAssociations")
    public ResourceShareAssociation[] resourceShareAssociations;
    public GetResourceShareAssociationsResponse withResourceShareAssociations(ResourceShareAssociation[] resourceShareAssociations) {
        this.resourceShareAssociations = resourceShareAssociations;
        return this;
    }
}