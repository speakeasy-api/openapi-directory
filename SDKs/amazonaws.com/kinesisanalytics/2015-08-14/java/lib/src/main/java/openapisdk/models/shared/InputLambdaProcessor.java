package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * InputLambdaProcessor
 * An object that contains the Amazon Resource Name (ARN) of the <a href="https://docs.aws.amazon.com/lambda/">AWS Lambda</a> function that is used to preprocess records in the stream, and the ARN of the IAM role that is used to access the AWS Lambda function. 
**/
public class InputLambdaProcessor {
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public InputLambdaProcessor withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonProperty("RoleARN")
    public String roleARN;
    public InputLambdaProcessor withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}