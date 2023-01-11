package openapisdk.models.shared;



public class CreateLaunchTemplateVersionResult {
    public CreateLaunchTemplateVersionResultLaunchTemplateVersion launchTemplateVersion;
    public CreateLaunchTemplateVersionResult withLaunchTemplateVersion(CreateLaunchTemplateVersionResultLaunchTemplateVersion launchTemplateVersion) {
        this.launchTemplateVersion = launchTemplateVersion;
        return this;
    }
    public CreateLaunchTemplateVersionResultWarning warning;
    public CreateLaunchTemplateVersionResult withWarning(CreateLaunchTemplateVersionResultWarning warning) {
        this.warning = warning;
        return this;
    }
}