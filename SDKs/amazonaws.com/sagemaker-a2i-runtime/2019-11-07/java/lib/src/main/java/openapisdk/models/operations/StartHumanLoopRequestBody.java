package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartHumanLoopRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataAttributes")
    public StartHumanLoopRequestBodyDataAttributes dataAttributes;
    public StartHumanLoopRequestBody withDataAttributes(StartHumanLoopRequestBodyDataAttributes dataAttributes) {
        this.dataAttributes = dataAttributes;
        return this;
    }
    @JsonProperty("FlowDefinitionArn")
    public String flowDefinitionArn;
    public StartHumanLoopRequestBody withFlowDefinitionArn(String flowDefinitionArn) {
        this.flowDefinitionArn = flowDefinitionArn;
        return this;
    }
    @JsonProperty("HumanLoopInput")
    public StartHumanLoopRequestBodyHumanLoopInput humanLoopInput;
    public StartHumanLoopRequestBody withHumanLoopInput(StartHumanLoopRequestBodyHumanLoopInput humanLoopInput) {
        this.humanLoopInput = humanLoopInput;
        return this;
    }
    @JsonProperty("HumanLoopName")
    public String humanLoopName;
    public StartHumanLoopRequestBody withHumanLoopName(String humanLoopName) {
        this.humanLoopName = humanLoopName;
        return this;
    }
}