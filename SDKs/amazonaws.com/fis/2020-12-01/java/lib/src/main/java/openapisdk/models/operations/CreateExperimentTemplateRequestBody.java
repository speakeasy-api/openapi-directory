package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateExperimentTemplateRequestBody {
    @JsonProperty("actions")
    public java.util.Map<String, openapisdk.models.shared.CreateExperimentTemplateActionInput> actions;
    public CreateExperimentTemplateRequestBody withActions(java.util.Map<String, openapisdk.models.shared.CreateExperimentTemplateActionInput> actions) {
        this.actions = actions;
        return this;
    }
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateExperimentTemplateRequestBody withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("description")
    public String description;
    public CreateExperimentTemplateRequestBody withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("roleArn")
    public String roleArn;
    public CreateExperimentTemplateRequestBody withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonProperty("stopConditions")
    public openapisdk.models.shared.CreateExperimentTemplateStopConditionInput[] stopConditions;
    public CreateExperimentTemplateRequestBody withStopConditions(openapisdk.models.shared.CreateExperimentTemplateStopConditionInput[] stopConditions) {
        this.stopConditions = stopConditions;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateExperimentTemplateRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targets")
    public java.util.Map<String, openapisdk.models.shared.CreateExperimentTemplateTargetInput> targets;
    public CreateExperimentTemplateRequestBody withTargets(java.util.Map<String, openapisdk.models.shared.CreateExperimentTemplateTargetInput> targets) {
        this.targets = targets;
        return this;
    }
}