package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class BatchGetProjectsOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projects")
    public Project[] projects;
    public BatchGetProjectsOutput withProjects(Project[] projects) {
        this.projects = projects;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("projectsNotFound")
    public String[] projectsNotFound;
    public BatchGetProjectsOutput withProjectsNotFound(String[] projectsNotFound) {
        this.projectsNotFound = projectsNotFound;
        return this;
    }
}