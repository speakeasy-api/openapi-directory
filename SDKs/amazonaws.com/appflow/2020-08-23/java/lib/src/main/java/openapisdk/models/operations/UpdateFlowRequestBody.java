package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateFlowRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateFlowRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("destinationFlowConfigList")
    public openapisdk.models.shared.DestinationFlowConfig[] destinationFlowConfigList;
    public UpdateFlowRequestBody withDestinationFlowConfigList(openapisdk.models.shared.DestinationFlowConfig[] destinationFlowConfigList) {
        this.destinationFlowConfigList = destinationFlowConfigList;
        return this;
    }
    @JsonProperty("flowName")
    public String flowName;
    public UpdateFlowRequestBody withFlowName(String flowName) {
        this.flowName = flowName;
        return this;
    }
    @JsonProperty("sourceFlowConfig")
    public UpdateFlowRequestBodySourceFlowConfig sourceFlowConfig;
    public UpdateFlowRequestBody withSourceFlowConfig(UpdateFlowRequestBodySourceFlowConfig sourceFlowConfig) {
        this.sourceFlowConfig = sourceFlowConfig;
        return this;
    }
    @JsonProperty("tasks")
    public openapisdk.models.shared.Task[] tasks;
    public UpdateFlowRequestBody withTasks(openapisdk.models.shared.Task[] tasks) {
        this.tasks = tasks;
        return this;
    }
    @JsonProperty("triggerConfig")
    public UpdateFlowRequestBodyTriggerConfig triggerConfig;
    public UpdateFlowRequestBody withTriggerConfig(UpdateFlowRequestBodyTriggerConfig triggerConfig) {
        this.triggerConfig = triggerConfig;
        return this;
    }
}