package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeGroupResponse {
    @JsonProperty("DisplayName")
    public String displayName;
    public DescribeGroupResponse withDisplayName(String displayName) {
        this.displayName = displayName;
        return this;
    }
    @JsonProperty("GroupId")
    public String groupId;
    public DescribeGroupResponse withGroupId(String groupId) {
        this.groupId = groupId;
        return this;
    }
}