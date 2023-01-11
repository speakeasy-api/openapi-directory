package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeleteEnvironmentTemplateVersionInput {
    @JsonProperty("majorVersion")
    public String majorVersion;
    public DeleteEnvironmentTemplateVersionInput withMajorVersion(String majorVersion) {
        this.majorVersion = majorVersion;
        return this;
    }
    @JsonProperty("minorVersion")
    public String minorVersion;
    public DeleteEnvironmentTemplateVersionInput withMinorVersion(String minorVersion) {
        this.minorVersion = minorVersion;
        return this;
    }
    @JsonProperty("templateName")
    public String templateName;
    public DeleteEnvironmentTemplateVersionInput withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}