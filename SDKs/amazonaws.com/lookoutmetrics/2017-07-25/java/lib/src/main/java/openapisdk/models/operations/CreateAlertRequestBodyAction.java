package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CreateAlertRequestBodyAction
 * A configuration that specifies the action to perform when anomalies are detected.
**/
public class CreateAlertRequestBodyAction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LambdaConfiguration")
    public openapisdk.models.shared.LambdaConfiguration lambdaConfiguration;
    public CreateAlertRequestBodyAction withLambdaConfiguration(openapisdk.models.shared.LambdaConfiguration lambdaConfiguration) {
        this.lambdaConfiguration = lambdaConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SNSConfiguration")
    public openapisdk.models.shared.SnsConfiguration snsConfiguration;
    public CreateAlertRequestBodyAction withSnsConfiguration(openapisdk.models.shared.SnsConfiguration snsConfiguration) {
        this.snsConfiguration = snsConfiguration;
        return this;
    }
}