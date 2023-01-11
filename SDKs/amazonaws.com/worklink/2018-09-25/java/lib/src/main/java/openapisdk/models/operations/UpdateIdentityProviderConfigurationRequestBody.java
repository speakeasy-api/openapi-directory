package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateIdentityProviderConfigurationRequestBody {
    @JsonProperty("FleetArn")
    public String fleetArn;
    public UpdateIdentityProviderConfigurationRequestBody withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityProviderSamlMetadata")
    public String identityProviderSamlMetadata;
    public UpdateIdentityProviderConfigurationRequestBody withIdentityProviderSamlMetadata(String identityProviderSamlMetadata) {
        this.identityProviderSamlMetadata = identityProviderSamlMetadata;
        return this;
    }
    @JsonProperty("IdentityProviderType")
    public UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnum identityProviderType;
    public UpdateIdentityProviderConfigurationRequestBody withIdentityProviderType(UpdateIdentityProviderConfigurationRequestBodyIdentityProviderTypeEnum identityProviderType) {
        this.identityProviderType = identityProviderType;
        return this;
    }
}