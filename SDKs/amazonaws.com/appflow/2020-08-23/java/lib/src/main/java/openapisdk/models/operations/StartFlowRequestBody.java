package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StartFlowRequestBody {
    @JsonProperty("flowName")
    public String flowName;
    public StartFlowRequestBody withFlowName(String flowName) {
        this.flowName = flowName;
        return this;
    }
}