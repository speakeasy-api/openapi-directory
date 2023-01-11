package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TerminateWorkspacesRequest {
    @JsonProperty("TerminateWorkspaceRequests")
    public TerminateRequest[] terminateWorkspaceRequests;
    public TerminateWorkspacesRequest withTerminateWorkspaceRequests(TerminateRequest[] terminateWorkspaceRequests) {
        this.terminateWorkspaceRequests = terminateWorkspaceRequests;
        return this;
    }
}