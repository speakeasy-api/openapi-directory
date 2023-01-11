package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetEnvironmentOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Environment")
    public Environment environment;
    public GetEnvironmentOutput withEnvironment(Environment environment) {
        this.environment = environment;
        return this;
    }
}