package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Action
 * A configuration that specifies the action to perform when anomalies are detected.
**/
public class Action {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LambdaConfiguration")
    public LambdaConfiguration lambdaConfiguration;
    public Action withLambdaConfiguration(LambdaConfiguration lambdaConfiguration) {
        this.lambdaConfiguration = lambdaConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SNSConfiguration")
    public SnsConfiguration snsConfiguration;
    public Action withSnsConfiguration(SnsConfiguration snsConfiguration) {
        this.snsConfiguration = snsConfiguration;
        return this;
    }
}