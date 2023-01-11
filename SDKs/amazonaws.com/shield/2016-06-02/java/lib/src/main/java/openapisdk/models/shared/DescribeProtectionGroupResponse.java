package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeProtectionGroupResponse {
    @JsonProperty("ProtectionGroup")
    public ProtectionGroup protectionGroup;
    public DescribeProtectionGroupResponse withProtectionGroup(ProtectionGroup protectionGroup) {
        this.protectionGroup = protectionGroup;
        return this;
    }
}