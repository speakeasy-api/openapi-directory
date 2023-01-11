package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteProtectionRequest {
    @JsonProperty("ProtectionId")
    public String protectionId;
    public DeleteProtectionRequest withProtectionId(String protectionId) {
        this.protectionId = protectionId;
        return this;
    }
}