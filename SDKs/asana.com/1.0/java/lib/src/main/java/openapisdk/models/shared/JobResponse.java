package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * JobResponse
 * A *job* is an object representing a process that handles asynchronous work.
**/
public class JobResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("gid")
    public String gid;
    public JobResponse withGid(String gid) {
        this.gid = gid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("new_project")
    public ProjectCompact newProject;
    public JobResponse withNewProject(ProjectCompact newProject) {
        this.newProject = newProject;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("new_task")
    public TaskCompact newTask;
    public JobResponse withNewTask(TaskCompact newTask) {
        this.newTask = newTask;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_subtype")
    public String resourceSubtype;
    public JobResponse withResourceSubtype(String resourceSubtype) {
        this.resourceSubtype = resourceSubtype;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("resource_type")
    public String resourceType;
    public JobResponse withResourceType(String resourceType) {
        this.resourceType = resourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public JobResponseStatusEnum status;
    public JobResponse withStatus(JobResponseStatusEnum status) {
        this.status = status;
        return this;
    }
}