package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ModifyWorkspaceStateRequest {
    @JsonProperty("WorkspaceId")
    public String workspaceId;
    public ModifyWorkspaceStateRequest withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
    @JsonProperty("WorkspaceState")
    public TargetWorkspaceStateEnum workspaceState;
    public ModifyWorkspaceStateRequest withWorkspaceState(TargetWorkspaceStateEnum workspaceState) {
        this.workspaceState = workspaceState;
        return this;
    }
}