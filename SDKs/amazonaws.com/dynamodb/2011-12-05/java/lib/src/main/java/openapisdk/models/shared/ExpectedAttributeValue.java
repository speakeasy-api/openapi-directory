package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ExpectedAttributeValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Exists")
    public Boolean exists;
    public ExpectedAttributeValue withExists(Boolean exists) {
        this.exists = exists;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public AttributeValue value;
    public ExpectedAttributeValue withValue(AttributeValue value) {
        this.value = value;
        return this;
    }
}