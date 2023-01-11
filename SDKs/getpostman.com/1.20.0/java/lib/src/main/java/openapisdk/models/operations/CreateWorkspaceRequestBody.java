package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWorkspaceRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace")
    public CreateWorkspaceRequestBodyWorkspace workspace;
    public CreateWorkspaceRequestBody withWorkspace(CreateWorkspaceRequestBodyWorkspace workspace) {
        this.workspace = workspace;
        return this;
    }
}