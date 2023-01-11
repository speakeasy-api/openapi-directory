package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputLambdaProcessorDescription
 * For a SQL-based Kinesis Data Analytics application, an object that contains the Amazon Resource Name (ARN) of the AWS Lambda function that is used to preprocess records in the stream.
**/
public class InputLambdaProcessorDescription {
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public InputLambdaProcessorDescription withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleARN")
    public String roleARN;
    public InputLambdaProcessorDescription withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}