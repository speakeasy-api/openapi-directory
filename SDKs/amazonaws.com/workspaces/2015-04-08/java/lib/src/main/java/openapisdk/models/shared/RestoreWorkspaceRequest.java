package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RestoreWorkspaceRequest {
    @JsonProperty("WorkspaceId")
    public String workspaceId;
    public RestoreWorkspaceRequest withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}