package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartDetectMitigationActionsTaskResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskId")
    public String taskId;
    public StartDetectMitigationActionsTaskResponse withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}