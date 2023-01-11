package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InputProcessingConfigurationUpdate
 * Describes updates to an <a href="https://docs.aws.amazon.com/kinesisanalytics/latest/dev/API_InputProcessingConfiguration.html">InputProcessingConfiguration</a>. 
**/
public class InputProcessingConfigurationUpdate {
    @JsonProperty("InputLambdaProcessorUpdate")
    public InputLambdaProcessorUpdate inputLambdaProcessorUpdate;
    public InputProcessingConfigurationUpdate withInputLambdaProcessorUpdate(InputLambdaProcessorUpdate inputLambdaProcessorUpdate) {
        this.inputLambdaProcessorUpdate = inputLambdaProcessorUpdate;
        return this;
    }
}