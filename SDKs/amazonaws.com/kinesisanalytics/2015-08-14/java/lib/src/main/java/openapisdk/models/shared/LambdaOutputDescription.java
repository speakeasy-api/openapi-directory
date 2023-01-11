package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LambdaOutputDescription
 * For an application output, describes the AWS Lambda function configured as its destination. 
**/
public class LambdaOutputDescription {
    @JsonInclude(Include.NON_ABSENT)
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