package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetWorkflowRunRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IncludeGraph")
    public Boolean includeGraph;
    public GetWorkflowRunRequest withIncludeGraph(Boolean includeGraph) {
        this.includeGraph = includeGraph;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public GetWorkflowRunRequest withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("RunId")
    public String runId;
    public GetWorkflowRunRequest withRunId(String runId) {
        this.runId = runId;
        return this;
    }
}