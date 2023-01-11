package openapisdk.models.shared;



/**
 * LaunchTemplateOverrides
 * Describes an override for a launch template. The maximum number of instance types that can be associated with an Auto Scaling group is 40. The maximum number of distinct launch templates you can define for an Auto Scaling group is 20. For more information about configuring overrides, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-override-options.html">Configuring overrides</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. 
**/
public class LaunchTemplateOverrides {
    public String instanceType;
    public LaunchTemplateOverrides withInstanceType(String instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    public LaunchTemplateSpecification launchTemplateSpecification;
    public LaunchTemplateOverrides withLaunchTemplateSpecification(LaunchTemplateSpecification launchTemplateSpecification) {
        this.launchTemplateSpecification = launchTemplateSpecification;
        return this;
    }
    public String weightedCapacity;
    public LaunchTemplateOverrides withWeightedCapacity(String weightedCapacity) {
        this.weightedCapacity = weightedCapacity;
        return this;
    }
}