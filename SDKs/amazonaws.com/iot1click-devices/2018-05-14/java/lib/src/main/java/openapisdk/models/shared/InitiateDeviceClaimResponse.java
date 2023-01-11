package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class InitiateDeviceClaimResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public java.util.Map<String, Object> state;
    public InitiateDeviceClaimResponse withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
}