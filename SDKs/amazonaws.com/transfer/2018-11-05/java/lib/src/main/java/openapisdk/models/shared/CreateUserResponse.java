package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateUserResponse {
    @JsonProperty("ServerId")
    public String serverId;
    public CreateUserResponse withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
    @JsonProperty("UserName")
    public String userName;
    public CreateUserResponse withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}