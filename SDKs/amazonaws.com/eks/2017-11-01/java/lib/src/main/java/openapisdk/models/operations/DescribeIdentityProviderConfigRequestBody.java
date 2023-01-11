package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DescribeIdentityProviderConfigRequestBody {
    @JsonProperty("identityProviderConfig")
    public DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig identityProviderConfig;
    public DescribeIdentityProviderConfigRequestBody withIdentityProviderConfig(DescribeIdentityProviderConfigRequestBodyIdentityProviderConfig identityProviderConfig) {
        this.identityProviderConfig = identityProviderConfig;
        return this;
    }
}