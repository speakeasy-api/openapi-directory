package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteUserRequest {
    @JsonProperty("UserName")
    public String userName;
    public DeleteUserRequest withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}