package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaskAddProjectRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insert_after")
    public String insertAfter;
    public TaskAddProjectRequest withInsertAfter(String insertAfter) {
        this.insertAfter = insertAfter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("insert_before")
    public String insertBefore;
    public TaskAddProjectRequest withInsertBefore(String insertBefore) {
        this.insertBefore = insertBefore;
        return this;
    }
    @JsonProperty("project")
    public String project;
    public TaskAddProjectRequest withProject(String project) {
        this.project = project;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("section")
    public String section;
    public TaskAddProjectRequest withSection(String section) {
        this.section = section;
        return this;
    }
}