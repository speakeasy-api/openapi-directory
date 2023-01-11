package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AttributeDimension {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AttributeType")
    public AttributeTypeEnum attributeType;
    public AttributeDimension withAttributeType(AttributeTypeEnum attributeType) {
        this.attributeType = attributeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Values")
    public String[] values;
    public AttributeDimension withValues(String[] values) {
        this.values = values;
        return this;
    }
}