package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LambdaConflictHandlerConfig
 * The <code>LambdaConflictHandlerConfig</code> object when configuring LAMBDA as the Conflict Handler.
**/
public class LambdaConflictHandlerConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaConflictHandlerArn")
    public String lambdaConflictHandlerArn;
    public LambdaConflictHandlerConfig withLambdaConflictHandlerArn(String lambdaConflictHandlerArn) {
        this.lambdaConflictHandlerArn = lambdaConflictHandlerArn;
        return this;
    }
}