package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateKeyDescriptionRequest {
    @JsonProperty("Description")
    public String description;
    public UpdateKeyDescriptionRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("KeyId")
    public String keyId;
    public UpdateKeyDescriptionRequest withKeyId(String keyId) {
        this.keyId = keyId;
        return this;
    }
}