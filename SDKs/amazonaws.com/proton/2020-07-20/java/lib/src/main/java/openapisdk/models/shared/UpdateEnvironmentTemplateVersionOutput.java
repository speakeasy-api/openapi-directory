package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateEnvironmentTemplateVersionOutput {
    @JsonProperty("environmentTemplateVersion")
    public EnvironmentTemplateVersion environmentTemplateVersion;
    public UpdateEnvironmentTemplateVersionOutput withEnvironmentTemplateVersion(EnvironmentTemplateVersion environmentTemplateVersion) {
        this.environmentTemplateVersion = environmentTemplateVersion;
        return this;
    }
}