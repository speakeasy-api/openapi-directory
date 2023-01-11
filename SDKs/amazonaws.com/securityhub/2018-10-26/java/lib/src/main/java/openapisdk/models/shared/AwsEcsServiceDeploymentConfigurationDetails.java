package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsServiceDeploymentConfigurationDetails
 * Optional deployment parameters for the service.
**/
public class AwsEcsServiceDeploymentConfigurationDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeploymentCircuitBreaker")
    public AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails deploymentCircuitBreaker;
    public AwsEcsServiceDeploymentConfigurationDetails withDeploymentCircuitBreaker(AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails deploymentCircuitBreaker) {
        this.deploymentCircuitBreaker = deploymentCircuitBreaker;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MaximumPercent")
    public Long maximumPercent;
    public AwsEcsServiceDeploymentConfigurationDetails withMaximumPercent(Long maximumPercent) {
        this.maximumPercent = maximumPercent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MinimumHealthyPercent")
    public Long minimumHealthyPercent;
    public AwsEcsServiceDeploymentConfigurationDetails withMinimumHealthyPercent(Long minimumHealthyPercent) {
        this.minimumHealthyPercent = minimumHealthyPercent;
        return this;
    }
}