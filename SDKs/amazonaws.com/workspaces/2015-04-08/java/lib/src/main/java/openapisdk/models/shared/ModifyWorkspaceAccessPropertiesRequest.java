package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ModifyWorkspaceAccessPropertiesRequest {
    @JsonProperty("ResourceId")
    public String resourceId;
    public ModifyWorkspaceAccessPropertiesRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("WorkspaceAccessProperties")
    public WorkspaceAccessProperties workspaceAccessProperties;
    public ModifyWorkspaceAccessPropertiesRequest withWorkspaceAccessProperties(WorkspaceAccessProperties workspaceAccessProperties) {
        this.workspaceAccessProperties = workspaceAccessProperties;
        return this;
    }
}