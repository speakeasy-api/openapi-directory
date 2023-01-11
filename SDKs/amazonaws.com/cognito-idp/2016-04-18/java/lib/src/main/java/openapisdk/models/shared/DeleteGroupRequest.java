package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteGroupRequest {
    @JsonProperty("GroupName")
    public String groupName;
    public DeleteGroupRequest withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public DeleteGroupRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}