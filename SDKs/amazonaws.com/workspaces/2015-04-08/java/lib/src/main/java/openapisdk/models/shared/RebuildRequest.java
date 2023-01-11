package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RebuildRequest
 * Describes the information used to rebuild a WorkSpace.
**/
public class RebuildRequest {
    @JsonProperty("WorkspaceId")
    public String workspaceId;
    public RebuildRequest withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}