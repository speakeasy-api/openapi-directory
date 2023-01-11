package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateExperimentTemplateRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("actions")
    public java.util.Map<String, openapisdk.models.shared.UpdateExperimentTemplateActionInputItem> actions;
    public UpdateExperimentTemplateRequestBody withActions(java.util.Map<String, openapisdk.models.shared.UpdateExperimentTemplateActionInputItem> actions) {
        this.actions = actions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateExperimentTemplateRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public UpdateExperimentTemplateRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("stopConditions")
    public openapisdk.models.shared.UpdateExperimentTemplateStopConditionInput[] stopConditions;
    public UpdateExperimentTemplateRequestBody withStopConditions(openapisdk.models.shared.UpdateExperimentTemplateStopConditionInput[] stopConditions) {
        this.stopConditions = stopConditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public java.util.Map<String, openapisdk.models.shared.UpdateExperimentTemplateTargetInput> targets;
    public UpdateExperimentTemplateRequestBody withTargets(java.util.Map<String, openapisdk.models.shared.UpdateExperimentTemplateTargetInput> targets) {
        this.targets = targets;
        return this;
    }
}