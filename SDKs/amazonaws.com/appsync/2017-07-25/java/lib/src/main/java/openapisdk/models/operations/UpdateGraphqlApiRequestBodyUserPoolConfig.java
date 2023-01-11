package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * UpdateGraphqlApiRequestBodyUserPoolConfig
 * Describes an Amazon Cognito user pool configuration.
**/
public class UpdateGraphqlApiRequestBodyUserPoolConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("appIdClientRegex")
    public String appIdClientRegex;
    public UpdateGraphqlApiRequestBodyUserPoolConfig withAppIdClientRegex(String appIdClientRegex) {
        this.appIdClientRegex = appIdClientRegex;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("awsRegion")
    public String awsRegion;
    public UpdateGraphqlApiRequestBodyUserPoolConfig withAwsRegion(String awsRegion) {
        this.awsRegion = awsRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("defaultAction")
    public openapisdk.models.shared.DefaultActionEnum defaultAction;
    public UpdateGraphqlApiRequestBodyUserPoolConfig withDefaultAction(openapisdk.models.shared.DefaultActionEnum defaultAction) {
        this.defaultAction = defaultAction;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userPoolId")
    public String userPoolId;
    public UpdateGraphqlApiRequestBodyUserPoolConfig withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}