package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeUserRequest {
    @JsonProperty("ServerId")
    public String serverId;
    public DescribeUserRequest withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
    @JsonProperty("UserName")
    public String userName;
    public DescribeUserRequest withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}