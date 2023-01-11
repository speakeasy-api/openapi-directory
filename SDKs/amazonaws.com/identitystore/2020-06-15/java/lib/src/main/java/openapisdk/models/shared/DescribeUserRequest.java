package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeUserRequest {
    @JsonProperty("IdentityStoreId")
    public String identityStoreId;
    public DescribeUserRequest withIdentityStoreId(String identityStoreId) {
        this.identityStoreId = identityStoreId;
        return this;
    }
    @JsonProperty("UserId")
    public String userId;
    public DescribeUserRequest withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}