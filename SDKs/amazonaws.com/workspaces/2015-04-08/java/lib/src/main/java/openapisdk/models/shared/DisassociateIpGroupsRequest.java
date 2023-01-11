package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DisassociateIpGroupsRequest {
    @JsonProperty("DirectoryId")
    public String directoryId;
    public DisassociateIpGroupsRequest withDirectoryId(String directoryId) {
        this.directoryId = directoryId;
        return this;
    }
    @JsonProperty("GroupIds")
    public String[] groupIds;
    public DisassociateIpGroupsRequest withGroupIds(String[] groupIds) {
        this.groupIds = groupIds;
        return this;
    }
}