package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class WorkspaceIdRequestBody {
    @JsonProperty("workspaceId")
    public String workspaceId;
    public WorkspaceIdRequestBody withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}