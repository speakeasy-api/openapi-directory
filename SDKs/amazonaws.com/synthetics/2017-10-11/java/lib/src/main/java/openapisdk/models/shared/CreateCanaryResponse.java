package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateCanaryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Canary")
    public Canary canary;
    public CreateCanaryResponse withCanary(Canary canary) {
        this.canary = canary;
        return this;
    }
}