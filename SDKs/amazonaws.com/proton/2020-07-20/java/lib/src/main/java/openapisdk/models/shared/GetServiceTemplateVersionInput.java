package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetServiceTemplateVersionInput {
    @JsonProperty("majorVersion")
    public String majorVersion;
    public GetServiceTemplateVersionInput withMajorVersion(String majorVersion) {
        this.majorVersion = majorVersion;
        return this;
    }
    @JsonProperty("minorVersion")
    public String minorVersion;
    public GetServiceTemplateVersionInput withMinorVersion(String minorVersion) {
        this.minorVersion = minorVersion;
        return this;
    }
    @JsonProperty("templateName")
    public String templateName;
    public GetServiceTemplateVersionInput withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}