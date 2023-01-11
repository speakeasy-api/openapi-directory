package openapisdk.models.shared;



/**
 * MixedInstancesPolicy
 * Describes a mixed instances policy. A mixed instances policy contains the instance types Amazon EC2 Auto Scaling can launch, and other information Amazon EC2 Auto Scaling can use to launch instances to help you optimize your costs. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-purchase-options.html">Auto Scaling groups with multiple instance types and purchase options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
**/
public class MixedInstancesPolicy {
    public InstancesDistribution instancesDistribution;
    public MixedInstancesPolicy withInstancesDistribution(InstancesDistribution instancesDistribution) {
        this.instancesDistribution = instancesDistribution;
        return this;
    }
    public LaunchTemplate launchTemplate;
    public MixedInstancesPolicy withLaunchTemplate(LaunchTemplate launchTemplate) {
        this.launchTemplate = launchTemplate;
        return this;
    }
}