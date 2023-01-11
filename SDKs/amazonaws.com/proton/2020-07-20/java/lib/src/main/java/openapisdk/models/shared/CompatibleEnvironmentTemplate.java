package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CompatibleEnvironmentTemplate
 * Compatible environment template data.
**/
public class CompatibleEnvironmentTemplate {
    @JsonProperty("majorVersion")
    public String majorVersion;
    public CompatibleEnvironmentTemplate withMajorVersion(String majorVersion) {
        this.majorVersion = majorVersion;
        return this;
    }
    @JsonProperty("templateName")
    public String templateName;
    public CompatibleEnvironmentTemplate withTemplateName(String templateName) {
        this.templateName = templateName;
        return this;
    }
}