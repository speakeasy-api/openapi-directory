package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeFlowRequestBody {
    @JsonProperty("flowName")
    public String flowName;
    public DescribeFlowRequestBody withFlowName(String flowName) {
        this.flowName = flowName;
        return this;
    }
}