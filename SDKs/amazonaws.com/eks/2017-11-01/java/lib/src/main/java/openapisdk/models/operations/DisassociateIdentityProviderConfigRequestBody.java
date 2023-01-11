package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DisassociateIdentityProviderConfigRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public DisassociateIdentityProviderConfigRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("identityProviderConfig")
    public DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig identityProviderConfig;
    public DisassociateIdentityProviderConfigRequestBody withIdentityProviderConfig(DisassociateIdentityProviderConfigRequestBodyIdentityProviderConfig identityProviderConfig) {
        this.identityProviderConfig = identityProviderConfig;
        return this;
    }
}