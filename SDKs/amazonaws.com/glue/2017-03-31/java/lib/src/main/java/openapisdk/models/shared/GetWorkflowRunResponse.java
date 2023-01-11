package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetWorkflowRunResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Run")
    public WorkflowRun run;
    public GetWorkflowRunResponse withRun(WorkflowRun run) {
        this.run = run;
        return this;
    }
}