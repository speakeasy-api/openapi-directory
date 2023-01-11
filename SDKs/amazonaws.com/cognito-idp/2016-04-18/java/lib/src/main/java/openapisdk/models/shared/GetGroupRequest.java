package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetGroupRequest {
    @JsonProperty("GroupName")
    public String groupName;
    public GetGroupRequest withGroupName(String groupName) {
        this.groupName = groupName;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public GetGroupRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}