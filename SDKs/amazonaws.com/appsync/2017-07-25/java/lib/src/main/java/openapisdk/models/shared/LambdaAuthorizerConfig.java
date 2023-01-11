package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LambdaAuthorizerConfig
 * A <code>LambdaAuthorizerConfig</code> holds configuration on how to authorize AppSync API access when using the <code>AWS_LAMBDA</code> authorizer mode. Be aware that an AppSync API may have only one Lambda authorizer configured at a time.
**/
public class LambdaAuthorizerConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authorizerResultTtlInSeconds")
    public Long authorizerResultTtlInSeconds;
    public LambdaAuthorizerConfig withAuthorizerResultTtlInSeconds(Long authorizerResultTtlInSeconds) {
        this.authorizerResultTtlInSeconds = authorizerResultTtlInSeconds;
        return this;
    }
    @JsonProperty("authorizerUri")
    public String authorizerUri;
    public LambdaAuthorizerConfig withAuthorizerUri(String authorizerUri) {
        this.authorizerUri = authorizerUri;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identityValidationExpression")
    public String identityValidationExpression;
    public LambdaAuthorizerConfig withIdentityValidationExpression(String identityValidationExpression) {
        this.identityValidationExpression = identityValidationExpression;
        return this;
    }
}