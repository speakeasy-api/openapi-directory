package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InputProcessingConfiguration
 * For a SQL-based Kinesis Data Analytics application, describes a processor that is used to preprocess the records in the stream before being processed by your application code. Currently, the only input processor available is <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a>.
**/
public class InputProcessingConfiguration {
    @JsonProperty("InputLambdaProcessor")
    public InputLambdaProcessor inputLambdaProcessor;
    public InputProcessingConfiguration withInputLambdaProcessor(InputLambdaProcessor inputLambdaProcessor) {
        this.inputLambdaProcessor = inputLambdaProcessor;
        return this;
    }
}