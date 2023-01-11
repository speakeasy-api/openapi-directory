package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Service
 * Details on a service within a cluster
**/
public class Service {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("capacityProviderStrategy")
    public CapacityProviderStrategyItem[] capacityProviderStrategy;
    public Service withCapacityProviderStrategy(CapacityProviderStrategyItem[] capacityProviderStrategy) {
        this.capacityProviderStrategy = capacityProviderStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clusterArn")
    public String clusterArn;
    public Service withClusterArn(String clusterArn) {
        this.clusterArn = clusterArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public Service withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("createdBy")
    public String createdBy;
    public Service withCreatedBy(String createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentConfiguration")
    public DeploymentConfiguration deploymentConfiguration;
    public Service withDeploymentConfiguration(DeploymentConfiguration deploymentConfiguration) {
        this.deploymentConfiguration = deploymentConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentController")
    public DeploymentController deploymentController;
    public Service withDeploymentController(DeploymentController deploymentController) {
        this.deploymentController = deploymentController;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deployments")
    public Deployment[] deployments;
    public Service withDeployments(Deployment[] deployments) {
        this.deployments = deployments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("desiredCount")
    public Long desiredCount;
    public Service withDesiredCount(Long desiredCount) {
        this.desiredCount = desiredCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableECSManagedTags")
    public Boolean enableECSManagedTags;
    public Service withEnableEcsManagedTags(Boolean enableECSManagedTags) {
        this.enableECSManagedTags = enableECSManagedTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("enableExecuteCommand")
    public Boolean enableExecuteCommand;
    public Service withEnableExecuteCommand(Boolean enableExecuteCommand) {
        this.enableExecuteCommand = enableExecuteCommand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("events")
    public ServiceEvent[] events;
    public Service withEvents(ServiceEvent[] events) {
        this.events = events;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("healthCheckGracePeriodSeconds")
    public Long healthCheckGracePeriodSeconds;
    public Service withHealthCheckGracePeriodSeconds(Long healthCheckGracePeriodSeconds) {
        this.healthCheckGracePeriodSeconds = healthCheckGracePeriodSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("launchType")
    public LaunchTypeEnum launchType;
    public Service withLaunchType(LaunchTypeEnum launchType) {
        this.launchType = launchType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("loadBalancers")
    public LoadBalancer[] loadBalancers;
    public Service withLoadBalancers(LoadBalancer[] loadBalancers) {
        this.loadBalancers = loadBalancers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("networkConfiguration")
    public NetworkConfiguration networkConfiguration;
    public Service withNetworkConfiguration(NetworkConfiguration networkConfiguration) {
        this.networkConfiguration = networkConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pendingCount")
    public Long pendingCount;
    public Service withPendingCount(Long pendingCount) {
        this.pendingCount = pendingCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementConstraints")
    public PlacementConstraint[] placementConstraints;
    public Service withPlacementConstraints(PlacementConstraint[] placementConstraints) {
        this.placementConstraints = placementConstraints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("placementStrategy")
    public PlacementStrategy[] placementStrategy;
    public Service withPlacementStrategy(PlacementStrategy[] placementStrategy) {
        this.placementStrategy = placementStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("platformVersion")
    public String platformVersion;
    public Service withPlatformVersion(String platformVersion) {
        this.platformVersion = platformVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("propagateTags")
    public PropagateTagsEnum propagateTags;
    public Service withPropagateTags(PropagateTagsEnum propagateTags) {
        this.propagateTags = propagateTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public Service withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("runningCount")
    public Long runningCount;
    public Service withRunningCount(Long runningCount) {
        this.runningCount = runningCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedulingStrategy")
    public SchedulingStrategyEnum schedulingStrategy;
    public Service withSchedulingStrategy(SchedulingStrategyEnum schedulingStrategy) {
        this.schedulingStrategy = schedulingStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceArn")
    public String serviceArn;
    public Service withServiceArn(String serviceArn) {
        this.serviceArn = serviceArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceName")
    public String serviceName;
    public Service withServiceName(String serviceName) {
        this.serviceName = serviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceRegistries")
    public ServiceRegistry[] serviceRegistries;
    public Service withServiceRegistries(ServiceRegistry[] serviceRegistries) {
        this.serviceRegistries = serviceRegistries;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public String status;
    public Service withStatus(String status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public Service withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskDefinition")
    public String taskDefinition;
    public Service withTaskDefinition(String taskDefinition) {
        this.taskDefinition = taskDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("taskSets")
    public TaskSet[] taskSets;
    public Service withTaskSets(TaskSet[] taskSets) {
        this.taskSets = taskSets;
        return this;
    }
}