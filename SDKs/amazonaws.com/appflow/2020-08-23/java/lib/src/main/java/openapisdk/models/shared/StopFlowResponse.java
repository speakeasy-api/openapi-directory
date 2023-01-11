package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StopFlowResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flowArn")
    public String flowArn;
    public StopFlowResponse withFlowArn(String flowArn) {
        this.flowArn = flowArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flowStatus")
    public FlowStatusEnum flowStatus;
    public StopFlowResponse withFlowStatus(FlowStatusEnum flowStatus) {
        this.flowStatus = flowStatus;
        return this;
    }
}