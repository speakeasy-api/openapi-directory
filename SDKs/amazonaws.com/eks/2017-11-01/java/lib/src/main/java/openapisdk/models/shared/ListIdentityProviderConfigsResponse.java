package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListIdentityProviderConfigsResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("identityProviderConfigs")
    public IdentityProviderConfig[] identityProviderConfigs;
    public ListIdentityProviderConfigsResponse withIdentityProviderConfigs(IdentityProviderConfig[] identityProviderConfigs) {
        this.identityProviderConfigs = identityProviderConfigs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextToken")
    public String nextToken;
    public ListIdentityProviderConfigsResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
}