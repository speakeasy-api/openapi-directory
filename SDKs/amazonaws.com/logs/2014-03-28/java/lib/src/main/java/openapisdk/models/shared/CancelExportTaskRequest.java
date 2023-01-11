package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CancelExportTaskRequest {
    @JsonProperty("taskId")
    public String taskId;
    public CancelExportTaskRequest withTaskId(String taskId) {
        this.taskId = taskId;
        return this;
    }
}