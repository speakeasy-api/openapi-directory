package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PollForTaskOutput
 * Contains the output of PollForTask.
**/
public class PollForTaskOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskObject")
    public TaskObject taskObject;
    public PollForTaskOutput withTaskObject(TaskObject taskObject) {
        this.taskObject = taskObject;
        return this;
    }
}