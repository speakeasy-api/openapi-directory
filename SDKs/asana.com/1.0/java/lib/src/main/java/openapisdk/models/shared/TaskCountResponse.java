package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TaskCountResponse
 * A response object returned from the task count endpoint.
**/
public class TaskCountResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_completed_milestones")
    public Long numCompletedMilestones;
    public TaskCountResponse withNumCompletedMilestones(Long numCompletedMilestones) {
        this.numCompletedMilestones = numCompletedMilestones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_completed_tasks")
    public Long numCompletedTasks;
    public TaskCountResponse withNumCompletedTasks(Long numCompletedTasks) {
        this.numCompletedTasks = numCompletedTasks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_incomplete_milestones")
    public Long numIncompleteMilestones;
    public TaskCountResponse withNumIncompleteMilestones(Long numIncompleteMilestones) {
        this.numIncompleteMilestones = numIncompleteMilestones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_incomplete_tasks")
    public Long numIncompleteTasks;
    public TaskCountResponse withNumIncompleteTasks(Long numIncompleteTasks) {
        this.numIncompleteTasks = numIncompleteTasks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_milestones")
    public Long numMilestones;
    public TaskCountResponse withNumMilestones(Long numMilestones) {
        this.numMilestones = numMilestones;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("num_tasks")
    public Long numTasks;
    public TaskCountResponse withNumTasks(Long numTasks) {
        this.numTasks = numTasks;
        return this;
    }
}