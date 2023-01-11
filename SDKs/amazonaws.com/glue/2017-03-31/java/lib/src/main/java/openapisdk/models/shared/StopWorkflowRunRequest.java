package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopWorkflowRunRequest {
    @JsonProperty("Name")
    public String name;
    public StopWorkflowRunRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RunId")
    public String runId;
    public StopWorkflowRunRequest withRunId(String runId) {
        this.runId = runId;
        return this;
    }
}