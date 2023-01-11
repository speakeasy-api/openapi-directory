package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ScimUpdateAttributeForUserRequestBodyOperationsValue2 {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary")
    public Boolean primary;
    public ScimUpdateAttributeForUserRequestBodyOperationsValue2 withPrimary(Boolean primary) {
        this.primary = primary;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public ScimUpdateAttributeForUserRequestBodyOperationsValue2 withValue(String value) {
        this.value = value;
        return this;
    }
}