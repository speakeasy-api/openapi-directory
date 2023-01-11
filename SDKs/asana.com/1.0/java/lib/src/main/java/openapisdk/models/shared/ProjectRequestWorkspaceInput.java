package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ProjectRequestWorkspaceInput
 * *Create-only*. The workspace or organization this project is associated with. Once created, projects cannot be moved to a different workspace. This attribute can only be specified at creation time.
**/
public class ProjectRequestWorkspaceInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public ProjectRequestWorkspaceInput withName(String name) {
        this.name = name;
        return this;
    }
}