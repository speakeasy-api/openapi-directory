package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateSolutionVersionRequest {
    @JsonProperty("solutionArn")
    public String solutionArn;
    public CreateSolutionVersionRequest withSolutionArn(String solutionArn) {
        this.solutionArn = solutionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("trainingMode")
    public TrainingModeEnum trainingMode;
    public CreateSolutionVersionRequest withTrainingMode(TrainingModeEnum trainingMode) {
        this.trainingMode = trainingMode;
        return this;
    }
}