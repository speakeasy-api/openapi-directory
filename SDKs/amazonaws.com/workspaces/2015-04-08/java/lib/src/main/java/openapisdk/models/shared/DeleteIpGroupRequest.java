package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteIpGroupRequest {
    @JsonProperty("GroupId")
    public String groupId;
    public DeleteIpGroupRequest withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}