package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class StopFlowRequestBody {
    @JsonProperty("flowName")
    public String flowName;
    public StopFlowRequestBody withFlowName(String flowName) {
        this.flowName = flowName;
        return this;
    }
}