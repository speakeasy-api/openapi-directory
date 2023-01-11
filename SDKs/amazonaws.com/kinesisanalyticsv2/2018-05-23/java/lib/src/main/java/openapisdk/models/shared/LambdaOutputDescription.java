package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LambdaOutputDescription
 * For a SQL-based Kinesis Data Analytics application's output, describes the AWS Lambda function that is configured as its destination. 
**/
public class LambdaOutputDescription {
    @JsonProperty("ResourceARN")
    public String resourceARN;
    public LambdaOutputDescription withResourceArn(String resourceARN) {
        this.resourceARN = resourceARN;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RoleARN")
    public String roleARN;
    public LambdaOutputDescription withRoleArn(String roleARN) {
        this.roleARN = roleARN;
        return this;
    }
}