package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeIdentityProviderConfigurationResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityProviderSamlMetadata")
    public String identityProviderSamlMetadata;
    public DescribeIdentityProviderConfigurationResponse withIdentityProviderSamlMetadata(String identityProviderSamlMetadata) {
        this.identityProviderSamlMetadata = identityProviderSamlMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityProviderType")
    public IdentityProviderTypeEnum identityProviderType;
    public DescribeIdentityProviderConfigurationResponse withIdentityProviderType(IdentityProviderTypeEnum identityProviderType) {
        this.identityProviderType = identityProviderType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ServiceProviderSamlMetadata")
    public String serviceProviderSamlMetadata;
    public DescribeIdentityProviderConfigurationResponse withServiceProviderSamlMetadata(String serviceProviderSamlMetadata) {
        this.serviceProviderSamlMetadata = serviceProviderSamlMetadata;
        return this;
    }
}