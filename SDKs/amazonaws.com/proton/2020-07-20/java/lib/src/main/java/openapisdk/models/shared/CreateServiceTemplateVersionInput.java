package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateServiceTemplateVersionInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientToken")
    public String clientToken;
    public CreateServiceTemplateVersionInput withClientToken(String clientToken) {
        this.clientToken = clientToken;
        return this;
    }
    @JsonProperty("compatibleEnvironmentTemplates")
    public CompatibleEnvironmentTemplateInput[] compatibleEnvironmentTemplates;
    public CreateServiceTemplateVersionInput withCompatibleEnvironmentTemplates(CompatibleEnvironmentTemplateInput[] compatibleEnvironmentTemplates) {
        this.compatibleEnvironmentTemplates = compatibleEnvironmentTemplates;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CreateServiceTemplateVersionInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("majorVersion")
    public String majorVersion;
    public CreateServiceTemplateVersionInput withMajorVersion(String majorVersion) {
        this.majorVersion = majorVersion;
        return this;
    }
    @JsonProperty("source")
    public TemplateVersionSourceInput source;
    public CreateServiceTemplateVersionInput withSource(TemplateVersionSourceInput source) {
        this.source = source;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public Tag[] tags;
    public CreateServiceTemplateVersionInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("templateName")
    public String templateName;
    public CreateServiceTemplateVersionInput withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}