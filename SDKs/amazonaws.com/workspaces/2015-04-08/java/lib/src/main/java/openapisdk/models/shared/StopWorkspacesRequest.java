package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopWorkspacesRequest {
    @JsonProperty("StopWorkspaceRequests")
    public StopRequest[] stopWorkspaceRequests;
    public StopWorkspacesRequest withStopWorkspaceRequests(StopRequest[] stopWorkspaceRequests) {
        this.stopWorkspaceRequests = stopWorkspaceRequests;
        return this;
    }
}