package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetWorkflowRunPropertiesRequest {
    @JsonProperty("Name")
    public String name;
    public GetWorkflowRunPropertiesRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RunId")
    public String runId;
    public GetWorkflowRunPropertiesRequest withRunId(String runId) {
        this.runId = runId;
        return this;
    }
}