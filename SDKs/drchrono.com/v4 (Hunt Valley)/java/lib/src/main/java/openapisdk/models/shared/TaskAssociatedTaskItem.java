package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TaskAssociatedTaskItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("task")
    public Long task;
    public TaskAssociatedTaskItem withTask(Long task) {
        this.task = task;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public TaskAssociatedTaskItemTypeEnum type;
    public TaskAssociatedTaskItem withType(TaskAssociatedTaskItemTypeEnum type) {
        this.type = type;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public Long value;
    public TaskAssociatedTaskItem withValue(Long value) {
        this.value = value;
        return this;
    }
}