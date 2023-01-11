package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeUserRequest {
    @JsonProperty("OrganizationId")
    public String organizationId;
    public DescribeUserRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
    @JsonProperty("UserId")
    public String userId;
    public DescribeUserRequest withUserId(String userId) {
        this.userId = userId;
        return this;
    }
}