package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartExportLabelsTaskRunResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaskRunId")
    public String taskRunId;
    public StartExportLabelsTaskRunResponse withTaskRunId(String taskRunId) {
        this.taskRunId = taskRunId;
        return this;
    }
}