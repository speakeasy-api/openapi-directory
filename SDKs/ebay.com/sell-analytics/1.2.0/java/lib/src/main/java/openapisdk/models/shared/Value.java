package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Value
 * A complex type that contains a value, plus the veracity of that value.
**/
public class Value {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("applicable")
    public Boolean applicable;
    public Value withApplicable(Boolean applicable) {
        this.applicable = applicable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public java.util.Map<String, Object> value;
    public Value withValue(java.util.Map<String, Object> value) {
        this.value = value;
        return this;
    }
}