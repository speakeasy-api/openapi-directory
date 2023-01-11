package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEnvironmentTemplateVersionInput {
    @JsonProperty("majorVersion")
    public String majorVersion;
    public GetEnvironmentTemplateVersionInput withMajorVersion(String majorVersion) {
        this.majorVersion = majorVersion;
        return this;
    }
    @JsonProperty("minorVersion")
    public String minorVersion;
    public GetEnvironmentTemplateVersionInput withMinorVersion(String minorVersion) {
        this.minorVersion = minorVersion;
        return this;
    }
    @JsonProperty("templateName")
    public String templateName;
    public GetEnvironmentTemplateVersionInput withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}