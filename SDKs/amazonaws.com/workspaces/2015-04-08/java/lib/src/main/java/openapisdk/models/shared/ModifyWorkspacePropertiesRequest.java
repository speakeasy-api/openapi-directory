package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ModifyWorkspacePropertiesRequest {
    @JsonProperty("WorkspaceId")
    public String workspaceId;
    public ModifyWorkspacePropertiesRequest withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
    @JsonProperty("WorkspaceProperties")
    public WorkspaceProperties workspaceProperties;
    public ModifyWorkspacePropertiesRequest withWorkspaceProperties(WorkspaceProperties workspaceProperties) {
        this.workspaceProperties = workspaceProperties;
        return this;
    }
}