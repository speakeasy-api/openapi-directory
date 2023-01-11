package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateGraphqlApiRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalAuthenticationProviders")
    public openapisdk.models.shared.AdditionalAuthenticationProvider[] additionalAuthenticationProviders;
    public UpdateGraphqlApiRequestBody withAdditionalAuthenticationProviders(openapisdk.models.shared.AdditionalAuthenticationProvider[] additionalAuthenticationProviders) {
        this.additionalAuthenticationProviders = additionalAuthenticationProviders;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("authenticationType")
    public UpdateGraphqlApiRequestBodyAuthenticationTypeEnum authenticationType;
    public UpdateGraphqlApiRequestBody withAuthenticationType(UpdateGraphqlApiRequestBodyAuthenticationTypeEnum authenticationType) {
        this.authenticationType = authenticationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaAuthorizerConfig")
    public UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig lambdaAuthorizerConfig;
    public UpdateGraphqlApiRequestBody withLambdaAuthorizerConfig(UpdateGraphqlApiRequestBodyLambdaAuthorizerConfig lambdaAuthorizerConfig) {
        this.lambdaAuthorizerConfig = lambdaAuthorizerConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logConfig")
    public UpdateGraphqlApiRequestBodyLogConfig logConfig;
    public UpdateGraphqlApiRequestBody withLogConfig(UpdateGraphqlApiRequestBodyLogConfig logConfig) {
        this.logConfig = logConfig;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public UpdateGraphqlApiRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openIDConnectConfig")
    public UpdateGraphqlApiRequestBodyOpenIdConnectConfig openIDConnectConfig;
    public UpdateGraphqlApiRequestBody withOpenIdConnectConfig(UpdateGraphqlApiRequestBodyOpenIdConnectConfig openIDConnectConfig) {
        this.openIDConnectConfig = openIDConnectConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userPoolConfig")
    public UpdateGraphqlApiRequestBodyUserPoolConfig userPoolConfig;
    public UpdateGraphqlApiRequestBody withUserPoolConfig(UpdateGraphqlApiRequestBodyUserPoolConfig userPoolConfig) {
        this.userPoolConfig = userPoolConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xrayEnabled")
    public Boolean xrayEnabled;
    public UpdateGraphqlApiRequestBody withXrayEnabled(Boolean xrayEnabled) {
        this.xrayEnabled = xrayEnabled;
        return this;
    }
}