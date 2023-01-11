package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleWorkspace200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace")
    public SingleWorkspace200ApplicationJsonWorkspace workspace;
    public SingleWorkspace200ApplicationJson withWorkspace(SingleWorkspace200ApplicationJsonWorkspace workspace) {
        this.workspace = workspace;
        return this;
    }
}