package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class VariableValue {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("rawValue")
    public String rawValue;
    public VariableValue withRawValue(String rawValue) {
        this.rawValue = rawValue;
        return this;
    }
}