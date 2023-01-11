package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListUsersResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public ListUsersResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonProperty("ServerId")
    public String serverId;
    public ListUsersResponse withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
    @JsonProperty("Users")
    public ListedUser[] users;
    public ListUsersResponse withUsers(ListedUser[] users) {
        this.users = users;
        return this;
    }
}