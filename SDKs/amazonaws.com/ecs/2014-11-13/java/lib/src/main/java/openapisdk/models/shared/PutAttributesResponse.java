package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutAttributesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public Attribute[] attributes;
    public PutAttributesResponse withAttributes(Attribute[] attributes) {
        this.attributes = attributes;
        return this;
    }
}