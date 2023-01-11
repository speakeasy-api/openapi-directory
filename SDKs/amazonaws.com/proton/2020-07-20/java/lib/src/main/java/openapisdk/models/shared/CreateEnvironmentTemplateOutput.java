package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateEnvironmentTemplateOutput {
    @JsonProperty("environmentTemplate")
    public EnvironmentTemplate environmentTemplate;
    public CreateEnvironmentTemplateOutput withEnvironmentTemplate(EnvironmentTemplate environmentTemplate) {
        this.environmentTemplate = environmentTemplate;
        return this;
    }
}