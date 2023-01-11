package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateProjectResult
 * Represents the result of a create project request.
**/
public class CreateProjectResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public Project project;
    public CreateProjectResult withProject(Project project) {
        this.project = project;
        return this;
    }
}