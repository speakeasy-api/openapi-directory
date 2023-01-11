package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateProjectOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public Project project;
    public UpdateProjectOutput withProject(Project project) {
        this.project = project;
        return this;
    }
}