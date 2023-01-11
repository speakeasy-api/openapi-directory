package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ParameterConstraints {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Required")
    public java.util.Map<String, Object> required;
    public ParameterConstraints withRequired(java.util.Map<String, Object> required) {
        this.required = required;
        return this;
    }
}