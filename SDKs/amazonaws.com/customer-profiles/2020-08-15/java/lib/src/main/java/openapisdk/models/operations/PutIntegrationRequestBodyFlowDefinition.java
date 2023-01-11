package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PutIntegrationRequestBodyFlowDefinition
 * The configurations that control how Customer Profiles retrieves data from the source, Amazon AppFlow. Customer Profiles uses this information to create an AppFlow flow on behalf of customers.
**/
public class PutIntegrationRequestBodyFlowDefinition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public PutIntegrationRequestBodyFlowDefinition withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FlowName")
    public String flowName;
    public PutIntegrationRequestBodyFlowDefinition withFlowName(String flowName) {
        this.flowName = flowName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsArn")
    public String kmsArn;
    public PutIntegrationRequestBodyFlowDefinition withKmsArn(String kmsArn) {
        this.kmsArn = kmsArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SourceFlowConfig")
    public openapisdk.models.shared.SourceFlowConfig sourceFlowConfig;
    public PutIntegrationRequestBodyFlowDefinition withSourceFlowConfig(openapisdk.models.shared.SourceFlowConfig sourceFlowConfig) {
        this.sourceFlowConfig = sourceFlowConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tasks")
    public openapisdk.models.shared.Task[] tasks;
    public PutIntegrationRequestBodyFlowDefinition withTasks(openapisdk.models.shared.Task[] tasks) {
        this.tasks = tasks;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TriggerConfig")
    public openapisdk.models.shared.TriggerConfig triggerConfig;
    public PutIntegrationRequestBodyFlowDefinition withTriggerConfig(openapisdk.models.shared.TriggerConfig triggerConfig) {
        this.triggerConfig = triggerConfig;
        return this;
    }
}