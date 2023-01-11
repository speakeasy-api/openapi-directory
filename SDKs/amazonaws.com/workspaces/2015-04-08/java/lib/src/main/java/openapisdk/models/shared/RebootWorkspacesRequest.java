package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RebootWorkspacesRequest {
    @JsonProperty("RebootWorkspaceRequests")
    public RebootRequest[] rebootWorkspaceRequests;
    public RebootWorkspacesRequest withRebootWorkspaceRequests(RebootRequest[] rebootWorkspaceRequests) {
        this.rebootWorkspaceRequests = rebootWorkspaceRequests;
        return this;
    }
}