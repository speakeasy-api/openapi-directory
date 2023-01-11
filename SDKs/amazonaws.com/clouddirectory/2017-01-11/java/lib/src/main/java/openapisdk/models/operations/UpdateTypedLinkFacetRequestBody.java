package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateTypedLinkFacetRequestBody {
    @JsonProperty("AttributeUpdates")
    public openapisdk.models.shared.TypedLinkFacetAttributeUpdate[] attributeUpdates;
    public UpdateTypedLinkFacetRequestBody withAttributeUpdates(openapisdk.models.shared.TypedLinkFacetAttributeUpdate[] attributeUpdates) {
        this.attributeUpdates = attributeUpdates;
        return this;
    }
    @JsonProperty("IdentityAttributeOrder")
    public String[] identityAttributeOrder;
    public UpdateTypedLinkFacetRequestBody withIdentityAttributeOrder(String[] identityAttributeOrder) {
        this.identityAttributeOrder = identityAttributeOrder;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public UpdateTypedLinkFacetRequestBody withName(String name) {
        this.name = name;
        return this;
    }
}