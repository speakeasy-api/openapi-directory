package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StopWorkspacesResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FailedRequests")
    public FailedWorkspaceChangeRequest[] failedRequests;
    public StopWorkspacesResult withFailedRequests(FailedWorkspaceChangeRequest[] failedRequests) {
        this.failedRequests = failedRequests;
        return this;
    }
}