package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InputLambdaProcessorUpdate
 * For a SQL-based Kinesis Data Analytics application, represents an update to the <a>InputLambdaProcessor</a> that is used to preprocess the records in the stream.
**/
public class InputLambdaProcessorUpdate {
    @JsonProperty("ResourceARNUpdate")
    public String resourceARNUpdate;
    public InputLambdaProcessorUpdate withResourceArnUpdate(String resourceARNUpdate) {
        this.resourceARNUpdate = resourceARNUpdate;
        return this;
    }
}