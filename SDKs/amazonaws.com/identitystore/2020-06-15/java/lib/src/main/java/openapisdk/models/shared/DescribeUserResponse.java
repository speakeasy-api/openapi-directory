package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeUserResponse {
    @JsonProperty("UserId")
    public String userId;
    public DescribeUserResponse withUserId(String userId) {
        this.userId = userId;
        return this;
    }
    @JsonProperty("UserName")
    public String userName;
    public DescribeUserResponse withUserName(String userName) {
        this.userName = userName;
        return this;
    }
}