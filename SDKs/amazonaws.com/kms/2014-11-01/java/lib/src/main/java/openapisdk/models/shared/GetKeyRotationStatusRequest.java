package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetKeyRotationStatusRequest {
    @JsonProperty("KeyId")
    public String keyId;
    public GetKeyRotationStatusRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}