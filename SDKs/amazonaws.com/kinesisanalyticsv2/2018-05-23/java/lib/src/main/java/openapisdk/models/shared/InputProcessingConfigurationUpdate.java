package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InputProcessingConfigurationUpdate
 * For a SQL-based Kinesis Data Analytics application, describes updates to an <a>InputProcessingConfiguration</a>.
**/
public class InputProcessingConfigurationUpdate {
    @JsonProperty("InputLambdaProcessorUpdate")
    public InputLambdaProcessorUpdate inputLambdaProcessorUpdate;
    public InputProcessingConfigurationUpdate withInputLambdaProcessorUpdate(InputLambdaProcessorUpdate inputLambdaProcessorUpdate) {
        this.inputLambdaProcessorUpdate = inputLambdaProcessorUpdate;
        return this;
    }
}