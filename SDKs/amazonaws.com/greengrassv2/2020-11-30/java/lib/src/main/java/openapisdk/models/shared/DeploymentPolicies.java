package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeploymentPolicies
 * Contains information about policies that define how a deployment updates components and handles failure.
**/
public class DeploymentPolicies {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("componentUpdatePolicy")
    public DeploymentComponentUpdatePolicy componentUpdatePolicy;
    public DeploymentPolicies withComponentUpdatePolicy(DeploymentComponentUpdatePolicy componentUpdatePolicy) {
        this.componentUpdatePolicy = componentUpdatePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("configurationValidationPolicy")
    public DeploymentConfigurationValidationPolicy configurationValidationPolicy;
    public DeploymentPolicies withConfigurationValidationPolicy(DeploymentConfigurationValidationPolicy configurationValidationPolicy) {
        this.configurationValidationPolicy = configurationValidationPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("failureHandlingPolicy")
    public DeploymentFailureHandlingPolicyEnum failureHandlingPolicy;
    public DeploymentPolicies withFailureHandlingPolicy(DeploymentFailureHandlingPolicyEnum failureHandlingPolicy) {
        this.failureHandlingPolicy = failureHandlingPolicy;
        return this;
    }
}