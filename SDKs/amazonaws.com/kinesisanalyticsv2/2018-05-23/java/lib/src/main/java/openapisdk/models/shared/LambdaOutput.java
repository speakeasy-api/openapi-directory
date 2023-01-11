package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LambdaOutput
 * When you configure a SQL-based Kinesis Data Analytics application's output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) of the Lambda function. 
**/
public class LambdaOutput {
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public LambdaOutput withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
}