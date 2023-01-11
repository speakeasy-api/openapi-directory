package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateExperimentTemplateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("experimentTemplate")
    public ExperimentTemplate experimentTemplate;
    public CreateExperimentTemplateResponse withExperimentTemplate(ExperimentTemplate experimentTemplate) {
        this.experimentTemplate = experimentTemplate;
        return this;
    }
}