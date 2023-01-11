package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * AutoScalingGroup
 * Describes an Auto Scaling group.
**/
public class AutoScalingGroup {
    public String autoScalingGroupARN;
    public AutoScalingGroup withAutoScalingGroupArn(String autoScalingGroupARN) {
        this.autoScalingGroupARN = autoScalingGroupARN;
        return this;
    }
    public String autoScalingGroupName;
    public AutoScalingGroup withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    public String[] availabilityZones;
    public AutoScalingGroup withAvailabilityZones(String[] availabilityZones) {
        this.availabilityZones = availabilityZones;
        return this;
    }
    public Boolean capacityRebalance;
    public AutoScalingGroup withCapacityRebalance(Boolean capacityRebalance) {
        this.capacityRebalance = capacityRebalance;
        return this;
    }
    public String context;
    public AutoScalingGroup withContext(String context) {
        this.context = context;
        return this;
    }
    public OffsetDateTime createdTime;
    public AutoScalingGroup withCreatedTime(OffsetDateTime createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    public Long defaultCooldown;
    public AutoScalingGroup withDefaultCooldown(Long defaultCooldown) {
        this.defaultCooldown = defaultCooldown;
        return this;
    }
    public Long desiredCapacity;
    public AutoScalingGroup withDesiredCapacity(Long desiredCapacity) {
        this.desiredCapacity = desiredCapacity;
        return this;
    }
    public EnabledMetric[] enabledMetrics;
    public AutoScalingGroup withEnabledMetrics(EnabledMetric[] enabledMetrics) {
        this.enabledMetrics = enabledMetrics;
        return this;
    }
    public Long healthCheckGracePeriod;
    public AutoScalingGroup withHealthCheckGracePeriod(Long healthCheckGracePeriod) {
        this.healthCheckGracePeriod = healthCheckGracePeriod;
        return this;
    }
    public String healthCheckType;
    public AutoScalingGroup withHealthCheckType(String healthCheckType) {
        this.healthCheckType = healthCheckType;
        return this;
    }
    public Instance[] instances;
    public AutoScalingGroup withInstances(Instance[] instances) {
        this.instances = instances;
        return this;
    }
    public String launchConfigurationName;
    public AutoScalingGroup withLaunchConfigurationName(String launchConfigurationName) {
        this.launchConfigurationName = launchConfigurationName;
        return this;
    }
    public LaunchTemplateSpecification launchTemplate;
    public AutoScalingGroup withLaunchTemplate(LaunchTemplateSpecification launchTemplate) {
        this.launchTemplate = launchTemplate;
        return this;
    }
    public String[] loadBalancerNames;
    public AutoScalingGroup withLoadBalancerNames(String[] loadBalancerNames) {
        this.loadBalancerNames = loadBalancerNames;
        return this;
    }
    public Long maxInstanceLifetime;
    public AutoScalingGroup withMaxInstanceLifetime(Long maxInstanceLifetime) {
        this.maxInstanceLifetime = maxInstanceLifetime;
        return this;
    }
    public Long maxSize;
    public AutoScalingGroup withMaxSize(Long maxSize) {
        this.maxSize = maxSize;
        return this;
    }
    public Long minSize;
    public AutoScalingGroup withMinSize(Long minSize) {
        this.minSize = minSize;
        return this;
    }
    public MixedInstancesPolicy mixedInstancesPolicy;
    public AutoScalingGroup withMixedInstancesPolicy(MixedInstancesPolicy mixedInstancesPolicy) {
        this.mixedInstancesPolicy = mixedInstancesPolicy;
        return this;
    }
    public Boolean newInstancesProtectedFromScaleIn;
    public AutoScalingGroup withNewInstancesProtectedFromScaleIn(Boolean newInstancesProtectedFromScaleIn) {
        this.newInstancesProtectedFromScaleIn = newInstancesProtectedFromScaleIn;
        return this;
    }
    public String placementGroup;
    public AutoScalingGroup withPlacementGroup(String placementGroup) {
        this.placementGroup = placementGroup;
        return this;
    }
    public Long predictedCapacity;
    public AutoScalingGroup withPredictedCapacity(Long predictedCapacity) {
        this.predictedCapacity = predictedCapacity;
        return this;
    }
    public String serviceLinkedRoleARN;
    public AutoScalingGroup withServiceLinkedRoleArn(String serviceLinkedRoleARN) {
        this.serviceLinkedRoleARN = serviceLinkedRoleARN;
        return this;
    }
    public String status;
    public AutoScalingGroup withStatus(String status) {
        this.status = status;
        return this;
    }
    public SuspendedProcess[] suspendedProcesses;
    public AutoScalingGroup withSuspendedProcesses(SuspendedProcess[] suspendedProcesses) {
        this.suspendedProcesses = suspendedProcesses;
        return this;
    }
    public TagDescription[] tags;
    public AutoScalingGroup withTags(TagDescription[] tags) {
        this.tags = tags;
        return this;
    }
    public String[] targetGroupARNs;
    public AutoScalingGroup withTargetGroupArNs(String[] targetGroupARNs) {
        this.targetGroupARNs = targetGroupARNs;
        return this;
    }
    public String[] terminationPolicies;
    public AutoScalingGroup withTerminationPolicies(String[] terminationPolicies) {
        this.terminationPolicies = terminationPolicies;
        return this;
    }
    public String vpcZoneIdentifier;
    public AutoScalingGroup withVpcZoneIdentifier(String vpcZoneIdentifier) {
        this.vpcZoneIdentifier = vpcZoneIdentifier;
        return this;
    }
    public WarmPoolConfiguration warmPoolConfiguration;
    public AutoScalingGroup withWarmPoolConfiguration(WarmPoolConfiguration warmPoolConfiguration) {
        this.warmPoolConfiguration = warmPoolConfiguration;
        return this;
    }
    public Long warmPoolSize;
    public AutoScalingGroup withWarmPoolSize(Long warmPoolSize) {
        this.warmPoolSize = warmPoolSize;
        return this;
    }
}