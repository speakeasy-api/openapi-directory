package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RebuildWorkspacesRequest {
    @JsonProperty("RebuildWorkspaceRequests")
    public RebuildRequest[] rebuildWorkspaceRequests;
    public RebuildWorkspacesRequest withRebuildWorkspaceRequests(RebuildRequest[] rebuildWorkspaceRequests) {
        this.rebuildWorkspaceRequests = rebuildWorkspaceRequests;
        return this;
    }
}