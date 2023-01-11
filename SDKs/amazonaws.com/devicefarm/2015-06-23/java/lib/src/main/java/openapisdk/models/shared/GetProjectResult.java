package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * GetProjectResult
 * Represents the result of a get project request.
**/
public class GetProjectResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public Project project;
    public GetProjectResult withProject(Project project) {
        this.project = project;
        return this;
    }
}