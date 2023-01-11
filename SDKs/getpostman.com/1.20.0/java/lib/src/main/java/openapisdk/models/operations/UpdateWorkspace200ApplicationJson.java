package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateWorkspace200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace")
    public UpdateWorkspace200ApplicationJsonWorkspace workspace;
    public UpdateWorkspace200ApplicationJson withWorkspace(UpdateWorkspace200ApplicationJsonWorkspace workspace) {
        this.workspace = workspace;
        return this;
    }
}