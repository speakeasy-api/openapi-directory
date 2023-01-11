package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputProcessingConfigurationDescription
 * Provides configuration information about an input processor. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.
**/
public class InputProcessingConfigurationDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InputLambdaProcessorDescription")
    public InputLambdaProcessorDescription inputLambdaProcessorDescription;
    public InputProcessingConfigurationDescription withInputLambdaProcessorDescription(InputLambdaProcessorDescription inputLambdaProcessorDescription) {
        this.inputLambdaProcessorDescription = inputLambdaProcessorDescription;
        return this;
    }
}