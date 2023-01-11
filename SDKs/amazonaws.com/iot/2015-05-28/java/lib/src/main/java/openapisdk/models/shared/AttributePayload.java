package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttributePayload
 * The attribute payload.
**/
public class AttributePayload {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public java.util.Map<String, String> attributes;
    public AttributePayload withAttributes(java.util.Map<String, String> attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("merge")
    public Boolean merge;
    public AttributePayload withMerge(Boolean merge) {
        this.merge = merge;
        return this;
    }
}