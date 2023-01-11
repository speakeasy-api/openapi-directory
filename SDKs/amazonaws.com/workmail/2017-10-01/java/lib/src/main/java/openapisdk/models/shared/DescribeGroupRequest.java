package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeGroupRequest {
    @JsonProperty("GroupId")
    public String groupId;
    public DescribeGroupRequest withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
    @JsonProperty("OrganizationId")
    public String organizationId;
    public DescribeGroupRequest withOrganizationId(String organizationId) {
        this.organizationId = organizationId;
        return this;
    }
}