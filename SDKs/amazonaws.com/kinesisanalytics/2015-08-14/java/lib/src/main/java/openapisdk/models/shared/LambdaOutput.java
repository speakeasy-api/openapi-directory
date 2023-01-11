package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LambdaOutput
 * When configuring application output, identifies an AWS Lambda function as the destination. You provide the function Amazon Resource Name (ARN) and also an IAM role ARN that Amazon Kinesis Analytics can use to write to the function on your behalf. 
**/
public class LambdaOutput {
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public LambdaOutput withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonProperty("RoleARN")
    public String roleARN;
    public LambdaOutput withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}