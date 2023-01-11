package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AttributeType
 * Specifies whether the attribute is standard or custom.
**/
public class AttributeType {
    @JsonProperty("Name")
    public String name;
    public AttributeType withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public String value;
    public AttributeType withValue(String value) {
        this.value = value;
        return this;
    }
}