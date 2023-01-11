package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWorkspacesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedRequests")
    public FailedCreateWorkspaceRequest[] failedRequests;
    public CreateWorkspacesResult withFailedRequests(FailedCreateWorkspaceRequest[] failedRequests) {
        this.failedRequests = failedRequests;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PendingRequests")
    public Workspace[] pendingRequests;
    public CreateWorkspacesResult withPendingRequests(Workspace[] pendingRequests) {
        this.pendingRequests = pendingRequests;
        return this;
    }
}