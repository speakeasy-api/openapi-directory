package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class GetIdentityProviderByIdentifierRequest {
    @JsonProperty("IdpIdentifier")
    public String idpIdentifier;
    public GetIdentityProviderByIdentifierRequest withIdpIdentifier(String idpIdentifier) {
        this.idpIdentifier = idpIdentifier;
        return this;
    }
    @JsonProperty("UserPoolId")
    public String userPoolId;
    public GetIdentityProviderByIdentifierRequest withUserPoolId(String userPoolId) {
        this.userPoolId = userPoolId;
        return this;
    }
}