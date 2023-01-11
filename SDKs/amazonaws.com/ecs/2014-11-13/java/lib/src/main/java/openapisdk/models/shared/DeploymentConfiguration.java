package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeploymentConfiguration
 * Optional deployment parameters that control how many tasks run during a deployment and the ordering of stopping and starting tasks.
**/
public class DeploymentConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentCircuitBreaker")
    public DeploymentCircuitBreaker deploymentCircuitBreaker;
    public DeploymentConfiguration withDeploymentCircuitBreaker(DeploymentCircuitBreaker deploymentCircuitBreaker) {
        this.deploymentCircuitBreaker = deploymentCircuitBreaker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumPercent")
    public Long maximumPercent;
    public DeploymentConfiguration withMaximumPercent(Long maximumPercent) {
        this.maximumPercent = maximumPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumHealthyPercent")
    public Long minimumHealthyPercent;
    public DeploymentConfiguration withMinimumHealthyPercent(Long minimumHealthyPercent) {
        this.minimumHealthyPercent = minimumHealthyPercent;
        return this;
    }
}