package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartWorkflowRunResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RunId")
    public String runId;
    public StartWorkflowRunResponse withRunId(String runId) {
        this.runId = runId;
        return this;
    }
}