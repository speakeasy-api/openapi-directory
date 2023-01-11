package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateFlowRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateFlowRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("destinationFlowConfigList")
    public openapisdk.models.shared.DestinationFlowConfig[] destinationFlowConfigList;
    public CreateFlowRequestBody withDestinationFlowConfigList(openapisdk.models.shared.DestinationFlowConfig[] destinationFlowConfigList) {
        this.destinationFlowConfigList = destinationFlowConfigList;
        return this;
    }
    @JsonProperty("flowName")
    public String flowName;
    public CreateFlowRequestBody withFlowName(String flowName) {
        this.flowName = flowName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("kmsArn")
    public String kmsArn;
    public CreateFlowRequestBody withKmsArn(String kmsArn) {
        this.kmsArn = kmsArn;
        return this;
    }
    @JsonProperty("sourceFlowConfig")
    public CreateFlowRequestBodySourceFlowConfig sourceFlowConfig;
    public CreateFlowRequestBody withSourceFlowConfig(CreateFlowRequestBodySourceFlowConfig sourceFlowConfig) {
        this.sourceFlowConfig = sourceFlowConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateFlowRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("tasks")
    public openapisdk.models.shared.Task[] tasks;
    public CreateFlowRequestBody withTasks(openapisdk.models.shared.Task[] tasks) {
        this.tasks = tasks;
        return this;
    }
    @JsonProperty("triggerConfig")
    public CreateFlowRequestBodyTriggerConfig triggerConfig;
    public CreateFlowRequestBody withTriggerConfig(CreateFlowRequestBodyTriggerConfig triggerConfig) {
        this.triggerConfig = triggerConfig;
        return this;
    }
}