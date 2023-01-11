package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails
 * Determines whether a service deployment fails if a service cannot reach a steady state.
**/
public class AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Enable")
    public Boolean enable;
    public AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails withEnable(Boolean enable) {
        this.enable = enable;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Rollback")
    public Boolean rollback;
    public AwsEcsServiceDeploymentConfigurationDeploymentCircuitBreakerDetails withRollback(Boolean rollback) {
        this.rollback = rollback;
        return this;
    }
}