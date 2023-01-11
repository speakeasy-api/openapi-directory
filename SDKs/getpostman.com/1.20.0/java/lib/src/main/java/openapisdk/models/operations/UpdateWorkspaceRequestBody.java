package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateWorkspaceRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace")
    public UpdateWorkspaceRequestBodyWorkspace workspace;
    public UpdateWorkspaceRequestBody withWorkspace(UpdateWorkspaceRequestBodyWorkspace workspace) {
        this.workspace = workspace;
        return this;
    }
}