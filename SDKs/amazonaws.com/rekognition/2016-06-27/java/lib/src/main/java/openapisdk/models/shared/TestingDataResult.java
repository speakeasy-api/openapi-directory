package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TestingDataResult
 * Sagemaker Groundtruth format manifest files for the input, output and validation datasets that are used and created during testing.
**/
public class TestingDataResult {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Input")
    public TestingData input;
    public TestingDataResult withInput(TestingData input) {
        this.input = input;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Output")
    public TestingData output;
    public TestingDataResult withOutput(TestingData output) {
        this.output = output;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Validation")
    public ValidationData validation;
    public TestingDataResult withValidation(ValidationData validation) {
        this.validation = validation;
        return this;
    }
}