package openapisdk.models.shared;



/**
 * CreateLaunchTemplateVersionResultLaunchTemplateVersion
 * Information about the launch template version.
**/
public class CreateLaunchTemplateVersionResultLaunchTemplateVersion {
    public java.util.Map<String, Object> createTime;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersion withCreateTime(java.util.Map<String, Object> createTime) {
        this.createTime = createTime;
        return this;
    }
    public java.util.Map<String, Object> createdBy;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersion withCreatedBy(java.util.Map<String, Object> createdBy) {
        this.createdBy = createdBy;
        return this;
    }
    public java.util.Map<String, Object> defaultVersion;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersion withDefaultVersion(java.util.Map<String, Object> defaultVersion) {
        this.defaultVersion = defaultVersion;
        return this;
    }
    public CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData launchTemplateData;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersion withLaunchTemplateData(CreateLaunchTemplateVersionResultLaunchTemplateVersionLaunchTemplateData launchTemplateData) {
        this.launchTemplateData = launchTemplateData;
        return this;
    }
    public java.util.Map<String, Object> launchTemplateId;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersion withLaunchTemplateId(java.util.Map<String, Object> launchTemplateId) {
        this.launchTemplateId = launchTemplateId;
        return this;
    }
    public java.util.Map<String, Object> launchTemplateName;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersion withLaunchTemplateName(java.util.Map<String, Object> launchTemplateName) {
        this.launchTemplateName = launchTemplateName;
        return this;
    }
    public java.util.Map<String, Object> versionDescription;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersion withVersionDescription(java.util.Map<String, Object> versionDescription) {
        this.versionDescription = versionDescription;
        return this;
    }
    public java.util.Map<String, Object> versionNumber;
    public CreateLaunchTemplateVersionResultLaunchTemplateVersion withVersionNumber(java.util.Map<String, Object> versionNumber) {
        this.versionNumber = versionNumber;
        return this;
    }
}