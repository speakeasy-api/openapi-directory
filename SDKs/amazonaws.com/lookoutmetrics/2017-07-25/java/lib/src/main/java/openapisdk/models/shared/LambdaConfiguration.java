package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LambdaConfiguration
 * Contains information about a Lambda configuration.
**/
public class LambdaConfiguration {
    @JsonProperty("LambdaArn")
    public String lambdaArn;
    public LambdaConfiguration withLambdaArn(String lambdaArn) {
        this.lambdaArn = lambdaArn;
        return this;
    }
    @JsonProperty("RoleArn")
    public String roleArn;
    public LambdaConfiguration withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}