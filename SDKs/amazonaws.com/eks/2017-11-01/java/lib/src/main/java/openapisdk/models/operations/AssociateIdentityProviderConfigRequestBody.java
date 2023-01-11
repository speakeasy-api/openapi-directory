package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AssociateIdentityProviderConfigRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("clientRequestToken")
    public String clientRequestToken;
    public AssociateIdentityProviderConfigRequestBody withClientRequestToken(String clientRequestToken) {
        this.clientRequestToken = clientRequestToken;
        return this;
    }
    @JsonProperty("oidc")
    public AssociateIdentityProviderConfigRequestBodyOidc oidc;
    public AssociateIdentityProviderConfigRequestBody withOidc(AssociateIdentityProviderConfigRequestBodyOidc oidc) {
        this.oidc = oidc;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public AssociateIdentityProviderConfigRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}