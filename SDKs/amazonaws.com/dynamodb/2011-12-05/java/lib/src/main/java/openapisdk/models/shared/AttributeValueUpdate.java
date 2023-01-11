package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AttributeValueUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Action")
    public AttributeActionEnum action;
    public AttributeValueUpdate withAction(AttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Value")
    public AttributeValue value;
    public AttributeValueUpdate withValue(AttributeValue value) {
        this.value = value;
        return this;
    }
}