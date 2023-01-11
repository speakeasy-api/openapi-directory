package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEnvironmentTemplateVersionOutput {
    @JsonProperty("environmentTemplateVersion")
    public EnvironmentTemplateVersion environmentTemplateVersion;
    public GetEnvironmentTemplateVersionOutput withEnvironmentTemplateVersion(EnvironmentTemplateVersion environmentTemplateVersion) {
        this.environmentTemplateVersion = environmentTemplateVersion;
        return this;
    }
}