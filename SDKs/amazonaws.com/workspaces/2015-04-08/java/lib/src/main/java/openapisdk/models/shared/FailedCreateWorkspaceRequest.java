package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FailedCreateWorkspaceRequest
 * Describes a WorkSpace that cannot be created.
**/
public class FailedCreateWorkspaceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorCode")
    public String errorCode;
    public FailedCreateWorkspaceRequest withErrorCode(String errorCode) {
        this.errorCode = errorCode;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public FailedCreateWorkspaceRequest withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkspaceRequest")
    public WorkspaceRequest workspaceRequest;
    public FailedCreateWorkspaceRequest withWorkspaceRequest(WorkspaceRequest workspaceRequest) {
        this.workspaceRequest = workspaceRequest;
        return this;
    }
}