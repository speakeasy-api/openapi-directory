package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetEnvironmentTemplateOutput {
    @JsonProperty("environmentTemplate")
    public EnvironmentTemplate environmentTemplate;
    public GetEnvironmentTemplateOutput withEnvironmentTemplate(EnvironmentTemplate environmentTemplate) {
        this.environmentTemplate = environmentTemplate;
        return this;
    }
}