package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployments200ApplicationJsonAnAppDeploymentProgress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_steps")
    public Integer errorSteps;
    public ListDeployments200ApplicationJsonAnAppDeploymentProgress withErrorSteps(Integer errorSteps) {
        this.errorSteps = errorSteps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pending_steps")
    public Integer pendingSteps;
    public ListDeployments200ApplicationJsonAnAppDeploymentProgress withPendingSteps(Integer pendingSteps) {
        this.pendingSteps = pendingSteps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("running_steps")
    public Integer runningSteps;
    public ListDeployments200ApplicationJsonAnAppDeploymentProgress withRunningSteps(Integer runningSteps) {
        this.runningSteps = runningSteps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("steps")
    public ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle[] steps;
    public ListDeployments200ApplicationJsonAnAppDeploymentProgress withSteps(ListDeployments200ApplicationJsonAnAppDeploymentProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle[] steps) {
        this.steps = steps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success_steps")
    public Integer successSteps;
    public ListDeployments200ApplicationJsonAnAppDeploymentProgress withSuccessSteps(Integer successSteps) {
        this.successSteps = successSteps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary_steps")
    public openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems[] summarySteps;
    public ListDeployments200ApplicationJsonAnAppDeploymentProgress withSummarySteps(openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems[] summarySteps) {
        this.summarySteps = summarySteps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_steps")
    public Integer totalSteps;
    public ListDeployments200ApplicationJsonAnAppDeploymentProgress withTotalSteps(Integer totalSteps) {
        this.totalSteps = totalSteps;
        return this;
    }
}