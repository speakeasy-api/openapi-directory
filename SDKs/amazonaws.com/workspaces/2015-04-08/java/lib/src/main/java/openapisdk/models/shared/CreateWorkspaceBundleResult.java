package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWorkspaceBundleResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("WorkspaceBundle")
    public WorkspaceBundle workspaceBundle;
    public CreateWorkspaceBundleResult withWorkspaceBundle(WorkspaceBundle workspaceBundle) {
        this.workspaceBundle = workspaceBundle;
        return this;
    }
}