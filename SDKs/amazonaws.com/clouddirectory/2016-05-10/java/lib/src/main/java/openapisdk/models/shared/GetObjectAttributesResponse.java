package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetObjectAttributesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attributes")
    public AttributeKeyAndValue[] attributes;
    public GetObjectAttributesResponse withAttributes(AttributeKeyAndValue[] attributes) {
        this.attributes = attributes;
        return this;
    }
}