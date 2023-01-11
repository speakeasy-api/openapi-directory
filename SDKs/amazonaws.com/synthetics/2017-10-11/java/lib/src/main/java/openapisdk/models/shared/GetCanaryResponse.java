package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetCanaryResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Canary")
    public Canary canary;
    public GetCanaryResponse withCanary(Canary canary) {
        this.canary = canary;
        return this;
    }
}