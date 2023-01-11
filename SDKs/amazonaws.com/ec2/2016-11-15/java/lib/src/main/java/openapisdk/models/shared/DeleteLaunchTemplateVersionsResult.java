package openapisdk.models.shared;



public class DeleteLaunchTemplateVersionsResult {
    public java.util.Map<String, Object> successfullyDeletedLaunchTemplateVersions;
    public DeleteLaunchTemplateVersionsResult withSuccessfullyDeletedLaunchTemplateVersions(java.util.Map<String, Object> successfullyDeletedLaunchTemplateVersions) {
        this.successfullyDeletedLaunchTemplateVersions = successfullyDeletedLaunchTemplateVersions;
        return this;
    }
    public java.util.Map<String, Object> unsuccessfullyDeletedLaunchTemplateVersions;
    public DeleteLaunchTemplateVersionsResult withUnsuccessfullyDeletedLaunchTemplateVersions(java.util.Map<String, Object> unsuccessfullyDeletedLaunchTemplateVersions) {
        this.unsuccessfullyDeletedLaunchTemplateVersions = unsuccessfullyDeletedLaunchTemplateVersions;
        return this;
    }
}