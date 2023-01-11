package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateWorkspacesRequest {
    @JsonProperty("Workspaces")
    public WorkspaceRequest[] workspaces;
    public CreateWorkspacesRequest withWorkspaces(WorkspaceRequest[] workspaces) {
        this.workspaces = workspaces;
        return this;
    }
}