package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateWorkspace200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace")
    public CreateWorkspace200ApplicationJsonWorkspace workspace;
    public CreateWorkspace200ApplicationJson withWorkspace(CreateWorkspace200ApplicationJsonWorkspace workspace) {
        this.workspace = workspace;
        return this;
    }
}