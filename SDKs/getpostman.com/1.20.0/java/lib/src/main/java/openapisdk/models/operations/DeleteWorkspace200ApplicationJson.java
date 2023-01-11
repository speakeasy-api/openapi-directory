package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteWorkspace200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace")
    public DeleteWorkspace200ApplicationJsonWorkspace workspace;
    public DeleteWorkspace200ApplicationJson withWorkspace(DeleteWorkspace200ApplicationJsonWorkspace workspace) {
        this.workspace = workspace;
        return this;
    }
}