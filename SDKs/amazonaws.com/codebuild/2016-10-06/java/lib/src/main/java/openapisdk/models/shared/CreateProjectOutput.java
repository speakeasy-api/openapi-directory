package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateProjectOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("project")
    public Project project;
    public CreateProjectOutput withProject(Project project) {
        this.project = project;
        return this;
    }
}