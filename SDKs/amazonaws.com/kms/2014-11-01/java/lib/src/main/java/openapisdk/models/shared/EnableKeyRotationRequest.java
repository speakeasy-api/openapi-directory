package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnableKeyRotationRequest {
    @JsonProperty("KeyId")
    public String keyId;
    public EnableKeyRotationRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}