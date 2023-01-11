package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdditionalAuthenticationProvider
 * Describes an additional authentication provider.
**/
public class AdditionalAuthenticationProvider {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authenticationType")
    public AuthenticationTypeEnum authenticationType;
    public AdditionalAuthenticationProvider withAuthenticationType(AuthenticationTypeEnum authenticationType) {
        this.authenticationType = authenticationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaAuthorizerConfig")
    public LambdaAuthorizerConfig lambdaAuthorizerConfig;
    public AdditionalAuthenticationProvider withLambdaAuthorizerConfig(LambdaAuthorizerConfig lambdaAuthorizerConfig) {
        this.lambdaAuthorizerConfig = lambdaAuthorizerConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openIDConnectConfig")
    public OpenIdConnectConfig openIDConnectConfig;
    public AdditionalAuthenticationProvider withOpenIdConnectConfig(OpenIdConnectConfig openIDConnectConfig) {
        this.openIDConnectConfig = openIDConnectConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userPoolConfig")
    public CognitoUserPoolConfig userPoolConfig;
    public AdditionalAuthenticationProvider withUserPoolConfig(CognitoUserPoolConfig userPoolConfig) {
        this.userPoolConfig = userPoolConfig;
        return this;
    }
}