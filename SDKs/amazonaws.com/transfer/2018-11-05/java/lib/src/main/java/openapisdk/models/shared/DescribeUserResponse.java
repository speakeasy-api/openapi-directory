package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeUserResponse {
    @JsonProperty("ServerId")
    public String serverId;
    public DescribeUserResponse withServerId(String serverId) {
        this.serverId = serverId;
        return this;
    }
    @JsonProperty("User")
    public DescribedUser user;
    public DescribeUserResponse withUser(DescribedUser user) {
        this.user = user;
        return this;
    }
}