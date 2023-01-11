package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateThingRequestBodyAttributePayload
 * The attribute payload.
**/
public class UpdateThingRequestBodyAttributePayload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public java.util.Map<String, String> attributes;
    public UpdateThingRequestBodyAttributePayload withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merge")
    public Boolean merge;
    public UpdateThingRequestBodyAttributePayload withMerge(Boolean merge) {
        this.merge = merge;
        return this;
    }
}