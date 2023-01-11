package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateTaskRequest
 * UpdateTaskResponse
**/
public class UpdateTaskRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CloudWatchLogGroupArn")
    public String cloudWatchLogGroupArn;
    public UpdateTaskRequest withCloudWatchLogGroupArn(String cloudWatchLogGroupArn) {
        this.cloudWatchLogGroupArn = cloudWatchLogGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Excludes")
    public FilterRule[] excludes;
    public UpdateTaskRequest withExcludes(FilterRule[] excludes) {
        this.excludes = excludes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Includes")
    public FilterRule[] includes;
    public UpdateTaskRequest withIncludes(FilterRule[] includes) {
        this.includes = includes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdateTaskRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Options")
    public Options options;
    public UpdateTaskRequest withOptions(Options options) {
        this.options = options;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schedule")
    public TaskSchedule schedule;
    public UpdateTaskRequest withSchedule(TaskSchedule schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonProperty("TaskArn")
    public String taskArn;
    public UpdateTaskRequest withTaskArn(String taskArn) {
        this.taskArn = taskArn;
        return this;
    }
}