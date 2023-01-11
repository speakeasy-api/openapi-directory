package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisableKeyRotationRequest {
    @JsonProperty("KeyId")
    public String keyId;
    public DisableKeyRotationRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}