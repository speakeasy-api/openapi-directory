package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class EnableKeyRequest {
    @JsonProperty("KeyId")
    public String keyId;
    public EnableKeyRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}