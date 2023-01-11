package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LambdaExecutorConfiguration
 * Details about the configuration for the <code>Lambda</code> action engine, or executor.
**/
public class LambdaExecutorConfiguration {
    @JsonProperty("lambdaFunctionArn")
    public String lambdaFunctionArn;
    public LambdaExecutorConfiguration withLambdaFunctionArn(String lambdaFunctionArn) {
        this.lambdaFunctionArn = lambdaFunctionArn;
        return this;
    }
}