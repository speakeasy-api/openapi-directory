package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AllWorkspaces200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspaces")
    public AllWorkspaces200ApplicationJsonWorkspaces[] workspaces;
    public AllWorkspaces200ApplicationJson withWorkspaces(AllWorkspaces200ApplicationJsonWorkspaces[] workspaces) {
        this.workspaces = workspaces;
        return this;
    }
}