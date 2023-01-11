package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * User
 * A user object, which contains a specified user’s metadata and attributes.
**/
public class User {
    @JsonProperty("UserId")
    public String userId;
    public User withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonProperty("UserName")
    public String userName;
    public User withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}