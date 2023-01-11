package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * TerminateRequest
 * Describes the information used to terminate a WorkSpace.
**/
public class TerminateRequest {
    @JsonProperty("WorkspaceId")
    public String workspaceId;
    public TerminateRequest withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}