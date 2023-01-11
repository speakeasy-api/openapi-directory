package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateServiceRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capacityProviderStrategy")
    public CapacityProviderStrategyItem[] capacityProviderStrategy;
    public UpdateServiceRequest withCapacityProviderStrategy(CapacityProviderStrategyItem[] capacityProviderStrategy) {
        this.capacityProviderStrategy = capacityProviderStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster")
    public String cluster;
    public UpdateServiceRequest withCluster(String cluster) {
        this.cluster = cluster;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentConfiguration")
    public DeploymentConfiguration deploymentConfiguration;
    public UpdateServiceRequest withDeploymentConfiguration(DeploymentConfiguration deploymentConfiguration) {
        this.deploymentConfiguration = deploymentConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desiredCount")
    public Long desiredCount;
    public UpdateServiceRequest withDesiredCount(Long desiredCount) {
        this.desiredCount = desiredCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableExecuteCommand")
    public Boolean enableExecuteCommand;
    public UpdateServiceRequest withEnableExecuteCommand(Boolean enableExecuteCommand) {
        this.enableExecuteCommand = enableExecuteCommand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("forceNewDeployment")
    public Boolean forceNewDeployment;
    public UpdateServiceRequest withForceNewDeployment(Boolean forceNewDeployment) {
        this.forceNewDeployment = forceNewDeployment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthCheckGracePeriodSeconds")
    public Long healthCheckGracePeriodSeconds;
    public UpdateServiceRequest withHealthCheckGracePeriodSeconds(Long healthCheckGracePeriodSeconds) {
        this.healthCheckGracePeriodSeconds = healthCheckGracePeriodSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkConfiguration")
    public NetworkConfiguration networkConfiguration;
    public UpdateServiceRequest withNetworkConfiguration(NetworkConfiguration networkConfiguration) {
        this.networkConfiguration = networkConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementConstraints")
    public PlacementConstraint[] placementConstraints;
    public UpdateServiceRequest withPlacementConstraints(PlacementConstraint[] placementConstraints) {
        this.placementConstraints = placementConstraints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementStrategy")
    public PlacementStrategy[] placementStrategy;
    public UpdateServiceRequest withPlacementStrategy(PlacementStrategy[] placementStrategy) {
        this.placementStrategy = placementStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platformVersion")
    public String platformVersion;
    public UpdateServiceRequest withPlatformVersion(String platformVersion) {
        this.platformVersion = platformVersion;
        return this;
    }
    @JsonProperty("service")
    public String service;
    public UpdateServiceRequest withService(String service) {
        this.service = service;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskDefinition")
    public String taskDefinition;
    public UpdateServiceRequest withTaskDefinition(String taskDefinition) {
        this.taskDefinition = taskDefinition;
        return this;
    }
}