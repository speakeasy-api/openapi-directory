package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CognitoUserPoolConfig
 * Describes an Amazon Cognito user pool configuration.
**/
public class CognitoUserPoolConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appIdClientRegex")
    public String appIdClientRegex;
    public CognitoUserPoolConfig withAppIdClientRegex(String appIdClientRegex) {
        this.appIdClientRegex = appIdClientRegex;
        return this;
    }
    @JsonProperty("awsRegion")
    public String awsRegion;
    public CognitoUserPoolConfig withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
    @JsonProperty("userPoolId")
    public String userPoolId;
    public CognitoUserPoolConfig withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}