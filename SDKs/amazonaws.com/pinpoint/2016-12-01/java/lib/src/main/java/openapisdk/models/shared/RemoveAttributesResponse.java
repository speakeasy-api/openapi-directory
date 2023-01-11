package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RemoveAttributesResponse {
    @JsonProperty("AttributesResource")
    public AttributesResource attributesResource;
    public RemoveAttributesResponse withAttributesResource(AttributesResource attributesResource) {
        this.attributesResource = attributesResource;
        return this;
    }
}