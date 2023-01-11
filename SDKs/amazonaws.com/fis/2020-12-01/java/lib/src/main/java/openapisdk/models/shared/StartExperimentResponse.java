package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StartExperimentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("experiment")
    public Experiment experiment;
    public StartExperimentResponse withExperiment(Experiment experiment) {
        this.experiment = experiment;
        return this;
    }
}