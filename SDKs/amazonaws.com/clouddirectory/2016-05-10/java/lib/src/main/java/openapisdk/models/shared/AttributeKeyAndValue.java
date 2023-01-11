package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AttributeKeyAndValue
 * The combination of an attribute key and an attribute value.
**/
public class AttributeKeyAndValue {
    @JsonProperty("Key")
    public AttributeKey key;
    public AttributeKeyAndValue withKey(AttributeKey key) {
        this.key = key;
        return this;
    }
    @JsonProperty("Value")
    public TypedAttributeValue value;
    public AttributeKeyAndValue withValue(TypedAttributeValue value) {
        this.value = value;
        return this;
    }
}