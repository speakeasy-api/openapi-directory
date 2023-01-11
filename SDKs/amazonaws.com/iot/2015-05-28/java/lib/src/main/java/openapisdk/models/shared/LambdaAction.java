package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LambdaAction
 * Describes an action to invoke a Lambda function.
**/
public class LambdaAction {
    @JsonProperty("functionArn")
    public String functionArn;
    public LambdaAction withFunctionArn(String functionArn) {
        this.functionArn = functionArn;
        return this;
    }
}