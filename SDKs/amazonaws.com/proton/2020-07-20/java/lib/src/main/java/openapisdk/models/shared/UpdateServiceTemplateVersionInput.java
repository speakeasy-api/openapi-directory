package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateServiceTemplateVersionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("compatibleEnvironmentTemplates")
    public CompatibleEnvironmentTemplateInput[] compatibleEnvironmentTemplates;
    public UpdateServiceTemplateVersionInput withCompatibleEnvironmentTemplates(CompatibleEnvironmentTemplateInput[] compatibleEnvironmentTemplates) {
        this.compatibleEnvironmentTemplates = compatibleEnvironmentTemplates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public UpdateServiceTemplateVersionInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonProperty("majorVersion")
    public String majorVersion;
    public UpdateServiceTemplateVersionInput withMajorVersion(String majorVersion) {
        this.majorVersion = majorVersion;
        return this;
    }
    @JsonProperty("minorVersion")
    public String minorVersion;
    public UpdateServiceTemplateVersionInput withMinorVersion(String minorVersion) {
        this.minorVersion = minorVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public TemplateVersionStatusEnum status;
    public UpdateServiceTemplateVersionInput withStatus(TemplateVersionStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonProperty("templateName")
    public String templateName;
    public UpdateServiceTemplateVersionInput withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}