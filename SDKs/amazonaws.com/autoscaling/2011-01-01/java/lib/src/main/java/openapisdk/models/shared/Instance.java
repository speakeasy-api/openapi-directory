package openapisdk.models.shared;



/**
 * Instance
 * Describes an EC2 instance.
**/
public class Instance {
    public String availabilityZone;
    public Instance withAvailabilityZone(String availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    public String healthStatus;
    public Instance withHealthStatus(String healthStatus) {
        this.healthStatus = healthStatus;
        return this;
    }
    public String instanceId;
    public Instance withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    public String instanceType;
    public Instance withInstanceType(String instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    public String launchConfigurationName;
    public Instance withLaunchConfigurationName(String launchConfigurationName) {
        this.launchConfigurationName = launchConfigurationName;
        return this;
    }
    public LaunchTemplateSpecification launchTemplate;
    public Instance withLaunchTemplate(LaunchTemplateSpecification launchTemplate) {
        this.launchTemplate = launchTemplate;
        return this;
    }
    public LifecycleStateEnum lifecycleState;
    public Instance withLifecycleState(LifecycleStateEnum lifecycleState) {
        this.lifecycleState = lifecycleState;
        return this;
    }
    public Boolean protectedFromScaleIn;
    public Instance withProtectedFromScaleIn(Boolean protectedFromScaleIn) {
        this.protectedFromScaleIn = protectedFromScaleIn;
        return this;
    }
    public String weightedCapacity;
    public Instance withWeightedCapacity(String weightedCapacity) {
        this.weightedCapacity = weightedCapacity;
        return this;
    }
}