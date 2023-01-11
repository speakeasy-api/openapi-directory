package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDeploymentRequestBodyDeploymentPolicies
 * Contains information about policies that define how a deployment updates components and handles failure.
**/
public class CreateDeploymentRequestBodyDeploymentPolicies {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentUpdatePolicy")
    public openapisdk.models.shared.DeploymentComponentUpdatePolicy componentUpdatePolicy;
    public CreateDeploymentRequestBodyDeploymentPolicies withComponentUpdatePolicy(openapisdk.models.shared.DeploymentComponentUpdatePolicy componentUpdatePolicy) {
        this.componentUpdatePolicy = componentUpdatePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configurationValidationPolicy")
    public openapisdk.models.shared.DeploymentConfigurationValidationPolicy configurationValidationPolicy;
    public CreateDeploymentRequestBodyDeploymentPolicies withConfigurationValidationPolicy(openapisdk.models.shared.DeploymentConfigurationValidationPolicy configurationValidationPolicy) {
        this.configurationValidationPolicy = configurationValidationPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureHandlingPolicy")
    public openapisdk.models.shared.DeploymentFailureHandlingPolicyEnum failureHandlingPolicy;
    public CreateDeploymentRequestBodyDeploymentPolicies withFailureHandlingPolicy(openapisdk.models.shared.DeploymentFailureHandlingPolicyEnum failureHandlingPolicy) {
        this.failureHandlingPolicy = failureHandlingPolicy;
        return this;
    }
}