package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelKeyDeletionRequest {
    @JsonProperty("KeyId")
    public String keyId;
    public CancelKeyDeletionRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}