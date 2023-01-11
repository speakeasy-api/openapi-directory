package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateFunctionConfigurationRequestBodyDeadLetterConfig
 * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.
**/
public class UpdateFunctionConfigurationRequestBodyDeadLetterConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetArn")
    public String targetArn;
    public UpdateFunctionConfigurationRequestBodyDeadLetterConfig withTargetArn(String targetArn) {
        this.targetArn = targetArn;
        return this;
    }
}