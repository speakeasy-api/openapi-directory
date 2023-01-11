package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LambdaCodeHook
 * Specifies a Lambda function that verifies requests to a bot or fulfilles the user's request to a bot.
**/
public class LambdaCodeHook {
    @JsonProperty("codeHookInterfaceVersion")
    public String codeHookInterfaceVersion;
    public LambdaCodeHook withCodeHookInterfaceVersion(String codeHookInterfaceVersion) {
        this.codeHookInterfaceVersion = codeHookInterfaceVersion;
        return this;
    }
    @JsonProperty("lambdaARN")
    public String lambdaARN;
    public LambdaCodeHook withLambdaArn(String lambdaARN) {
        this.lambdaARN = lambdaARN;
        return this;
    }
}