package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EcsParameters
 * The custom parameters to be used when the target is an Amazon ECS task.
**/
public class EcsParameters {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CapacityProviderStrategy")
    public CapacityProviderStrategyItem[] capacityProviderStrategy;
    public EcsParameters withCapacityProviderStrategy(CapacityProviderStrategyItem[] capacityProviderStrategy) {
        this.capacityProviderStrategy = capacityProviderStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnableECSManagedTags")
    public Boolean enableECSManagedTags;
    public EcsParameters withEnableEcsManagedTags(Boolean enableECSManagedTags) {
        this.enableECSManagedTags = enableECSManagedTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EnableExecuteCommand")
    public Boolean enableExecuteCommand;
    public EcsParameters withEnableExecuteCommand(Boolean enableExecuteCommand) {
        this.enableExecuteCommand = enableExecuteCommand;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Group")
    public String group;
    public EcsParameters withGroup(String group) {
        this.group = group;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LaunchType")
    public LaunchTypeEnum launchType;
    public EcsParameters withLaunchType(LaunchTypeEnum launchType) {
        this.launchType = launchType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NetworkConfiguration")
    public NetworkConfiguration networkConfiguration;
    public EcsParameters withNetworkConfiguration(NetworkConfiguration networkConfiguration) {
        this.networkConfiguration = networkConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlacementConstraints")
    public PlacementConstraint[] placementConstraints;
    public EcsParameters withPlacementConstraints(PlacementConstraint[] placementConstraints) {
        this.placementConstraints = placementConstraints;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlacementStrategy")
    public PlacementStrategy[] placementStrategy;
    public EcsParameters withPlacementStrategy(PlacementStrategy[] placementStrategy) {
        this.placementStrategy = placementStrategy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlatformVersion")
    public String platformVersion;
    public EcsParameters withPlatformVersion(String platformVersion) {
        this.platformVersion = platformVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PropagateTags")
    public PropagateTagsEnum propagateTags;
    public EcsParameters withPropagateTags(PropagateTagsEnum propagateTags) {
        this.propagateTags = propagateTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReferenceId")
    public String referenceId;
    public EcsParameters withReferenceId(String referenceId) {
        this.referenceId = referenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public EcsParameters withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TaskCount")
    public Long taskCount;
    public EcsParameters withTaskCount(Long taskCount) {
        this.taskCount = taskCount;
        return this;
    }
    @JsonProperty("TaskDefinitionArn")
    public String taskDefinitionArn;
    public EcsParameters withTaskDefinitionArn(String taskDefinitionArn) {
        this.taskDefinitionArn = taskDefinitionArn;
        return this;
    }
}