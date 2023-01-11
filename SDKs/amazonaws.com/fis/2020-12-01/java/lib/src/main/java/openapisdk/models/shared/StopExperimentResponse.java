package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class StopExperimentResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("experiment")
    public Experiment experiment;
    public StopExperimentResponse withExperiment(Experiment experiment) {
        this.experiment = experiment;
        return this;
    }
}