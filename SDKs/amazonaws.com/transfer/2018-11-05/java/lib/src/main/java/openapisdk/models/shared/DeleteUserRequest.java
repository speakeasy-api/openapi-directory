package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteUserRequest {
    @JsonProperty("ServerId")
    public String serverId;
    public DeleteUserRequest withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
    @JsonProperty("UserName")
    public String userName;
    public DeleteUserRequest withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}