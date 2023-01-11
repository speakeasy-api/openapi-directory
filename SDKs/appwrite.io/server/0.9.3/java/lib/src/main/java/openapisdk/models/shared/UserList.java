package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * UserList
 * Users List
**/
public class UserList {
    @JsonProperty("sum")
    public Integer sum;
    public UserList withSum(Integer sum) {
        this.sum = sum;
        return this;
    }
    @JsonProperty("users")
    public User[] users;
    public UserList withUsers(User[] users) {
        this.users = users;
        return this;
    }
}