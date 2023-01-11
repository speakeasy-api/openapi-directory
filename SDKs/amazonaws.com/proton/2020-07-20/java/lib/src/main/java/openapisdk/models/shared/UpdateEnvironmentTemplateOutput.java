package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class UpdateEnvironmentTemplateOutput {
    @JsonProperty("environmentTemplate")
    public EnvironmentTemplate environmentTemplate;
    public UpdateEnvironmentTemplateOutput withEnvironmentTemplate(EnvironmentTemplate environmentTemplate) {
        this.environmentTemplate = environmentTemplate;
        return this;
    }
}