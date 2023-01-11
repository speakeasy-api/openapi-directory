package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateGraphqlApiRequestBodyUserPoolConfig
 * Describes an Amazon Cognito user pool configuration.
**/
public class CreateGraphqlApiRequestBodyUserPoolConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appIdClientRegex")
    public String appIdClientRegex;
    public CreateGraphqlApiRequestBodyUserPoolConfig withAppIdClientRegex(String appIdClientRegex) {
        this.appIdClientRegex = appIdClientRegex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsRegion")
    public String awsRegion;
    public CreateGraphqlApiRequestBodyUserPoolConfig withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultAction")
    public openapisdk.models.shared.DefaultActionEnum defaultAction;
    public CreateGraphqlApiRequestBodyUserPoolConfig withDefaultAction(openapisdk.models.shared.DefaultActionEnum defaultAction) {
        this.defaultAction = defaultAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userPoolId")
    public String userPoolId;
    public CreateGraphqlApiRequestBodyUserPoolConfig withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}