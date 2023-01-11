package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UpdateUserResponse
 *  <code>UpdateUserResponse</code> returns the user name and identifier for the request to update a user's properties.
**/
public class UpdateUserResponse {
    @JsonProperty("ServerId")
    public String serverId;
    public UpdateUserResponse withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
    @JsonProperty("UserName")
    public String userName;
    public UpdateUserResponse withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}