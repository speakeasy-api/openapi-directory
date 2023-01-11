package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateProvisioningTemplateVersionResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isDefaultVersion")
    public Boolean isDefaultVersion;
    public CreateProvisioningTemplateVersionResponse withIsDefaultVersion(Boolean isDefaultVersion) {
        this.isDefaultVersion = isDefaultVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateArn")
    public String templateArn;
    public CreateProvisioningTemplateVersionResponse withTemplateArn(String templateArn) {
        this.templateArn = templateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("templateName")
    public String templateName;
    public CreateProvisioningTemplateVersionResponse withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("versionId")
    public Long versionId;
    public CreateProvisioningTemplateVersionResponse withVersionId(Long versionId) {
        this.versionId = versionId;
        return this;
    }
}