package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ActionsCreateWorkflowDispatchRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("inputs")
    public java.util.Map<String, String> inputs;
    public ActionsCreateWorkflowDispatchRequestBody withInputs(java.util.Map<String, String> inputs) {
        this.inputs = inputs;
        return this;
    }
    @JsonProperty("ref")
    public String ref;
    public ActionsCreateWorkflowDispatchRequestBody withRef(String ref) {
        this.ref = ref;
        return this;
    }
}