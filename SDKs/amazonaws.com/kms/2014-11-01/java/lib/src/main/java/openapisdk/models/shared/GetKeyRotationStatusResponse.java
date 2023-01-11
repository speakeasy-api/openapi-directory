package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetKeyRotationStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyRotationEnabled")
    public Boolean keyRotationEnabled;
    public GetKeyRotationStatusResponse withKeyRotationEnabled(Boolean keyRotationEnabled) {
        this.keyRotationEnabled = keyRotationEnabled;
        return this;
    }
}