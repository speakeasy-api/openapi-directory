package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FailedWorkspaceChangeRequest
 * Describes a WorkSpace that could not be rebooted. (<a>RebootWorkspaces</a>), rebuilt (<a>RebuildWorkspaces</a>), restored (<a>RestoreWorkspace</a>), terminated (<a>TerminateWorkspaces</a>), started (<a>StartWorkspaces</a>), or stopped (<a>StopWorkspaces</a>).
**/
public class FailedWorkspaceChangeRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public String errorCode;
    public FailedWorkspaceChangeRequest withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public FailedWorkspaceChangeRequest withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkspaceId")
    public String workspaceId;
    public FailedWorkspaceChangeRequest withWorkspaceId(String workspaceId) {
        this.workspaceId = workspaceId;
        return this;
    }
}