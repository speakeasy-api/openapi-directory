package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AdminAddUserToGroupRequest {
    @JsonProperty("GroupName")
    public String groupName;
    public AdminAddUserToGroupRequest withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public AdminAddUserToGroupRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
    @JsonProperty("Username")
    public String username;
    public AdminAddUserToGroupRequest withUsername(String username) {
        this.username = username;
        return this;
    }
}