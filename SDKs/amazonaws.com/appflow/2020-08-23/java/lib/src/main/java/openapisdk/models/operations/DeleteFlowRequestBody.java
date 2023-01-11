package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteFlowRequestBody {
    @JsonProperty("flowName")
    public String flowName;
    public DeleteFlowRequestBody withFlowName(String flowName) {
        this.flowName = flowName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forceDelete")
    public Boolean forceDelete;
    public DeleteFlowRequestBody withForceDelete(Boolean forceDelete) {
        this.forceDelete = forceDelete;
        return this;
    }
}