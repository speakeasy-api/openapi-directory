package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ResumeWorkflowRunResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NodeIds")
    public String[] nodeIds;
    public ResumeWorkflowRunResponse withNodeIds(String[] nodeIds) {
        this.nodeIds = nodeIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RunId")
    public String runId;
    public ResumeWorkflowRunResponse withRunId(String runId) {
        this.runId = runId;
        return this;
    }
}