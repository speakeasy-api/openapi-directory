package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * RebootRequest
 * Describes the information used to reboot a WorkSpace.
**/
public class RebootRequest {
    @JsonProperty("WorkspaceId")
    public String workspaceId;
    public RebootRequest withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}