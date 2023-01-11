package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetLinkAttributesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public AttributeKeyAndValue[] attributes;
    public GetLinkAttributesResponse withAttributes(AttributeKeyAndValue[] attributes) {
        this.attributes = attributes;
        return this;
    }
}