package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StopRequest
 * Describes the information used to stop a WorkSpace.
**/
public class StopRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkspaceId")
    public String workspaceId;
    public StopRequest withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}