package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateThingRequestBodyAttributePayload
 * The attribute payload.
**/
public class CreateThingRequestBodyAttributePayload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public java.util.Map<String, String> attributes;
    public CreateThingRequestBodyAttributePayload withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merge")
    public Boolean merge;
    public CreateThingRequestBodyAttributePayload withMerge(Boolean merge) {
        this.merge = merge;
        return this;
    }
}