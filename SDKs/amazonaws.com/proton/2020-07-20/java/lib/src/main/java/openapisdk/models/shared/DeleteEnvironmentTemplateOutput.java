package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DeleteEnvironmentTemplateOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("environmentTemplate")
    public EnvironmentTemplate environmentTemplate;
    public DeleteEnvironmentTemplateOutput withEnvironmentTemplate(EnvironmentTemplate environmentTemplate) {
        this.environmentTemplate = environmentTemplate;
        return this;
    }
}