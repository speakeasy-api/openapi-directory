package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * WorkspaceRequestInput
 * A *workspace* is the highest-level organizational unit in Asana. All projects and tasks have an associated workspace.
**/
public class WorkspaceRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public WorkspaceRequestInput withName(String name) {
        this.name = name;
        return this;
    }
}