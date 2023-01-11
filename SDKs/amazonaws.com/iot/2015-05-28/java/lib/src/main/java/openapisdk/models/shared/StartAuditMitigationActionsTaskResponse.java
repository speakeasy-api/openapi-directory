package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartAuditMitigationActionsTaskResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskId")
    public String taskId;
    public StartAuditMitigationActionsTaskResponse withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}