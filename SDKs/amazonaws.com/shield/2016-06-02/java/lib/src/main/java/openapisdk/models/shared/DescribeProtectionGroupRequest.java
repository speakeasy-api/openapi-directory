package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeProtectionGroupRequest {
    @JsonProperty("ProtectionGroupId")
    public String protectionGroupId;
    public DescribeProtectionGroupRequest withProtectionGroupId(String protectionGroupId) {
        this.protectionGroupId = protectionGroupId;
        return this;
    }
}