package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class TaskRemoveProjectRequest {
    @JsonProperty("project")
    public String project;
    public TaskRemoveProjectRequest withProject(String project) {
        this.project = project;
        return this;
    }
}