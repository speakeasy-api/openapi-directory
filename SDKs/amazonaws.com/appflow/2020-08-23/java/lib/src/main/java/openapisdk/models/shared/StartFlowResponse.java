package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartFlowResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("executionId")
    public String executionId;
    public StartFlowResponse withExecutionId(String executionId) {
        this.executionId = executionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flowArn")
    public String flowArn;
    public StartFlowResponse withFlowArn(String flowArn) {
        this.flowArn = flowArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flowStatus")
    public FlowStatusEnum flowStatus;
    public StartFlowResponse withFlowStatus(FlowStatusEnum flowStatus) {
        this.flowStatus = flowStatus;
        return this;
    }
}