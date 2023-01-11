package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgress {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error_steps")
    public Integer errorSteps;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgress withErrorSteps(Integer errorSteps) {
        this.errorSteps = errorSteps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pending_steps")
    public Integer pendingSteps;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgress withPendingSteps(Integer pendingSteps) {
        this.pendingSteps = pendingSteps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("running_steps")
    public Integer runningSteps;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgress withRunningSteps(Integer runningSteps) {
        this.runningSteps = runningSteps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("steps")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle[] steps;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgress withSteps(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgressAStepThatIsRunAsPartOfTheDeploymentSLifecycle[] steps) {
        this.steps = steps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("success_steps")
    public Integer successSteps;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgress withSuccessSteps(Integer successSteps) {
        this.successSteps = successSteps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("summary_steps")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems[] summarySteps;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgress withSummarySteps(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesProgressPropertiesStepsItems[] summarySteps) {
        this.summarySteps = summarySteps;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_steps")
    public Integer totalSteps;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsProgress withTotalSteps(Integer totalSteps) {
        this.totalSteps = totalSteps;
        return this;
    }
}