package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ModifyWorkspaceCreationPropertiesRequest {
    @JsonProperty("ResourceId")
    public String resourceId;
    public ModifyWorkspaceCreationPropertiesRequest withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("WorkspaceCreationProperties")
    public WorkspaceCreationProperties workspaceCreationProperties;
    public ModifyWorkspaceCreationPropertiesRequest withWorkspaceCreationProperties(WorkspaceCreationProperties workspaceCreationProperties) {
        this.workspaceCreationProperties = workspaceCreationProperties;
        return this;
    }
}