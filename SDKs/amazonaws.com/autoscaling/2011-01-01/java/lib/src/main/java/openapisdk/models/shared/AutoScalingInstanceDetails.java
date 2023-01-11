package openapisdk.models.shared;



/**
 * AutoScalingInstanceDetails
 * Describes an EC2 instance associated with an Auto Scaling group.
**/
public class AutoScalingInstanceDetails {
    public String autoScalingGroupName;
    public AutoScalingInstanceDetails withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    public String availabilityZone;
    public AutoScalingInstanceDetails withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    public String healthStatus;
    public AutoScalingInstanceDetails withHealthStatus(String healthStatus) {
        this.healthStatus = healthStatus;
        return this;
    }
    public String instanceId;
    public AutoScalingInstanceDetails withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    public String instanceType;
    public AutoScalingInstanceDetails withInstanceType(String instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    public String launchConfigurationName;
    public AutoScalingInstanceDetails withLaunchConfigurationName(String launchConfigurationName) {
        this.launchConfigurationName = launchConfigurationName;
        return this;
    }
    public LaunchTemplateSpecification launchTemplate;
    public AutoScalingInstanceDetails withLaunchTemplate(LaunchTemplateSpecification launchTemplate) {
        this.launchTemplate = launchTemplate;
        return this;
    }
    public String lifecycleState;
    public AutoScalingInstanceDetails withLifecycleState(String lifecycleState) {
        this.lifecycleState = lifecycleState;
        return this;
    }
    public Boolean protectedFromScaleIn;
    public AutoScalingInstanceDetails withProtectedFromScaleIn(Boolean protectedFromScaleIn) {
        this.protectedFromScaleIn = protectedFromScaleIn;
        return this;
    }
    public String weightedCapacity;
    public AutoScalingInstanceDetails withWeightedCapacity(String weightedCapacity) {
        this.weightedCapacity = weightedCapacity;
        return this;
    }
}