package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InputLambdaProcessor
 * An object that contains the Amazon Resource Name (ARN) of the AWS Lambda function that is used to preprocess records in the stream in a SQL-based Kinesis Data Analytics application. 
**/
public class InputLambdaProcessor {
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public InputLambdaProcessor withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
}