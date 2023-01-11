package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateEnvironmentTemplateVersionOutput {
    @JsonProperty("environmentTemplateVersion")
    public EnvironmentTemplateVersion environmentTemplateVersion;
    public CreateEnvironmentTemplateVersionOutput withEnvironmentTemplateVersion(EnvironmentTemplateVersion environmentTemplateVersion) {
        this.environmentTemplateVersion = environmentTemplateVersion;
        return this;
    }
}