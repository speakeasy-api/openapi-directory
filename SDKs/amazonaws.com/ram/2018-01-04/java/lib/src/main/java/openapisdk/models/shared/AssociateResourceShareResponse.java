package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateResourceShareResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public AssociateResourceShareResponse withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resourceShareAssociations")
    public ResourceShareAssociation[] resourceShareAssociations;
    public AssociateResourceShareResponse withResourceShareAssociations(ResourceShareAssociation[] resourceShareAssociations) {
        this.resourceShareAssociations = resourceShareAssociations;
        return this;
    }
}