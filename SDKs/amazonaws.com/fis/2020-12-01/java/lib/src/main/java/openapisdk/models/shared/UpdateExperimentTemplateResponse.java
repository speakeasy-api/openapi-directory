package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateExperimentTemplateResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("experimentTemplate")
    public ExperimentTemplate experimentTemplate;
    public UpdateExperimentTemplateResponse withExperimentTemplate(ExperimentTemplate experimentTemplate) {
        this.experimentTemplate = experimentTemplate;
        return this;
    }
}