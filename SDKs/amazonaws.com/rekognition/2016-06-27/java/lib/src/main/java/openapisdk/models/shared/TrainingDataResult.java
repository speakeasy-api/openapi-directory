package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrainingDataResult
 * Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing.
**/
public class TrainingDataResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Input")
    public TrainingData input;
    public TrainingDataResult withInput(TrainingData input) {
        this.input = input;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Output")
    public TrainingData output;
    public TrainingDataResult withOutput(TrainingData output) {
        this.output = output;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Validation")
    public ValidationData validation;
    public TrainingDataResult withValidation(ValidationData validation) {
        this.validation = validation;
        return this;
    }
}