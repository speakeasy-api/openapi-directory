package openapisdk.models.shared;



/**
 * CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions
 * Indicates whether an instance is configured for hibernation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/Hibernate.html">Hibernate your instance</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.
**/
public class CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions {
    public java.util.Map<String, Object> configured;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateDataHibernationOptions withConfigured(java.util.Map<String, Object> configured) {
        this.configured = configured;
        return this;
    }
}