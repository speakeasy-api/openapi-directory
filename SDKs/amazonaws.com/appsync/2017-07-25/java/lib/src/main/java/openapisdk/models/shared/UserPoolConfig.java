package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UserPoolConfig
 * Describes an Amazon Cognito user pool configuration.
**/
public class UserPoolConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appIdClientRegex")
    public String appIdClientRegex;
    public UserPoolConfig withAppIdClientRegex(String appIdClientRegex) {
        this.appIdClientRegex = appIdClientRegex;
        return this;
    }
    @JsonProperty("awsRegion")
    public String awsRegion;
    public UserPoolConfig withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
    @JsonProperty("defaultAction")
    public DefaultActionEnum defaultAction;
    public UserPoolConfig withDefaultAction(DefaultActionEnum defaultAction) {
        this.defaultAction = defaultAction;
        return this;
    }
    @JsonProperty("userPoolId")
    public String userPoolId;
    public UserPoolConfig withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}