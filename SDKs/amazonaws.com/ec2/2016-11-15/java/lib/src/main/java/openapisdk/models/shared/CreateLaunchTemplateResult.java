package openapisdk.models.shared;



public class CreateLaunchTemplateResult {
    public CreateLaunchTemplateResultLaunchTemplate launchTemplate;
    public CreateLaunchTemplateResult withLaunchTemplate(CreateLaunchTemplateResultLaunchTemplate launchTemplate) {
        this.launchTemplate = launchTemplate;
        return this;
    }
    public CreateLaunchTemplateResultWarning warning;
    public CreateLaunchTemplateResult withWarning(CreateLaunchTemplateResultWarning warning) {
        this.warning = warning;
        return this;
    }
}