package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WorkspaceReadList {
    @JsonProperty("workspaces")
    public WorkspaceRead[] workspaces;
    public WorkspaceReadList withWorkspaces(WorkspaceRead[] workspaces) {
        this.workspaces = workspaces;
        return this;
    }
}