package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFlowResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("flowStatus")
    public FlowStatusEnum flowStatus;
    public UpdateFlowResponse withFlowStatus(FlowStatusEnum flowStatus) {
        this.flowStatus = flowStatus;
        return this;
    }
}