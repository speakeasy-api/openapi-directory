package openapisdk.models.shared;



/**
 * LaunchTemplateSpecification
 * Describes the launch template and the version of the launch template that Amazon EC2 Auto Scaling uses to launch Amazon EC2 instances. For more information about launch templates, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchTemplates.html">Launch templates</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.
**/
public class LaunchTemplateSpecification {
    public String launchTemplateId;
    public LaunchTemplateSpecification withLaunchTemplateId(String launchTemplateId) {
        this.launchTemplateId = launchTemplateId;
        return this;
    }
    public String launchTemplateName;
    public LaunchTemplateSpecification withLaunchTemplateName(String launchTemplateName) {
        this.launchTemplateName = launchTemplateName;
        return this;
    }
    public String version;
    public LaunchTemplateSpecification withVersion(String version) {
        this.version = version;
        return this;
    }
}