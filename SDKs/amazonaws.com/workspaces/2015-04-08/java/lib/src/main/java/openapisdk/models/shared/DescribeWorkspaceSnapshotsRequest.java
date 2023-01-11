package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeWorkspaceSnapshotsRequest {
    @JsonProperty("WorkspaceId")
    public String workspaceId;
    public DescribeWorkspaceSnapshotsRequest withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}