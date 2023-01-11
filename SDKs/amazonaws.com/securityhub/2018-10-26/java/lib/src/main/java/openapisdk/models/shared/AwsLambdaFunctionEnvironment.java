package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsLambdaFunctionEnvironment
 * A function's environment variable settings.
**/
public class AwsLambdaFunctionEnvironment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Error")
    public AwsLambdaFunctionEnvironmentError error;
    public AwsLambdaFunctionEnvironment withError(AwsLambdaFunctionEnvironmentError error) {
        this.error = error;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Variables")
    public java.util.Map<String, String> variables;
    public AwsLambdaFunctionEnvironment withVariables(java.util.Map<String, String> variables) {
        this.variables = variables;
        return this;
    }
}