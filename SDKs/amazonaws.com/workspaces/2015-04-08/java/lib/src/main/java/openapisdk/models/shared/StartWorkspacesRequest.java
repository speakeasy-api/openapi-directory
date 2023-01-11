package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartWorkspacesRequest {
    @JsonProperty("StartWorkspaceRequests")
    public StartRequest[] startWorkspaceRequests;
    public StartWorkspacesRequest withStartWorkspaceRequests(StartRequest[] startWorkspaceRequests) {
        this.startWorkspaceRequests = startWorkspaceRequests;
        return this;
    }
}