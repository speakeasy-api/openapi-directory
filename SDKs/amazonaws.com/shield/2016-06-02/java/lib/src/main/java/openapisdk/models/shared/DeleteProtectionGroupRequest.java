package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteProtectionGroupRequest {
    @JsonProperty("ProtectionGroupId")
    public String protectionGroupId;
    public DeleteProtectionGroupRequest withProtectionGroupId(String protectionGroupId) {
        this.protectionGroupId = protectionGroupId;
        return this;
    }
}