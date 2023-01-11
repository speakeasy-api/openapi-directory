package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class AssociateIpGroupsRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public AssociateIpGroupsRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonProperty("GroupIds")
    public String[] groupIds;
    public AssociateIpGroupsRequest withGroupIds(String[] groupIds) {
        this.groupIds = groupIds;
        return this;
    }
}