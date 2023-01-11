package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateDeploymentConfigInput
 * Represents the input of a <code>CreateDeploymentConfig</code> operation.
**/
public class CreateDeploymentConfigInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("computePlatform")
    public ComputePlatformEnum computePlatform;
    public CreateDeploymentConfigInput withComputePlatform(ComputePlatformEnum computePlatform) {
        this.computePlatform = computePlatform;
        return this;
    }
    @JsonProperty("deploymentConfigName")
    public String deploymentConfigName;
    public CreateDeploymentConfigInput withDeploymentConfigName(String deploymentConfigName) {
        this.deploymentConfigName = deploymentConfigName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumHealthyHosts")
    public MinimumHealthyHosts minimumHealthyHosts;
    public CreateDeploymentConfigInput withMinimumHealthyHosts(MinimumHealthyHosts minimumHealthyHosts) {
        this.minimumHealthyHosts = minimumHealthyHosts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trafficRoutingConfig")
    public TrafficRoutingConfig trafficRoutingConfig;
    public CreateDeploymentConfigInput withTrafficRoutingConfig(TrafficRoutingConfig trafficRoutingConfig) {
        this.trafficRoutingConfig = trafficRoutingConfig;
        return this;
    }
}