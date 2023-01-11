package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateGraphqlApiRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("additionalAuthenticationProviders")
    public openapisdk.models.shared.AdditionalAuthenticationProvider[] additionalAuthenticationProviders;
    public CreateGraphqlApiRequestBody withAdditionalAuthenticationProviders(openapisdk.models.shared.AdditionalAuthenticationProvider[] additionalAuthenticationProviders) {
        this.additionalAuthenticationProviders = additionalAuthenticationProviders;
        return this;
    }
    @JsonProperty("authenticationType")
    public CreateGraphqlApiRequestBodyAuthenticationTypeEnum authenticationType;
    public CreateGraphqlApiRequestBody withAuthenticationType(CreateGraphqlApiRequestBodyAuthenticationTypeEnum authenticationType) {
        this.authenticationType = authenticationType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambdaAuthorizerConfig")
    public CreateGraphqlApiRequestBodyLambdaAuthorizerConfig lambdaAuthorizerConfig;
    public CreateGraphqlApiRequestBody withLambdaAuthorizerConfig(CreateGraphqlApiRequestBodyLambdaAuthorizerConfig lambdaAuthorizerConfig) {
        this.lambdaAuthorizerConfig = lambdaAuthorizerConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("logConfig")
    public CreateGraphqlApiRequestBodyLogConfig logConfig;
    public CreateGraphqlApiRequestBody withLogConfig(CreateGraphqlApiRequestBodyLogConfig logConfig) {
        this.logConfig = logConfig;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public CreateGraphqlApiRequestBody withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("openIDConnectConfig")
    public CreateGraphqlApiRequestBodyOpenIdConnectConfig openIDConnectConfig;
    public CreateGraphqlApiRequestBody withOpenIdConnectConfig(CreateGraphqlApiRequestBodyOpenIdConnectConfig openIDConnectConfig) {
        this.openIDConnectConfig = openIDConnectConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateGraphqlApiRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("userPoolConfig")
    public CreateGraphqlApiRequestBodyUserPoolConfig userPoolConfig;
    public CreateGraphqlApiRequestBody withUserPoolConfig(CreateGraphqlApiRequestBodyUserPoolConfig userPoolConfig) {
        this.userPoolConfig = userPoolConfig;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("xrayEnabled")
    public Boolean xrayEnabled;
    public CreateGraphqlApiRequestBody withXrayEnabled(Boolean xrayEnabled) {
        this.xrayEnabled = xrayEnabled;
        return this;
    }
}