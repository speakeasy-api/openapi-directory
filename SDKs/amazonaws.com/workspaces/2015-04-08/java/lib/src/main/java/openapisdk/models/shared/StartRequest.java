package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * StartRequest
 * Information used to start a WorkSpace.
**/
public class StartRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkspaceId")
    public String workspaceId;
    public StartRequest withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}