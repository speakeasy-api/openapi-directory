package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * WorkspaceStatus
 * Represents the status of a workspace.
**/
public class WorkspaceStatus {
    @JsonProperty("statusCode")
    public WorkspaceStatusCodeEnum statusCode;
    public WorkspaceStatus withStatusCode(WorkspaceStatusCodeEnum statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}