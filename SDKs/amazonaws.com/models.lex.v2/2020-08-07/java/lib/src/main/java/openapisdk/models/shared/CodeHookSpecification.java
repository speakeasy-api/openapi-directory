package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * CodeHookSpecification
 * Contains information about code hooks that Amazon Lex calls during a conversation.
**/
public class CodeHookSpecification {
    @JsonProperty("lambdaCodeHook")
    public LambdaCodeHook lambdaCodeHook;
    public CodeHookSpecification withLambdaCodeHook(LambdaCodeHook lambdaCodeHook) {
        this.lambdaCodeHook = lambdaCodeHook;
        return this;
    }
}