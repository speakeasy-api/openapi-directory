package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateEnvironmentRequestBodyEnvironment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CreateEnvironmentRequestBodyEnvironment withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("values")
    public CreateEnvironmentRequestBodyEnvironmentValues[] values;
    public CreateEnvironmentRequestBodyEnvironment withValues(CreateEnvironmentRequestBodyEnvironmentValues[] values) {
        this.values = values;
        return this;
    }
}