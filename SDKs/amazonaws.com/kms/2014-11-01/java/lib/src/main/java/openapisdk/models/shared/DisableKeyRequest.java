package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisableKeyRequest {
    @JsonProperty("KeyId")
    public String keyId;
    public DisableKeyRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}