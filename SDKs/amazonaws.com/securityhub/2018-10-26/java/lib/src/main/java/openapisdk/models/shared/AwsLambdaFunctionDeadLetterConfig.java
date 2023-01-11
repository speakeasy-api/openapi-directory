package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsLambdaFunctionDeadLetterConfig
 * The dead-letter queue for failed asynchronous invocations.
**/
public class AwsLambdaFunctionDeadLetterConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetArn")
    public String targetArn;
    public AwsLambdaFunctionDeadLetterConfig withTargetArn(String targetArn) {
        this.targetArn = targetArn;
        return this;
    }
}