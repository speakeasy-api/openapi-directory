package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DeadLetterConfig
 * The <a href="https://docs.aws.amazon.com/lambda/latest/dg/invocation-async.html#dlq">dead-letter queue</a> for failed asynchronous invocations.
**/
public class DeadLetterConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetArn")
    public String targetArn;
    public DeadLetterConfig withTargetArn(String targetArn) {
        this.targetArn = targetArn;
        return this;
    }
}